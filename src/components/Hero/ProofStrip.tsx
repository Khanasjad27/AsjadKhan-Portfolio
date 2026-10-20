'use client';

import React from 'react';
import { ArrowUpRight, Sparkles, Zap, BookOpen, Layers } from 'lucide-react';
import styles from './ProofStrip.module.scss';

export const ProofStrip: React.FC = () => {
  return (
    <section className={styles.proofStrip} aria-label="Authentic credentials and achievements">
      {/* 01: 2x Hackathon Winner */}
      <div className={styles.proofCol}>
        <div className={styles.metric}>
          <span className={styles.number}>2x</span>
          <span className={styles.symbol}>WINNER</span>
        </div>
        <p className={styles.label}>
          <strong>2x Hackathon Awardee</strong> — 3rd Rank at GitGrade &amp; 2nd Runner-Up in GFG Body of MHSSCE
        </p>
      </div>

      {/* 02: Google Student Ambassador */}
      <div className={styles.proofCol}>
        <div className={styles.metric}>
          <span className={styles.number}>2026</span>
          <span className={styles.symbol}>✦</span>
        </div>
        <p className={styles.label}>
          <strong>Google Student Ambassador</strong> selection to champion Google AI &amp; developer tools
        </p>
      </div>

      {/* 03: Research Papers */}
      <div className={styles.proofCol}>
        <div className={styles.metric}>
          <span className={styles.number}>2</span>
          <span className={styles.symbol}>PAPERS</span>
        </div>
        <p className={styles.label}>
          <strong>Research submissions</strong> co-authored for ICSSSD (#113) &amp; SMARTSSD (#123) conferences
        </p>
      </div>

      {/* 04: IIT Delhi Campus Ambassador */}
      <div className={styles.proofCol}>
        <div className={styles.metric}>
          <span className={styles.number}>Top</span>
          <span className={styles.symbol}>RANK</span>
        </div>
        <p className={styles.label}>
          <strong>Campus Ambassador</strong> nationwide distinction for IIT Delhi eDC BECon 2026
        </p>
      </div>

      {/* 05: Action Callout */}
      <a href="#work" className={styles.impactAction}>
        <span>
          SELECTED WORK<br />
          <strong>EXPLORE ALL 4 PROJECTS</strong>
        </span>
        <ArrowUpRight size={22} className={styles.impactArrow} />
      </a>
    </section>
  );
};
