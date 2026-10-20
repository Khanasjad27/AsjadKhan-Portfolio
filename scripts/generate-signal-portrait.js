const sharp = require('sharp');

async function generateSignalPortrait() {
  const inputPath = 'public/images/asjad-khan.jpg';
  const outputPath = 'public/images/asjad-signal.png';

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Extract raw RGBA
  const rawBuffer = await image
    .ensureAlpha()
    .raw()
    .toBuffer();

  const data = new Uint8ClampedArray(rawBuffer);

  // Background segmentation flood fill
  const isBg = new Uint8Array(width * height);
  const queue = [];

  for (let x = 0; x < width; x++) {
    const idxTop = (0 * width + x) * 4;
    if (data[idxTop] > 180 && data[idxTop + 1] > 180 && data[idxTop + 2] > 180) {
      isBg[x] = 1;
      queue.push(x);
    }
    if (x < 120 || x > width - 120) {
      const idxBot = ((height - 1) * width + x) * 4;
      if (data[idxBot] > 170) {
        isBg[(height - 1) * width + x] = 1;
        queue.push((height - 1) * width + x);
      }
    }
  }

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

  // Alpha mask feathering
  const alphaMask = new Float32Array(width * height);
  for (let i = 0; i < width * height; i++) {
    alphaMask[i] = isBg[i] ? 0 : 1;
  }

  const feathered = new Float32Array(width * height);
  const radius = 3;
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
      feathered[y * width + x] = sum / count;
    }
  }

  // Center of face for subtle radial falloff
  const faceCenterX = width * 0.5;
  const faceCenterY = height * 0.42;
  const maxDist = width * 0.62;

  // Process exact Sarthak-style noir shading
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const baseAlpha = feathered[y * width + x];

      if (baseAlpha <= 0.02) {
        data[idx + 3] = 0;
        continue;
      }

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Luminance (Rec. 709)
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // Sarthak noir curve: high contrast, deep cinematic blacks, crisp catchlights
      let norm = lum / 255;
      norm = Math.pow(norm, 1.45) * 1.25;
      norm = Math.min(1, Math.max(0, norm));

      let gray = norm * 255;

      // Distance from face center for organic radial feathering
      const dist = Math.hypot(x - faceCenterX, y - faceCenterY);
      let radialVignette = 1;
      if (dist > maxDist * 0.7) {
        radialVignette = Math.max(0, 1 - (dist - maxDist * 0.7) / (maxDist * 0.35));
      }

      // Bottom fade out into #030303
      let bottomFade = 1;
      if (y > height * 0.65) {
        bottomFade = Math.max(0, 1 - (y - height * 0.65) / (height * 0.35));
      }

      const finalAlpha = baseAlpha * radialVignette * bottomFade;

      data[idx] = Math.round(gray);
      data[idx + 1] = Math.round(gray);
      data[idx + 2] = Math.round(gray);
      data[idx + 3] = Math.round(finalAlpha * 255);
    }
  }

  await sharp(Buffer.from(data), {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toFile(outputPath);

  console.log('✅ Sarthak-style noir signal portrait created at:', outputPath);
}

generateSignalPortrait().catch(console.error);
