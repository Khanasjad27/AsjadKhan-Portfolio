'use client';

import React from 'react';
import styles from './TechMarquee.module.scss';

const MARQUEE_ITEMS = [
  'PRACTICAL AI INTEGRATION',
  'REPOMIRROR // 3RD RANK GITGRADE',
  'FULL-STACK ARCHITECTURE',
  'SUPABASE EDGE FUNCTIONS',
  'NEXT.JS 15 APP ROUTER',
  'GOOGLE STUDENT AMBASSADOR 2026',
  'RESTFUL API DESIGN',
  'IEEE MHSSCE JOINT WEBMASTER',
  'TYPESCRIPT & REACT',
  'PRISMA & POSTGRESQL',
  'LEGALEASE // MULTILINGUAL TTS'
];

export const TechMarquee: React.FC = () => {
  return (
    <div className={styles.marqueeWrap} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div key={idx} className={styles.marqueeItem}>
            <span className={styles.star}>✦</span>
            <span className={styles.text}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
