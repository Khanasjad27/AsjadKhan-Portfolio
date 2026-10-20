import React from 'react';
import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  highlight,
  subtitle,
  align = 'left'
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[`align_${align}`]}`}>
      <div className={styles.badge}>
        <span className={styles.monoNumber}>[{number}]</span>
        <span className={styles.monoCategory}>{category}</span>
        <span className={styles.pulseDot} />
      </div>

      <h2 className={styles.title}>
        {title}{' '}
        {highlight && <em className={styles.highlight}>{highlight}</em>}
      </h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
