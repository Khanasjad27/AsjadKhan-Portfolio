'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.navPill} aria-label="Main Navigation">
        {/* Wordmark in Instrument Serif */}
        <a href="#top" className={styles.wordmark} aria-label="Asjad Khan Home">
          <span>Asjad Khan</span>
        </a>

        {/* Center Destinations */}
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#work" className={styles.navLink}>Work</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#achievements" className={styles.navLink}>Achievements</a>
          <a href="#education" className={styles.navLink}>Education</a>
        </div>

        {/* Action Buttons */}
        <div className={styles.navActions}>
          <a
            href="/Asjad_Khan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            aria-label="View Asjad Khan verified PDF resume"
          >
            <FileText size={13} />
            <span>Resume PDF</span>
          </a>

          <a href="#contact" className={styles.talkBtn}>
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <a
            href="#about"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            About ↗
          </a>
          <a
            href="#work"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Work ↗
          </a>
          <a
            href="#experience"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Experience ↗
          </a>
          <a
            href="#skills"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills ↗
          </a>
          <a
            href="#achievements"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Achievements ↗
          </a>
          <a
            href="#education"
            className={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Education ↗
          </a>
          <a
            href="/Asjad_Khan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileResumeBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText size={15} />
            <span>Download Resume PDF</span>
          </a>
          <a
            href="#contact"
            className={styles.mobileTalkBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s talk ↗
          </a>
        </div>
      )}
    </header>
  );
};
