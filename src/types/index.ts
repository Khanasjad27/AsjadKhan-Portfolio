export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  problem: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  achievement?: string;
  status?: 'deployed' | 'in-progress' | 'prototype';
  featured: boolean;
  accentColor: string;
  previewType: 'terminal' | 'audit' | 'listing' | 'iot';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  category: 'internship' | 'ambassador' | 'leadership' | 'community';
  current?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organization: string;
  period: string;
  rank?: string;
  description: string;
  tag: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  role: string;
  year: string;
  track: string;
  paperId: string;
  description: string;
  statusNote: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: string;
  description: string;
}
