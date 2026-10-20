import React from 'react';
import { Project } from '@/types';
import { Terminal, Shield, CheckCircle2, Volume2, Home, Activity, FileText, Database, Sparkles, ExternalLink } from 'lucide-react';
import styles from './ProjectPreview.module.scss';

interface ProjectPreviewProps {
  project: Project;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project }) => {
  if (project.previewType === 'audit') {
    return (
      <div className={styles.auditPreview}>
        <div className={styles.previewHeader}>
          <div className={styles.repoBar}>
            <span className={styles.repoHost}>github.com/</span>
            <span className={styles.repoPath}>Khanasjad27/RepoMirror</span>
          </div>
          <span className={styles.statusLive}>AUDIT_COMPLETE</span>
        </div>

        <div className={styles.auditBody}>
          <div className={styles.scoreDial}>
            <div className={styles.scoreCircle}>
              <span className={styles.scoreVal}>94</span>
              <span className={styles.scoreMax}>/100</span>
            </div>
            <div className={styles.scoreMeta}>
              <span className={styles.gradeTag}>GRADE A // RECRUITER_READY</span>
              <span className={styles.evalTag}>AI Code Quality Analysis</span>
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricName}>Architecture</span>
              <div className={styles.metricBar}><div className={styles.metricFill} style={{ width: '96%' }} /></div>
              <span className={styles.metricNum}>96%</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricName}>Edge Security</span>
              <div className={styles.metricBar}><div className={styles.metricFill} style={{ width: '92%' }} /></div>
              <span className={styles.metricNum}>92%</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricName}>Documentation</span>
              <div className={styles.metricBar}><div className={styles.metricFill} style={{ width: '90%' }} /></div>
              <span className={styles.metricNum}>90%</span>
            </div>
          </div>

          <div className={styles.auditRoadmap}>
            <div className={styles.roadmapTitle}>
              <Sparkles size={13} className={styles.sparkleIcon} />
              <span>AI Prioritized Roadmap:</span>
            </div>
            <div className={styles.roadmapItem}>
              <span className={styles.itemTag}>P1</span>
              <span>Supabase Edge Functions isolate OpenAI API tokens</span>
            </div>
            <div className={styles.roadmapItem}>
              <span className={styles.itemTag}>P2</span>
              <span>Recruiter evaluation heuristics verify Git commit velocity</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewType === 'terminal') {
    return (
      <div className={styles.legalPreview}>
        <div className={styles.previewHeader}>
          <div className={styles.legalTitle}>
            <FileText size={14} />
            <span>LegalEase // Legal Assistant</span>
          </div>
          <span className={styles.ttsBadge}>
            <Volume2 size={12} /> TTS: HI / MR / EN
          </span>
        </div>

        <div className={styles.legalContent}>
          <div className={styles.legalDocBlock}>
            <span className={styles.docLabel}>ORIGINAL CLAUSE (LEGALESE):</span>
            <p className={styles.docText}>
              &ldquo;All agreements are contracts if made by free consent of parties competent to contract, for a lawful consideration...&rdquo;
            </p>
          </div>

          <div className={styles.aiArrow}>↓ AI PLAIN-LANGUAGE EXPLANATION</div>

          <div className={styles.simplifiedBlock}>
            <div className={styles.simplifiedHeader}>
              <span className={styles.simplifiedTag}>SIMPLIFIED SUMMARY</span>
              <span className={styles.voiceIndicator}>
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span className={styles.waveBar} />
                <span>Audio Synthesis Ready</span>
              </span>
            </div>
            <p className={styles.simplifiedText}>
              An agreement becomes a legally binding contract when both people agree freely, are of legal age and sound mind, and exchange something of lawful value.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewType === 'listing') {
    return (
      <div className={styles.listingPreview}>
        <div className={styles.previewHeader}>
          <div className={styles.listingTitle}>
            <Home size={14} />
            <span>WanderLust // Architecture</span>
          </div>
          <span className={styles.mvcBadge}>MVC + PASSPORT.JS</span>
        </div>

        <div className={styles.listingCard}>
          <div className={styles.listingImgMock}>
            <div className={styles.listingBadge}>Cloudinary CDN</div>
            <div className={styles.listingOverlay}>
              <span className={styles.priceTag}>₹4,200 / night</span>
              <span className={styles.ratingTag}>★ 4.9 (Verified)</span>
            </div>
          </div>

          <div className={styles.listingDetails}>
            <h5 className={styles.propertyName}>Coastal Villa & Residency</h5>
            <p className={styles.propertyMeta}>Express.js Controller • MongoDB Atlas Cloud • Session Auth</p>
          </div>
        </div>
      </div>
    );
  }

  // IoT Preview
  return (
    <div className={styles.iotPreview}>
      <div className={styles.previewHeader}>
        <div className={styles.iotTitle}>
          <Activity size={14} />
          <span>Smart Energy // Telemetry Engine</span>
        </div>
        <span className={styles.inProgressTag}>IN PROGRESS</span>
      </div>

      <div className={styles.iotBody}>
        <div className={styles.iotTelemetry}>
          <div className={styles.telemetryStat}>
            <span className={styles.statLabel}>LIVE CONSUMPTION</span>
            <span className={styles.statVal}>482.6 <small>kWh</small></span>
          </div>
          <div className={styles.telemetryStat}>
            <span className={styles.statLabel}>TARIFF SLAB</span>
            <span className={styles.statVal}>Tier-2 Commercial</span>
          </div>
        </div>

        <div className={styles.dbStack}>
          <Database size={13} />
          <span>Prisma ORM • PostgreSQL Relational Schema • JWT RBAC</span>
        </div>
      </div>
    </div>
  );
};
