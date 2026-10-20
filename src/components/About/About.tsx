'use client';

import React, { useState } from 'react';
import { Terminal, FileText, CheckCircle2, Cpu, Code2, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { TiltCard } from '@/components/UI/TiltCard';
import styles from './About.module.scss';

export const About: React.FC = () => {
  const [copiedSpec, setCopiedSpec] = useState(false);

  const copySpec = () => {
    const spec = JSON.stringify(
      {
        developer: PERSONAL_INFO.name,
        role: 'SDE Intern @ UnsaidTalks',
        ambassador: 'Google Student Ambassador 2026',
        specialization: 'Full-Stack Web & Practical AI Engineering',
        location: PERSONAL_INFO.location,
        education: 'B.E. Computer Science (AI & ML), University of Mumbai (Batch 2024 – 2028)',
        activeStack: ['Next.js 15', 'TypeScript', 'React', 'Python', 'Supabase', 'PostgreSQL', 'Docker']
      },
      null,
      2
    );
    navigator.clipboard.writeText(spec);
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 2500);
  };

  return (
    <section id="about" className={`chapter solid-section ${styles.aboutSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-label">
          <span>01 / PERSONA &amp; ARCHITECTURE</span>
          <span>A CONNECTED PERSPECTIVE</span>
        </div>

        <div className={styles.aboutGrid}>
          {/* Left Column: Story & Philosophy */}
          <div className={styles.storyCol}>
            <h2 className={styles.heading}>
              Technology is the starting point.<br />
              <em>People are the point.</em>
            </h2>

            <p className={styles.lead}>
              Full-Stack Developer, AI/ML practitioner, and Google Student Ambassador 2026 based in Mumbai.
            </p>

            <div className={styles.narrative}>
              <p>
                I’m a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at{' '}
                <strong className={styles.highlight}>M. H. Saboo Siddik College of Engineering, University of Mumbai</strong>.
                I enjoy engineering reliable software, designing clean interfaces, and building practical AI pipelines that solve tangible problems.
              </p>
              <p>
                Currently, I work as a <strong className={styles.highlight}>Software Developer Intern at UnsaidTalks</strong>,
                architecting interview preparation and assessment systems. Through personal projects, hackathons, and technical communities,
                I continuously refine my craft across modern React, Next.js, backend architecture, and AI model integration.
              </p>
            </div>

            {/* Core Values / Fast Metrics */}
            <div className={styles.metricsRow}>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>2x</span>
                <span className={styles.metricLabel}>Hackathon Winner (GitGrade &amp; GFG)</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>2026</span>
                <span className={styles.metricLabel}>Google Student Ambassador</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>2</span>
                <span className={styles.metricLabel}>IEEE Research Paper Submissions</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="/Asjad_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-link"
              >
                <FileText size={16} />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Spec */}
          <div className={styles.terminalCol}>
            <TiltCard maxTilt={10} perspective={1000} className={styles.terminalCard}>
              <div className={styles.terminalBar}>
                <div className={styles.terminalDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.terminalTitle}>
                  <Terminal size={13} />
                  <span>asjad@engine: ~/developer_spec.json</span>
                </div>
                <button
                  type="button"
                  onClick={copySpec}
                  className={styles.copyBtn}
                  aria-label="Copy developer spec JSON"
                >
                  {copiedSpec ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <pre className={styles.terminalCode}>
                <code>
{`{
  "developer": "${PERSONAL_INFO.name}",
  "contact": {
    "phone": "${PERSONAL_INFO.phone}",
    "email": "${PERSONAL_INFO.email}"
  },
  "current_role": "SDE Intern @ UnsaidTalks",
  "community": "Google Student Ambassador 2026",
  "location": "Mumbai, Maharashtra, India",
  "academics": {
    "degree": "B.E. Computer Science (AI & ML)",
    "institution": "MHSSCE, University of Mumbai",
    "batch": "2024 - 2028"
  },
  "focus_areas": [
    "Autonomous Codebase Analysis & Auditing",
    "Next.js Full-Stack Web Architecture",
    "Multilingual AI & Accessibility Systems",
    "Edge AI Inference Optimization"
  ],
  "status": "Available for High-Impact SDE Roles"
}`}
                </code>
              </pre>

              <div className={styles.terminalFooter}>
                <div className={styles.footItem}>
                  <MapPin size={13} className={styles.footIcon} />
                  <span>{PERSONAL_INFO.coordinates}</span>
                </div>
                <div className={styles.statusLive}>
                  <span className={styles.statusDot} />
                  <span>ACTIVE_NODE</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
