'use client';

import React from 'react';
import { Calendar, MapPin, CheckCircle2, Briefcase, Award, Globe, Users } from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';
import styles from './Experience.module.scss';

export const Experience: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'internship':
        return <Briefcase size={13} />;
      case 'ambassador':
        return <Award size={13} />;
      case 'leadership':
        return <Globe size={13} />;
      default:
        return <Users size={13} />;
    }
  };

  return (
    <section id="experience" className={`chapter solid-section ${styles.experienceSection}`}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>03 / EXPERIENCE &amp; CAREER TIMELINE</span>
          <span>CHRONOLOGICAL JOURNEY // COMPACT &amp; CONNECTED</span>
        </div>

        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            Roles shaped by practice.<br />
            <em>Guided by curiosity.</em>
          </h2>
          <p className={styles.subtext}>
            Software engineering internships, community ambassadorships, and technical leadership roles.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineSpine} aria-hidden="true" />

          <div className={styles.timelineList}>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className={styles.timelineItem}>
                {/* Luminous Node on the Timeline Spine */}
                <div
                  className={`${styles.timelineNode} ${exp.current ? styles.currentNode : ''}`}
                  aria-hidden="true"
                >
                  <span className={styles.nodeIcon}>
                    {getCategoryIcon(exp.category)}
                  </span>
                </div>

                {/* Compact Experience Card */}
                <article className={styles.compactCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.roleGroup}>
                      <div className={styles.titleRow}>
                        <h3 className={styles.roleTitle}>{exp.role}</h3>
                        {exp.current && (
                          <span className={styles.currentBadge}>ACTIVE</span>
                        )}
                        <span className={styles.categoryPill}>
                          {exp.category.toUpperCase()}
                        </span>
                      </div>
                      <p className={styles.orgRow}>
                        <strong>{exp.organization}</strong>
                        <span className={styles.metaDivider}>•</span>
                        <span className={styles.metaSpan}>
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                        <span className={styles.metaDivider}>•</span>
                        <span className={styles.metaSpan}>
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className={styles.compactDesc}>{exp.description}</p>

                  {/* Bullet Highlights */}
                  <ul className={styles.compactBullets}>
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 size={13} className={styles.checkIcon} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
