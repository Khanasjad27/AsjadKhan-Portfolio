'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/UI/SectionHeading';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { Trophy, Award, BookOpen, CheckCircle2, Star, FileText, ShieldCheck } from 'lucide-react';
import styles from './Achievements.module.scss';

type FilterCategory = 'all' | 'hackathon' | 'research' | 'ambassador' | 'certification';

export const Achievements: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const getCategory = (tag: string): FilterCategory => {
    if (tag.includes('Hackathon')) return 'hackathon';
    if (tag.includes('Research')) return 'research';
    if (tag.includes('Ambassador') || tag.includes('National Distinction')) return 'ambassador';
    if (tag.includes('Certification')) return 'certification';
    return 'all';
  };

  const filteredItems = ACHIEVEMENTS.filter((item) => {
    if (activeFilter === 'all') return true;
    return getCategory(item.tag) === activeFilter;
  });

  const getCategoryIcon = (tag: string) => {
    const cat = getCategory(tag);
    switch (cat) {
      case 'hackathon':
        return <Trophy size={18} className={styles.trophyIcon} />;
      case 'research':
        return <BookOpen size={18} className={styles.researchIcon} />;
      case 'ambassador':
        return <Award size={18} className={styles.awardIcon} />;
      case 'certification':
        return <ShieldCheck size={18} className={styles.certIcon} />;
      default:
        return <Star size={18} className={styles.awardIcon} />;
    }
  };

  const getBanner = (item: typeof ACHIEVEMENTS[0]) => {
    const cat = getCategory(item.tag);
    if (cat === 'hackathon' && item.rank) {
      return (
        <div className={styles.rankBanner}>
          <Star size={12} />
          <span>{item.rank}</span>
        </div>
      );
    }
    if (cat === 'research' && item.rank) {
      return (
        <div className={styles.researchBanner}>
          <FileText size={12} />
          <span>{item.rank}</span>
        </div>
      );
    }
    if (cat === 'ambassador' && item.rank) {
      return (
        <div className={styles.ambassadorBanner}>
          <Star size={12} />
          <span>{item.rank}</span>
        </div>
      );
    }
    if (cat === 'certification' && item.rank) {
      return (
        <div className={styles.certBanner}>
          <CheckCircle2 size={12} />
          <span>{item.rank}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>05 / ACHIEVEMENTS &amp; COMPETITIVE HONORS</span>
          <span>HACKATHONS. RESEARCH PAPERS. GSA. CERTIFICATIONS.</span>
        </div>

        <SectionHeading
          number="05"
          category="HONORS, RESEARCH &amp; COMPETITIVE RECOGNITION"
          title="Achievements &"
          highlight="Distinctions"
          subtitle="2x Hackathon Awardee, co-authored research papers, Google Student Ambassador honors, and professional accreditations."
        />

        {/* Category Filter Tabs */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter achievements by category">
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.activeFilterBtn : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Achievements <span className={styles.filterCount}>({ACHIEVEMENTS.length})</span>
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === 'hackathon' ? styles.activeFilterBtn : ''}`}
            onClick={() => setActiveFilter('hackathon')}
          >
            Hackathons <span className={styles.filterCount}>(2x Winner)</span>
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === 'research' ? styles.activeFilterBtn : ''}`}
            onClick={() => setActiveFilter('research')}
          >
            Research Papers <span className={styles.filterCount}>(2)</span>
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === 'ambassador' ? styles.activeFilterBtn : ''}`}
            onClick={() => setActiveFilter('ambassador')}
          >
            Ambassadorships <span className={styles.filterCount}>(2)</span>
          </button>
          <button
            type="button"
            className={`${styles.filterBtn} ${activeFilter === 'certification' ? styles.activeFilterBtn : ''}`}
            onClick={() => setActiveFilter('certification')}
          >
            Certifications <span className={styles.filterCount}>(2)</span>
          </button>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className={styles.achievementsGrid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.achievementCard}>
              <div>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    {getCategoryIcon(item.tag)}
                  </div>

                  <div className={styles.metaBadgeGroup}>
                    <span className={styles.tagBadge}>{item.tag}</span>
                    <span className={styles.periodBadge}>{item.period}</span>
                  </div>
                </div>

                {getBanner(item)}

                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemOrg}>{item.organization} // {item.event}</p>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.verifiedTag}>
                  <CheckCircle2 size={12} /> VERIFIED ACCREDITATION
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
