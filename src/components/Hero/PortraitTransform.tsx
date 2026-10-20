'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Terminal, Cpu, ShieldCheck, Sparkles, Code2, Zap, Eye } from 'lucide-react';
import { use3DTilt } from '@/hooks/use3DTilt';
import styles from './PortraitTransform.module.scss';

// Character ramp ordered from darkest to brightest
const ASCII_CHARS = [
  ' ', ' ', '.', '\'', '`', '^', '"', ',', ':', ';',
  'I', 'l', '!', 'i', '>', '<', '~', '+', '_', '-',
  '?', ']', '[', '}', '{', '1', ')', '(', '|', '\\',
  '/', 'r', 'x', 'n', 'u', 'v', 'c', 'z', 's', 'Y',
  '0', 'a', 'e', 'w', 'q', 'p', 'd', 'b', 'k', 'h',
  '*', '#', 'M', 'W', '&', '8', '%', 'B', '@', '$'
];

type ColorMode = 'matrix' | 'rgb_syntax';

interface PortraitTransformProps {
  scrollDissolve?: number; // 0 (fully visible) to 1 (fully dissolved into code)
}

export const PortraitTransform: React.FC<PortraitTransformProps> = ({ scrollDissolve = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [colorMode, setColorMode] = useState<ColorMode>('matrix');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  // 3D Tilt hook
  const { ref: tiltRef, tiltProps, glareStyle } = use3DTilt<HTMLDivElement>({
    maxTilt: 14,
    perspective: 1200,
    scale: 1.02,
    glare: true
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const sampledDataRef = useRef<{
    cols: number;
    rows: number;
    pixels: { charIndex: number; r: number; g: number; b: number; lum: number }[];
  } | null>(null);

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Pre-sample the black-and-white portrait
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/asjad-khan-bw-clean.png';

    img.onload = () => {
      const cols = 76; // High-resolution ASCII columns
      const rows = 100; // High-resolution ASCII rows

      const offscreen = document.createElement('canvas');
      offscreen.width = cols;
      offscreen.height = rows;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, cols, rows);
      const imgData = offCtx.getImageData(0, 0, cols, rows).data;

      const pixels: { charIndex: number; r: number; g: number; b: number; lum: number }[] = [];

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const a = imgData[idx + 3];

          // Transparent background has 0 luminance
          const lum = a < 25 ? 0 : 0.299 * r + 0.587 * g + 0.114 * b;

          const rampIndex = Math.min(
            ASCII_CHARS.length - 1,
            Math.floor((lum / 255) * ASCII_CHARS.length)
          );

          pixels.push({ charIndex: rampIndex, r, g, b, lum });
        }
      }

      sampledDataRef.current = { cols, rows, pixels };
      setImageLoaded(true);
    };
  }, []);

  // Track mouse coordinates over the portrait for interactive code flashlight
  const handleMouseMoveInternal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  // Main ASCII Rendering Loop
  const renderAsciiCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const sampled = sampledDataRef.current;
    if (!canvas || !sampled) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const { cols, rows, pixels } = sampled;
    const cellW = rect.width / cols;
    const cellH = rect.height / rows;

    const fontSize = Math.floor(cellH * 1.08);
    ctx.font = `700 ${fontSize}px "JetBrains Mono", monospace`;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';

    let scanY = 0;

    const draw = () => {
      // Clear canvas with full transparency so background shows through cleanly
      ctx.clearRect(0, 0, rect.width, rect.height);

      scanY = (scanY + 2.5) % rect.height;

      // Mouse flashlight position
      const flashlightX = mousePos.x * rect.width;
      const flashlightY = mousePos.y * rect.height;

      for (let y = 0; y < rows; y++) {
        const baseCharY = y * cellH;
        const isNearScanline = Math.abs(baseCharY - scanY) < 24;

        for (let x = 0; x < cols; x++) {
          const p = pixels[y * cols + x];

          // Transparent background pixel
          if (p.lum < 15) continue;

          // Dissolution logic when user is scrolling down:
          // Random dispersal threshold + upward evaporation drift
          let charScatterX = 0;
          let charScatterY = 0;

          if (scrollDissolve > 0.05) {
            const threshold = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
            const rand = threshold - Math.floor(threshold);

            // Progressive drop-off of characters
            if (rand < scrollDissolve * 1.25) continue;

            // Upward dispersion / evaporation into code vapor
            const scatterMag = Math.pow(scrollDissolve, 1.5) * 65;
            charScatterX = (rand - 0.5) * scatterMag;
            charScatterY = -Math.abs(rand) * scatterMag * 1.4;
          }

          const baseCharX = x * cellW;

          // Interactive Hover Flashlight Effect
          const distToMouse = Math.hypot(baseCharX - flashlightX, baseCharY - flashlightY);
          const lightRadius = 90;
          const lightIntensity = Math.max(0, 1 - distToMouse / lightRadius);

          // Subtle fluid magnetic repulsion away from cursor
          let pushX = 0;
          let pushY = 0;
          if (lightIntensity > 0 && isHovered) {
            const angle = Math.atan2(baseCharY - flashlightY, baseCharX - flashlightX);
            const push = lightIntensity * 5;
            pushX = Math.cos(angle) * push;
            pushY = Math.sin(angle) * push;
          }

          const finalX = baseCharX + charScatterX + pushX;
          const finalY = baseCharY + charScatterY + pushY;

          // Character selection: Jitter or scramble into binary when scrolling or cursor hovers
          let char = ASCII_CHARS[p.charIndex];
          if (scrollDissolve > 0.15 && Math.random() < scrollDissolve * 0.7) {
            char = Math.random() > 0.5 ? '1' : '0';
          } else if (Math.random() < 0.025) {
            const jitter = Math.max(0, Math.min(ASCII_CHARS.length - 1, p.charIndex + (Math.random() > 0.5 ? 1 : -1)));
            char = ASCII_CHARS[jitter];
          }

          // Dynamic Color Grading
          if (lightIntensity > 0.6 && isHovered) {
            ctx.fillStyle = '#ffffff'; // Radiant pure white under cursor center
          } else if (lightIntensity > 0.25 && isHovered) {
            ctx.fillStyle = '#a7f3d0'; // Luminous electric mint
          } else if (isNearScanline) {
            ctx.fillStyle = '#34d399'; // Bright neon lime along scanline
          } else if (colorMode === 'matrix') {
            if (p.lum > 170) {
              ctx.fillStyle = '#34d399'; // Bright lime for highlights
            } else if (p.lum > 95) {
              ctx.fillStyle = '#10b981'; // Emerald for midtones
            } else if (p.lum > 45) {
              ctx.fillStyle = '#06b6d4'; // Cyan for contours
            } else {
              ctx.fillStyle = '#047857'; // Deep green for shadows
            }
          } else {
            // Silver Syntax Mode
            if (p.lum > 180) {
              ctx.fillStyle = '#ffffff';
            } else if (p.lum > 100) {
              ctx.fillStyle = '#94a3b8';
            } else {
              ctx.fillStyle = '#38bdf8';
            }
          }

          ctx.fillText(char, finalX, finalY);
        }
      }

      // Smooth laser scanline
      const scanGrad = ctx.createLinearGradient(0, scanY - 14, 0, scanY + 14);
      scanGrad.addColorStop(0, 'rgba(16, 185, 129, 0)');
      scanGrad.addColorStop(0.5, 'rgba(52, 211, 153, 0.45)');
      scanGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 14, rect.width, 28);

      if (!prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(draw);
      }
    };

    draw();
  }, [colorMode, prefersReducedMotion, mousePos, scrollDissolve, isHovered]);

  const stopAsciiCanvas = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const shouldRenderCode = isHovered || scrollDissolve > 0.08;

  useEffect(() => {
    if (shouldRenderCode && imageLoaded) {
      renderAsciiCanvas();
    } else {
      stopAsciiCanvas();
    }
    return () => stopAsciiCanvas();
  }, [shouldRenderCode, imageLoaded, renderAsciiCanvas, stopAsciiCanvas]);

  // Compute scroll dissolution opacity and transform
  const dissolveOpacity = Math.max(0, 1 - scrollDissolve * 1.35);
  const dissolveTransform = `translateY(${scrollDissolve * 60}px) scale(${1 - scrollDissolve * 0.1})`;

  return (
    <div
      className={styles.centerHeroStage}
      style={{
        opacity: dissolveOpacity,
        transform: dissolveTransform
      }}
    >
      {/* Hidden SVG Filter definition for high-contrast studio B&W lighting */}
      <svg className={styles.svgFilterDef} aria-hidden="true">
        <filter id="studio-bw-lighting">
          <feColorMatrix
            type="matrix"
            values="
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0.33 0.33 0.33 0 0
              0    0    0    1 0"
          />
          <feComponentTransfer>
            <feFuncR type="linear" slope="1.1" intercept="-0.02" />
            <feFuncG type="linear" slope="1.1" intercept="-0.02" />
            <feFuncB type="linear" slope="1.1" intercept="-0.02" />
          </feComponentTransfer>
        </filter>
      </svg>

      <div
        ref={tiltRef}
        {...tiltProps}
        onMouseMove={(e) => {
          tiltProps.onMouseMove(e);
          handleMouseMoveInternal(e);
        }}
        className={`${styles.container} ${shouldRenderCode ? styles.transformed : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        tabIndex={0}
        role="region"
        aria-label="Asjad Khan's interactive black-and-white portrait. Hovering or scrolling dissolves photograph into pure ASCII code art."
      >
        {/* Dynamic Specular 3D Glare */}
        <div className={styles.glareLayer} style={glareStyle} aria-hidden="true" />

        {/* Normal State: Studio Black & White Portrait with ZERO internal box borders */}
        <div className={styles.photoStage}>
          <div className={styles.photoLayer}>
            <Image
              src="/images/asjad-khan-bw-clean.png"
              alt="Asjad Khan — Studio Black & White Portrait"
              width={540}
              height={720}
              priority
              className={styles.portraitImg}
            />
            {/* Seamless bottom feather into page background */}
            <div className={styles.bottomFeather} />
          </div>

          {/* Full ASCII Code Canvas (replaces photo on hover or scroll) */}
          <canvas
            ref={canvasRef}
            className={styles.asciiCanvas}
            aria-hidden="true"
          />

          {/* 3D Floating Razorpay AI Builders Stickers (floating in 3D space) */}
          <div className={`${styles.sticker} ${styles.blueCodeSticker}`} aria-hidden="true">
            <span className={styles.stickerLine}>+1|1</span>
            <span className={styles.stickerLine}>=nnccnda</span>
            <span className={styles.stickerLine}>.!lhbqv</span>
            <span className={styles.stickerLine}>-inthvcqu</span>
          </div>

          <div className={`${styles.sticker} ${styles.cyanTagSticker}`} aria-hidden="true">
            <span>tM</span>
            <span>Qu&apos;&apos;</span>
            <span>|1~</span>
            <span>&apos;-h</span>
          </div>

          <div className={`${styles.sticker} ${styles.yellowPostIt}`} aria-hidden="true">
            <span>How many</span>
            <span>tokens did you</span>
            <span>ship today?</span>
          </div>

          <div className={`${styles.sticker} ${styles.cyberGenesisSticker}`} aria-hidden="true">
            <span>CYBER GENESIS</span>
            <span>=vbkcdux~</span>
          </div>
        </div>

        {/* Floating Controls Pill (Clean floating pill, no restrictive borders) */}
        <div
          className={styles.floatingControls}
          onClick={(e) => e.stopPropagation()}
          aria-label="Code Art Color Mode Controls"
        >
          <button
            type="button"
            className={`${styles.modeBtn} ${colorMode === 'matrix' ? styles.activeMode : ''}`}
            onClick={() => setColorMode('matrix')}
          >
            <Zap size={11} />
            <span>Matrix Green</span>
          </button>
          <button
            type="button"
            className={`${styles.modeBtn} ${colorMode === 'rgb_syntax' ? styles.activeMode : ''}`}
            onClick={() => setColorMode('rgb_syntax')}
          >
            <Eye size={11} />
            <span>Silver Syntax</span>
          </button>
        </div>

        {/* Dynamic Micro Hint */}
        <div className={styles.hoverHint} aria-hidden="true">
          <Sparkles size={11} className={styles.sparkle} />
          <span>
            {shouldRenderCode
              ? '✦ Identity digitized into living code'
              : 'Hover to translate into code • Scroll down to dissolve'}
          </span>
          <Code2 size={11} />
        </div>
      </div>
    </div>
  );
};
