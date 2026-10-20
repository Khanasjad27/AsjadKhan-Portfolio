'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface TiltOptions {
  maxTilt?: number;      // Maximum tilt rotation in degrees (e.g. 15)
  perspective?: number;  // Perspective depth in px (e.g. 1000)
  scale?: number;        // Scale on hover (e.g. 1.03)
  speed?: number;        // Transition speed
  glare?: boolean;       // Whether to calculate glare position
}

export function use3DTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const {
    maxTilt = 12,
    perspective = 1000,
    scale = 1.02,
    glare = true
  } = options;

  const ref = useRef<T | null>(null);
  const [transform, setTransform] = useState<string>('');
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<T> | MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX; // -1 to 1
    const percentY = (y - centerY) / centerY; // -1 to 1

    const rotateX = -percentY * maxTilt;
    const rotateY = percentX * maxTilt;

    setTransform(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const glarePercentX = (x / rect.width) * 100;
      const glarePercentY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.18,
        background: `radial-gradient(circle at ${glarePercentX.toFixed(1)}% ${glarePercentY.toFixed(1)}%, rgba(255, 255, 255, 0.4) 0%, rgba(16, 185, 129, 0.2) 30%, transparent 70%)`
      });
    }
  }, [maxTilt, perspective, scale, glare]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlareStyle({ opacity: 0 });
  }, [perspective]);

  return {
    ref,
    transform,
    glareStyle,
    isHovered,
    tiltProps: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: {
        transform: transform || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d' as const
      }
    }
  };
}
