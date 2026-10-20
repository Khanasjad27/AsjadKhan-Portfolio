'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThreeScene } from '@/components/Three/ThreeScene';
import styles from './SceneBackdrop.module.scss';

export const SceneBackdrop: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Portrait and 3D Scene smoothly dissolve as user scrolls down the hero section
  const portraitOpacity = Math.max(0, 1 - scrollY / 480);
  const portraitTranslateY = scrollY * 0.18;
  const threeOpacity = Math.max(0, 1 - scrollY / 680);

  return (
    <div className={styles.sceneBackdrop} aria-hidden="true">
      {/* 3D WebGL Three.js Particle and Cybernetic Wireframe Scene */}
      <div
        className={styles.threeWrapper}
        style={{
          opacity: threeOpacity,
          transform: `translateY(${scrollY * 0.08}px)`
        }}
      >
        <ThreeScene />
      </div>
      {/* Subtle Vertical Column Guidelines */}
      <div className={styles.gridLines}>
        <div className={styles.gridCol} />
        <div className={styles.gridCol} />
        <div className={styles.gridCol} />
        <div className={styles.gridCol} />
        <div className={styles.gridCol} />
      </div>

      {/* Ambient Vignette Glows */}
      <div className={styles.ambientTopGlow} />
      <div className={styles.ambientSideGlowLeft} />
      <div className={styles.ambientSideGlowRight} />

      {/* Sarthak-style Noir Signal Portrait centered behind the hero */}
      <div
        className={styles.portraitWrapper}
        style={{
          opacity: portraitOpacity,
          transform: `translate(-50%, calc(-50% + ${portraitTranslateY}px))`,
          pointerEvents: 'none'
        }}
      >
        <Image
          src="/images/asjad-signal.png"
          alt=""
          width={720}
          height={900}
          priority
          className={styles.portraitImg}
        />
        {/* Soft radial feathered vignette merging into #030303 */}
        <div className={styles.radialVignette} />
        <div className={styles.bottomMelt} />
      </div>
    </div>
  );
};
