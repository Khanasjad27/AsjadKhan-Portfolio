const sharp = require('sharp');
const fs = require('fs');

async function processPortrait() {
  const inputPath = 'public/images/asjad-khan.jpg';
  const outputPath = 'public/images/asjad-khan-bw-clean.png';

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Extract raw RGBA
  const rawBuffer = await image
    .ensureAlpha()
    .raw()
    .toBuffer();

  const data = new Uint8ClampedArray(rawBuffer);

  // Background segmentation: flood-fill from border pixels
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed top row
  for (let x = 0; x < width; x++) {
    const idxTop = (0 * width + x) * 4;
    if (data[idxTop] > 180 && data[idxTop + 1] > 180 && data[idxTop + 2] > 180) {
      isBg[x] = 1;
      queue.push(x);
    }
    // Bottom corners
    if (x < 120 || x > width - 120) {
      const idxBot = ((height - 1) * width + x) * 4;
      if (data[idxBot] > 170) {
        isBg[(height - 1) * width + x] = 1;
        queue.push((height - 1) * width + x);
      }
    }
  }

  // Seed sides
  for (let y = 0; y < height; y++) {
    const idxLeft = (y * width + 0) * 4;
    if (data[idxLeft] > 180 && data[idxLeft + 1] > 180 && data[idxLeft + 2] > 180) {
      isBg[y * width] = 1;
      queue.push(y * width);
    }
    const idxRight = (y * width + (width - 1)) * 4;
    if (data[idxRight] > 180 && data[idxRight + 1] > 180 && data[idxRight + 2] > 180) {
      isBg[y * width + (width - 1)] = 1;
      queue.push(y * width + (width - 1));
    }
  }

  // BFS Flood Fill for background
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      cy > 0 ? (cy - 1) * width + cx : -1,
      cy < height - 1 ? (cy + 1) * width + cx : -1,
      cx > 0 ? cy * width + (cx - 1) : -1,
      cx < width - 1 ? cy * width + (cx + 1) : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !isBg[n]) {
        const nIdx = n * 4;
        const r = data[nIdx];
        const g = data[nIdx + 1];
        const b = data[nIdx + 2];
        if (r > 170 && g > 170 && b > 170) {
          isBg[n] = 1;
          queue.push(n);
        }
      }
    }
  }

  // Calculate distance from silhouette edge for edge rim lighting & feathering
  const alphaMask = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    alphaMask[i] = isBg[i] ? 0 : 1;
  }

  // 1-pass simple box blur on alpha mask for soft feathering (anti-aliasing)
  const featheredMask = new Float32Array(width * height);
  const radius = 2;
  for (let y = radius; y < height - radius; y++) {
    for (let x = radius; x < width - radius; x++) {
      let sum = 0;
      let count = 0;
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          sum += alphaMask[(y + dy) * width + (x + dx)];
          count++;
        }
      }
      featheredMask[y * width + x] = sum / count;
    }
  }

  // Rim lighting map: find pixels near the boundary of the mask
  const rimMap = new Float32Array(width * height);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      if (!isBg[y * width + x]) {
        // Check if neighbor is background
        const hasBgNeighbor =
          isBg[(y - 1) * width + x] ||
          isBg[(y + 1) * width + x] ||
          isBg[y * width + (x - 1)] ||
          isBg[y * width + (x + 1)] ||
          isBg[(y - 2) * width + x] ||
          isBg[y * width + (x - 2)] ||
          isBg[y * width + (x + 2)];
        if (hasBgNeighbor && y < height * 0.8) {
          rimMap[y * width + x] = 1.0;
        }
      }
    }
  }

  // Compose high-contrast studio B&W with dramatic lighting
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alphaVal = featheredMask[y * width + x];

      if (alphaVal <= 0.05) {
        data[idx + 3] = 0;
        continue;
      }

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Luminance (Rec. 709)
      let lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // Studio tone curve: increase contrast, lift mid-highlights, deepen shadows
      let norm = lum / 255;
      // S-curve contrast
      norm = norm < 0.5
        ? Math.pow(norm * 2, 1.35) / 2
        : 1 - Math.pow((1 - norm) * 2, 1.25) / 2;

      // Key light highlight on face
      let gray = norm * 255 * 1.08;

      // Add rim light highlight along hair / silhouette
      if (rimMap[y * width + x] > 0.5) {
        gray = Math.min(255, gray + 45);
      }

      gray = Math.min(255, Math.max(0, gray));

      // Bottom fade out into dark background
      let finalAlpha = alphaVal;
      if (y > height * 0.75) {
        const fadeProgress = (y - height * 0.75) / (height * 0.25);
        finalAlpha = alphaVal * Math.max(0, 1 - fadeProgress * 1.1);
      }

      data[idx] = gray;
      data[idx + 1] = gray;
      data[idx + 2] = gray;
      data[idx + 3] = Math.round(finalAlpha * 255);
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toFile(outputPath);

  console.log('✅ Studio Black & White Portrait with Rim Lighting & Soft Alpha saved to:', outputPath);
}

processPortrait().catch(console.error);
