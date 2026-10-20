'use client';

import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercent(Math.min(1, Math.max(0, scrollTop / docHeight)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        pointerEvents: 'none',
        background: 'transparent'
      }}
      aria-hidden="true"
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          transformOrigin: '0% 50%',
          transform: `scaleX(${scrollPercent})`,
          background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #06b6d4 100%)',
          boxShadow: '0 0 12px rgba(16, 185, 129, 0.7)',
          transition: 'transform 0.08s ease-out'
        }}
      />
    </div>
  );
};
