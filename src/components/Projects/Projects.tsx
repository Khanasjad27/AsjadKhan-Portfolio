'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROJECTS as PORTFOLIO_PROJECTS } from '@/data/portfolioData';
import { ProjectPreview } from './ProjectPreview';
import styles from './Projects.module.scss';

export const Projects: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Sync active slide index on scroll
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const slideWidth = track.clientWidth;
    if (slideWidth > 0) {
      const newIdx = Math.round(scrollLeft / (slideWidth * 0.9));
      setActiveIdx(Math.max(0, Math.min(PORTFOLIO_PROJECTS.length - 1, newIdx)));
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Scroll to a specific project index
  const scrollToSlide = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(`.${styles.workPiece}`);
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
      setActiveIdx(idx);
    }
  };

  const slidePrev = () => {
    const prev = Math.max(0, activeIdx - 1);
    scrollToSlide(prev);
  };

  const slideNext = () => {
    const next = Math.min(PORTFOLIO_PROJECTS.length - 1, activeIdx + 1);
    scrollToSlide(next);
  };

  return (
    <section id="work" className={`chapter solid-section ${styles.projectsSection}`}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>02 / SELECTED WORK</span>
          <span>ALL PRODUCTION SYSTEMS IN ONE LINE // SLIDE TO EXPLORE</span>
        </div>

        {/* Section Heading & Slide Controls Row */}
        <div className={styles.selectedHeadingRow}>
          <div className={styles.headingText}>
            <h2 className={styles.heading}>
              Ideas are a start.<br />
              <em>This is the work.</em>
            </h2>
            <p className={styles.subtext}>
              From full-stack web applications to AI-powered developer tools.<br />
              Explore production architectures in the interactive slider below.
            </p>
          </div>

          {/* Slider Arrow Controls & Slide Counter */}
          <div className={styles.sliderControls}>
            <div className={styles.slideCounter}>
              <span className={styles.counterCurrent}>0{activeIdx + 1}</span>
              <span className={styles.counterDivider}>/</span>
              <span className={styles.counterTotal}>0{PORTFOLIO_PROJECTS.length}</span>
            </div>

            <div className={styles.arrowGroup}>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={slidePrev}
                disabled={activeIdx === 0}
                aria-label="Previous project slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={slideNext}
                disabled={activeIdx === PORTFOLIO_PROJECTS.length - 1}
                aria-label="Next project slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Project Tab Selector Bar */}
        <div className={styles.projectTabs} role="tablist" aria-label="Select a project">
          {PORTFOLIO_PROJECTS.map((p, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`${styles.projectTab} ${isActive ? styles.activeTab : ''}`}
                onClick={() => scrollToSlide(idx)}
              >
                <span className={styles.tabNum}>0{idx + 1}</span>
                <span className={styles.tabTitle}>{p.title}</span>
                {p.achievement && (
                  <span className={styles.tabBadge}>GitGrade 3rd</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Horizontal Project Slider Track (All in One Line) */}
        <div ref={trackRef} className={styles.sliderTrack} tabIndex={0} aria-label="Project slider">
          {PORTFOLIO_PROJECTS.map((p, idx) => (
            <article
              key={p.id}
              className={`${styles.workPiece} ${activeIdx === idx ? styles.activeWorkPiece : ''}`}
            >
              <div className={styles.cardLayout}>
                {/* Left/Main Column: macOS Browser Bar Artwork Stage */}
                <div className={styles.workArtwork}>
                  <div className={styles.browserBar}>
                    <div className={styles.dots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className={styles.browserUrl}>
                      {p.id === 'repo-mirror'
                        ? 'repomirror.dev'
                        : p.id === 'legalease'
                        ? 'legalease.app'
                        : p.id === 'wanderlust'
                        ? 'wanderlust.render.com'
                        : 'smartenergy.iot'}
                    </span>
                    <a
                      href={p.liveUrl || p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.browserArrow}
                      aria-label={`Open ${p.title} in new tab`}
                    >
                      ↗
                    </a>
                  </div>

                  {/* Interactive Visual/Preview Body */}
                  <div className={styles.artworkInner}>
                    {p.previewType ? (
                      <ProjectPreview project={p} />
                    ) : (
                      <div className={styles.defaultVisual}>
                        <div className={styles.badgeRow}>
                          {p.achievement && (
                            <span className={styles.highlightBadge}>{p.achievement}</span>
                          )}
                        </div>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                        <p className={styles.cardTagline}>{p.tagline}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Narrative, Problem, Highlights & Tech Stack */}
                <div className={styles.workDetails}>
                  <div className={styles.detailHeader}>
                    <div className={styles.categoryRow}>
                      <span className="eyebrow">{p.category}</span>
                      {p.achievement && (
                        <span className={styles.awardPill}>
                          <Sparkles size={11} />
                          <span>{p.achievement}</span>
                        </span>
                      )}
                    </div>

                    <h3 className={styles.detailTitle}>
                      <a href={p.liveUrl || p.githubUrl} target="_blank" rel="noopener noreferrer">
                        {p.title}
                      </a>
                    </h3>
                    <p className={styles.taglineText}>{p.tagline}</p>
                  </div>

                  <p className={styles.detailDesc}>{p.description}</p>

                  {/* Engineering Problem & Resolution Highlights */}
                  {p.problem && (
                    <div className={styles.problemBox}>
                      <span className={styles.problemLabel}>THE CHALLENGE:</span>
                      <p className={styles.problemText}>{p.problem}</p>
                    </div>
                  )}

                  {p.highlights && (
                    <ul className={styles.highlightsList}>
                      {p.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx}>
                          <CheckCircle2 size={13} className={styles.checkIcon} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Pills */}
                  <div className={styles.techStackRow}>
                    {p.technologies.map((t, tIdx) => (
                      <span key={tIdx} className={styles.stackTag}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Direct Action Links: Guaranteed Live Demo and Source Code for every project */}
                  <div className={styles.actionRow}>
                    <a
                      href={p.liveUrl || `https://github.com/Khanasjad27/${p.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-link"
                      aria-label={`View live demo of ${p.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={p.githubUrl || `https://github.com/Khanasjad27/${p.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      aria-label={`View source code of ${p.title}`}
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Slide Instructions Indicator */}
        <div className={styles.sliderFooter}>
          <span className={styles.swipeHint}>
            ← Drag or swipe horizontally to view all projects →
          </span>
          <div className={styles.dotsIndicator}>
            {PORTFOLIO_PROJECTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToSlide(dotIdx)}
                className={`${styles.dot} ${activeIdx === dotIdx ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
