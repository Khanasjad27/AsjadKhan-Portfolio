'use client';

import React, { useState } from 'react';
import { ArrowUpRight, FileText, Download, Copy, Check, MessageCircle, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import styles from './Contact.module.scss';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className={`chapter solid-section ${styles.contactSection}`}>
      <div className="container">
        {/* Section Label */}
        <div className="section-label">
          <span>07 / GET IN TOUCH &amp; THE NEXT CHAPTER</span>
          <span>OPEN FOR SDE &amp; AI/ML ROLES // MUMBAI &amp; REMOTE</span>
        </div>

        <div className={styles.contactInner}>
          <span className={styles.availability}>
            <span className={styles.liveDot} />
            <span>OPEN TO HIGH-IMPACT ROLES &amp; CONVERSATIONS</span>
          </span>

          <h2 className={styles.heading}>
            Something great<br />
            starts with <em>a hello.</em>
          </h2>

          <div className={styles.buttonGroup}>
            {/* Direct WhatsApp CTA with Custom Message */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
              aria-label="Send a direct WhatsApp message to Asjad Khan with custom message"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Primary LinkedIn Contact CTA */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCta}
              aria-label="Connect on LinkedIn"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={17} />
            </a>

            {/* Direct ATS-Ready Resume PDF Download */}
            <a
              href="/Asjad_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeCta}
              aria-label="Download verified PDF resume"
            >
              <FileText size={17} />
              <span>Verified Resume PDF</span>
              <Download size={15} />
            </a>
          </div>

          <p className={styles.subtext}>
            Full-stack engineering, practical AI systems, or ambitious initiatives.<br />
            Feel free to call, text directly on WhatsApp, or send an email.
          </p>

          <div className={styles.directChannels}>
            {/* Direct Phone / WhatsApp Channel */}
            <div className={styles.channelRow}>
              <div className={styles.channelInfo}>
                <Phone size={14} className={styles.channelIcon} />
                <span className={styles.channelLabel}>Phone / WhatsApp:</span>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelLink}
                  title="Click to chat on WhatsApp with pre-filled message"
                >
                  <span>{PERSONAL_INFO.phone}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <button
                type="button"
                className={styles.copyBtn}
                onClick={copyPhone}
                aria-label="Copy phone number to clipboard"
              >
                {copiedPhone ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedPhone ? 'Copied!' : 'Copy Phone'}</span>
              </button>
            </div>

            {/* Direct Email Channel */}
            <div className={styles.channelRow}>
              <div className={styles.channelInfo}>
                <Mail size={14} className={styles.channelIcon} />
                <span className={styles.channelLabel}>Direct Email:</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className={styles.channelLink}
                  title="Click to send email"
                >
                  <span>{PERSONAL_INFO.email}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <button
                type="button"
                className={styles.copyBtn}
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
              >
                {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
