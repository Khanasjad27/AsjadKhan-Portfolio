'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          {/* Wordmark */}
          <a href="#top" className={styles.footerName}>
            <span>Asjad Khan</span>
            <span className={styles.dot}>.</span>
          </a>

          {/* Social Links */}
          <div className={styles.socials}>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span>LeetCode</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span>WhatsApp</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={styles.socialLink}
            >
              <span>Email</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Back to top circular button */}
          <button
            type="button"
            className={styles.backTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Footer Bottom Metadata */}
        <div className={styles.footerBottom}>
          <span>&copy; 2026 ASJAD KHAN</span>
          <span className={styles.motto}>BUILT WITH INTENT. ALWAYS EVOLVING.</span>
          <span>MUMBAI, INDIA ↗ THE WORLD</span>
        </div>
      </div>
    </footer>
  );
};
