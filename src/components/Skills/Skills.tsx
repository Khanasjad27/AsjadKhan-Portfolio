import React from 'react';
import { SectionHeading } from '@/components/UI/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Code, Layout, Server, Database, Terminal, Cpu, Brain } from 'lucide-react';
import styles from './Skills.module.scss';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Programming Languages': <Code size={18} />,
  'Frontend Development': <Layout size={18} />,
  'Backend & APIs': <Server size={18} />,
  'Databases & Storage': <Database size={18} />,
  'AI, ML & Data Science': <Brain size={18} />,
  'Tools & DevOps': <Terminal size={18} />,
  'Core Computer Science': <Cpu size={18} />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>04 / TECHNICAL SKILLS &amp; TOOLCHAIN</span>
          <span>LANGUAGES. RUNTIMES. DISTRIBUTED ARCHITECTURES.</span>
        </div>

        <SectionHeading
          number="04"
          category="TECHNICAL INVENTORY & INDEX"
          title="Engineered"
          highlight="Toolchain"
          subtitle="A comprehensive inventory of verified languages, runtimes, database layers, and architectural patterns."
        />

        <div className={styles.skillsGrid}>
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIconWrap}>
                  {CATEGORY_ICONS[cat.category] || <Code size={18} />}
                </div>
                <div>
                  <h3 className={styles.categoryTitle}>{cat.category}</h3>
                  <span className={styles.skillCount}>{cat.skills.length} TECHNOLOGIES</span>
                </div>
              </div>

              <div className={styles.skillsPills}>
                {cat.skills.map((skill) => (
                  <div key={skill} className={styles.skillBadge}>
                    <span className={styles.badgeBullet}>›</span>
                    <span className={styles.badgeText}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
