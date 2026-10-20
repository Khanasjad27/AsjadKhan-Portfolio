'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './SignalExplorer.module.scss';

interface Perspective {
  id: string;
  label: string;
  tag: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  waveFreq: number;
  waveSpeed: number;
}

const PERSPECTIVES: Perspective[] = [
  {
    id: 'build',
    label: 'Build',
    tag: 'STRUCTURE',
    title: 'Give an idea structure.',
    description: 'Products and interfaces that connect real needs to working software.',
    linkText: 'Explore the products ↗',
    linkHref: '#work',
    waveFreq: 0.08,
    waveSpeed: 0.03
  },
  {
    id: 'research',
    label: 'Research',
    tag: 'RIPPLES',
    title: 'Explore AI frontiers.',
    description: 'IEEE paper submissions on edge computing optimization and deep learning systems.',
    linkText: 'Read the research notes ↗',
    linkHref: '#research',
    waveFreq: 0.14,
    waveSpeed: 0.045
  },
  {
    id: 'connect',
    label: 'Connect',
    tag: 'SIGNAL',
    title: 'Bring people forward.',
    description: 'Selected as Google Student Ambassador 2026. Mentoring developers and growing tech communities.',
    linkText: 'Explore the community ↗',
    linkHref: '#experience',
    waveFreq: 0.06,
    waveSpeed: 0.02
  }
];

export const SignalExplorer: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  const active = PERSPECTIVES[activeIdx];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const cols = 28;
    const rows = 28;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      const spacingX = width / (cols + 1);
      const spacingY = height / (rows + 1);

      time += active.waveSpeed;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const posX = (x + 1) * spacingX;
          const posY = (y + 1) * spacingY;

          // 3D Perspective wave distortion
          const distFromCenter = Math.hypot(x - cols / 2, y - rows / 2);
          const wave = Math.sin(x * active.waveFreq + time) * Math.cos(y * active.waveFreq + time * 0.8);
          const ripple = Math.sin(distFromCenter * 0.3 - time);

          const offsetY = (wave * 12 + ripple * 6);
          const dotRadius = Math.max(1, 1.6 + wave * 0.8);

          // Alpha modulation
          const alpha = Math.max(0.12, 0.38 + wave * 0.28);

          ctx.fillStyle = activeIdx === 0
            ? `rgba(16, 185, 129, ${alpha})`
            : activeIdx === 1
            ? `rgba(6, 182, 212, ${alpha})`
            : `rgba(52, 211, 153, ${alpha})`;

          ctx.beginPath();
          ctx.arc(posX, posY + offsetY, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(render);
    };

    // Set canvas dimensions
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    render();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [active, activeIdx]);

  return (
    <div className={styles.signalExplorer}>
      <div className={styles.signalTopline}>
        <span className={styles.toplineEyebrow}>THREE DISCIPLINES. ONE PERSPECTIVE.</span>
        <span className={styles.toplineIndex}>0{activeIdx + 1} / 03</span>
      </div>

      <div className={styles.signalVisual}>
        <canvas ref={canvasRef} className={styles.waveCanvas} />
        <span className={styles.centerLabel}>{active.tag}</span>
      </div>

      <div className={styles.signalOptions} role="group" aria-label="Explore my disciplines">
        {PERSPECTIVES.map((p, idx) => (
          <button
            key={p.id}
            type="button"
            className={`${styles.optionBtn} ${activeIdx === idx ? styles.activeOption : ''}`}
            onClick={() => setActiveIdx(idx)}
            aria-pressed={activeIdx === idx}
          >
            <span>{p.label}</span>
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <div className={styles.signalStory}>
        <h3 className={styles.storyTitle}>{active.title}</h3>
        <p className={styles.storyDesc}>{active.description}</p>
        <a href={active.linkHref} className="text-link">
          {active.linkText}
        </a>
      </div>

      <p className={styles.signalHint}>Choose a perspective.</p>
    </div>
  );
};
