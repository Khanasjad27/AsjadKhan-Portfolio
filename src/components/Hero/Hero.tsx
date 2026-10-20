'use client';

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Play, Pause } from 'lucide-react';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  const [motionEnabled, setMotionEnabled] = useState(true);

  return (
    <section id="top" className={styles.heroSection}>
      {/* Topline metadata bar */}
      <div className={styles.heroTopline}>
        <div className={styles.toplineLeft}>
          <span className={styles.liveDot} />
          <span>FULL-STACK ENGINEER. 2X HACKATHON WINNER. AMBASSADOR.</span>
        </div>
        <div className={styles.toplineRight}>
          <span>BASED IN MUMBAI · THINKING BEYOND</span>
        </div>
      </div>

      {/* Left side editorial presence label */}
      <div className={styles.sideNote} aria-hidden="true">
        <span className={styles.sideNoteIndex}>01 / PRESENCE</span>
        <span className={styles.sideNotePlus}>+</span>
        <span className={styles.sideNoteStack}>
          FULL-STACK<br />
          AI &amp; ML<br />
          SYSTEMS
        </span>
      </div>

      {/* Main Center Storytelling Content */}
      <div className={styles.heroContent}>
        <span className={styles.heroKicker}>
          A HUMAN PERSPECTIVE ON TECHNOLOGY // GSA 2026
        </span>

        <h1 className={styles.headline}>
          Asjad <em>Khan</em>
        </h1>

        <div className={styles.heroDescription}>
          <p>
            I build products, explore practical AI,<br className={styles.desktopBreak} />
            and ship software that moves people forward.
          </p>

          <div className={styles.heroActions}>
            <a href="#work" className="pill-link">
              <span>Explore my work</span>
              <ArrowDown size={15} />
            </a>

            <a href="#contact" className="text-link">
              <span>Start a conversation</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className={styles.heroBottom}>
        <a href="#about" className={styles.scrollLink}>
          <span className={styles.scrollAccentBar} />
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown size={13} />
        </a>

        <span className={styles.bottomCenterText}>
          BUILDING &amp; SHIPPING REAL SYSTEMS // 2024 – 2028
        </span>

        <div className={styles.bottomRightGroup}>
          <span className={styles.bottomEdition}>AN ONGOING EXPLORATION ↗</span>
          <button
            type="button"
            className={styles.motionBtn}
            onClick={() => setMotionEnabled(!motionEnabled)}
            aria-label="Toggle motion animations"
          >
            {motionEnabled ? <Pause size={11} /> : <Play size={11} />}
            <span>MOTION {motionEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
