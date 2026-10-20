'use client';

import React from 'react';
import { ArrowUpRight, BookOpen, Cpu, Users } from 'lucide-react';
import styles from './Research.module.scss';

export const Research: React.FC = () => {
  return (
    <section id="research" className={`chapter solid-section ${styles.impactSection}`}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>06 / ACADEMIC RESEARCH &amp; PAPERS</span>
          <span>IEEE PAPER SUBMISSIONS // EDGE OPTIMIZATION &amp; LLM ANALYSIS</span>
        </div>

        {/* Impact Title */}
        <div className={styles.impactTitle}>
          <h2 className={styles.heading}>
            Reach is a number.<br />
            <em>Impact is personal.</em>
          </h2>
          <p className={styles.subtext}>
            Every system, model, and program is an opportunity to move someone forward.
          </p>
        </div>

        {/* Lead Impact Metric */}
        <div className={styles.impactLead}>
          <div className={styles.impactValue}>
            <span className={styles.valueNum}>2026</span>
            <em className={styles.valueSuffix}>GSA</em>
          </div>
          <div className={styles.impactContext}>
            <h3 className={styles.contextTitle}>
              Google Student Ambassador.<br />
              Possibilities opened.
            </h3>
            <p className={styles.contextDesc}>
              Selected to represent Google on campus, bridging student developers with industry
              tools, AI workshops, and hackathons across Mumbai.
            </p>
            <a href="https://linkedin.com/in/asjad-khan-67759b244" target="_blank" rel="noopener noreferrer" className="text-link">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Impact Pair Grid */}
        <div className={styles.impactPair}>
          <div className={styles.pairCard}>
            <strong className={styles.pairMetric}>
              3rd<em>#</em>
            </strong>
            <h3 className={styles.pairTitle}>GitGrade Hackathon</h3>
            <p className={styles.pairDesc}>
              Awarded 3rd Rank among hundreds of builders for RepoMirror, an autonomous AI codebase architecture auditor.
            </p>
          </div>

          <div className={styles.pairCard}>
            <strong className={styles.pairMetric}>
              1,000<em>+</em>
            </strong>
            <h3 className={styles.pairTitle}>Contributions &amp; Commits</h3>
            <p className={styles.pairDesc}>
              Continuous shipping across full-stack repositories, open-source libraries, and production internship systems.
            </p>
          </div>

          <div className={styles.principleCard}>
            <span className="eyebrow">THE COMMON THREAD</span>
            <p className={styles.principleQuote}>
              Build something useful.<br />
              Help people understand it.<br />
              <em>Give it room to grow.</em>
            </p>
          </div>
        </div>

        {/* Academic Research Papers */}
        <div className={styles.researchStory} id="research">
          <div className={styles.storyHeading}>
            <span className="eyebrow">ACADEMIC RESEARCH / PEER-REVIEWED SUBMISSIONS</span>
            <h3 className={styles.storyTitle}>
              Pushing compute edges.<br />
              <em>Exploring deep models.</em>
            </h3>
            <p className={styles.storyDesc}>
              Formal research investigations conducted under University of Mumbai faculty supervision,
              investigating machine learning optimization on resource-constrained hardware.
            </p>
          </div>

          <div className={styles.paperList}>
            <div className={styles.paperItem}>
              <div className={styles.paperHeader}>
                <span className={styles.paperId}>PAPER #113</span>
                <span className={styles.paperStatus}>IEEE SUBMISSION</span>
              </div>
              <h4 className={styles.paperTitle}>
                Edge Computing Optimization for Real-Time Neural Inference
              </h4>
              <p className={styles.paperAbstract}>
                Investigates dynamic quantization and speculative decoding to reduce latency in edge-deployed vision and speech models without compromising semantic fidelity.
              </p>
            </div>

            <div className={styles.paperItem}>
              <div className={styles.paperHeader}>
                <span className={styles.paperId}>PAPER #123</span>
                <span className={styles.paperStatus}>IEEE SUBMISSION</span>
              </div>
              <h4 className={styles.paperTitle}>
                Comparative Benchmarks of Transformer Architectures on Mobile Silicon
              </h4>
              <p className={styles.paperAbstract}>
                Analyzes power draw, cache thrashing, and memory bandwidth bottlenecks when deploying compact transformer architectures on heterogeneous ARM compute clusters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
