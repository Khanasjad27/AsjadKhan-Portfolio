'use client';

import React from 'react';
import { use3DTilt } from '@/hooks/use3DTilt';
import styles from './TiltCard.module.scss';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02
}) => {
  const { ref, tiltProps, glareStyle } = use3DTilt<HTMLDivElement>({
    maxTilt,
    perspective,
    scale,
    glare: true
  });

  return (
    <div
      ref={ref}
      {...tiltProps}
      className={`${styles.tiltWrapper} ${className}`}
    >
      <div className={styles.glareEffect} style={glareStyle} aria-hidden="true" />
      <div className={styles.tiltInner}>
        {children}
      </div>
    </div>
  );
};
