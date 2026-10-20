import React from 'react';
import { SectionHeading } from '@/components/UI/SectionHeading';
import { EDUCATION, CERTIFICATIONS } from '@/data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import styles from './Education.module.scss';

export const Education: React.FC = () => {
  return (
    <section id="education" className={styles.eduSection}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>06 / ACADEMIC FOUNDATION &amp; ACCREDITATIONS</span>
          <span>DEGREE HONORS // INDUSTRY CLOUD SIMULATIONS</span>
        </div>

        <SectionHeading
          number="06"
          category="ACADEMIC FOUNDATION & ACCREDITATIONS"
          title="Education &"
          highlight="Accreditations"
          subtitle="Formal engineering degree program at Mumbai University combined with verified industry simulations."
        />

        <div className={styles.eduGrid}>
          {/* Education Box */}
          <div className={styles.degreeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                <GraduationCap size={22} className={styles.gradIcon} />
              </div>
              <div>
                <div className={styles.degreeTopRow}>
                  <span className={styles.undergradTag}>UNDERGRADUATE DEGREE</span>
                  <span className={styles.batchTag}>BATCH 2024 – 2028</span>
                </div>
                <h3 className={styles.degreeTitle}>{EDUCATION.degree}</h3>
              </div>
            </div>

            <div className={styles.specializationBox}>
              <span className={styles.specLabel}>SPECIALIZATION</span>
              <p className={styles.specText}>{EDUCATION.specialization}</p>
            </div>

            <div className={styles.instDetails}>
              <h4 className={styles.instName}>{EDUCATION.institution}</h4>
              <p className={styles.uniName}>{EDUCATION.university}</p>

              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <MapPin size={13} /> {EDUCATION.location}
                </span>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaItem}>
                  <Calendar size={13} /> {EDUCATION.period}
                </span>
              </div>
            </div>

            <div className={styles.statusFooter}>
              <span className={styles.statusBullet}>●</span>
              <span>Currently enrolled in 4-year degree track // Batch 2024 – 2028</span>
            </div>
          </div>

          {/* Certifications Box */}
          <div className={styles.certsCol}>
            <h4 className={styles.certsColTitle}>
              <ShieldCheck size={18} className={styles.shieldIcon} />
              <span>Verified Accreditations & Simulations</span>
            </h4>

            <div className={styles.certsList}>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className={styles.certCard}>
                  <div className={styles.certHeader}>
                    <div className={styles.certIcon}>
                      <Award size={18} />
                    </div>
                    <div>
                      <h5 className={styles.certTitle}>{cert.title}</h5>
                      <span className={styles.certType}>{cert.type}</span>
                    </div>
                  </div>

                  <p className={styles.certDesc}>{cert.description}</p>

                  <div className={styles.certFooter}>
                    <CheckCircle size={12} className={styles.checkIcon} />
                    <span>Verified Simulation / Coursework</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
