import { Project, ExperienceItem, Achievement, SkillCategory, ResearchPaper, Certification } from '@/types';

export const PERSONAL_INFO = {
  name: 'Asjad Khan',
  location: 'Mumbai, Maharashtra, India',
  email: 'khanasjadshamshadahmed@gmail.com',
  phone: '+91 8108184070',
  phoneRaw: '8108184070',
  whatsappUrl: 'https://wa.me/918108184070?text=Hi%20Asjad%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you!',
  whatsapp: 'https://wa.me/918108184070?text=Hi%20Asjad%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you!',
  github: 'https://github.com/Khanasjad27',
  linkedin: 'https://www.linkedin.com/in/asjad-khan-ak27102005/',
  leetcode: 'https://leetcode.com/u/Asjad_Khan/',
  brandStatement: 'I build useful software, explore practical AI, and turn ideas into working products.',
  heroHeadline: 'Building the web. Exploring AI. Shipping real ideas.',
  heroAltHeadline: 'Curious by nature. Developer by craft.',
  heroSupporting: 'I’m Asjad, a Computer Science Engineering student building full-stack applications, developer tools, and AI-powered experiences.',
  aboutBio: [
    'I’m Asjad Khan, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at M. H. Saboo Siddik College of Engineering, University of Mumbai.',
    'I enjoy building practical software, exploring how AI can improve real-world experiences, and turning ideas into working products. Through internships, personal projects, hackathons, and technical communities, I continue to develop my skills across frontend engineering, backend systems, databases, and AI integration.',
    'My focus is on writing useful software, learning by building, and continuously improving the products I create.'
  ],
  status: 'Open for SDE & AI/ML Internships',
  coordinates: '18.9667° N, 72.8286° E // MUMBAI_IN',
};

export const PROJECTS: Project[] = [
  {
    id: 'repo-mirror',
    title: 'RepoMirror',
    tagline: 'AI-Powered GitHub Repository Evaluator',
    category: 'AI Tooling / Developer Experience',
    description: 'An AI-powered GitHub repository evaluator that analyzes a repository and produces a scored report with a prioritized improvement roadmap.',
    problem: 'Developers struggle to evaluate their repositories objectively against recruiter expectations and production engineering benchmarks before presenting work.',
    highlights: [
      'Recruiter-level review engine delivering a comprehensive 0–100 quality score',
      'OpenAI API integration for automated code architecture & documentation inspection',
      'Supabase Edge Functions for secure API key isolation and fast inference caching',
      'Ranked 3rd at GitGrade Hackathon for architectural depth and actionable UX'
    ],
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/Khanasjad27/RepoMirror',
    liveUrl: 'https://repo-mirror-asjad-khan.vercel.app/',
    achievement: '3rd Rank, GitGrade Hackathon',
    status: 'deployed',
    featured: true,
    accentColor: '#10b981',
    previewType: 'audit'
  },
  {
    id: 'legalease',
    title: 'LegalEase',
    tagline: 'AI-Assisted Multilingual Legal Information Assistant',
    category: 'Applied AI & Accessibility',
    description: 'An AI-assisted multilingual legal information experience designed to make legal information more accessible, with Hindi and Marathi text-to-speech support.',
    problem: 'Complex Indian legal statutory phrasing creates severe accessibility barriers for citizens seeking to understand fundamental legal rights and documents.',
    highlights: [
      'Converts dense legal articles into concise, plain-language operational summaries',
      'Multilingual Text-to-Speech synthesis in Hindi and Marathi via the Web Speech API',
      'Supabase-backed authentication, query indexing, and user document storage',
      'High-contrast accessible reader interface tuned for quick comprehension'
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'Web Speech API', 'Vercel'],
    githubUrl: 'https://github.com/Khanasjad27/LegalEase',
    liveUrl: 'https://legalease-ai.vercel.app/',
    status: 'deployed',
    featured: true,
    accentColor: '#3b82f6',
    previewType: 'terminal'
  },
  {
    id: 'wanderlust',
    title: 'WanderLust',
    tagline: 'Full-Stack Travel & Stay Listing Platform',
    category: 'Full-Stack Web Application',
    description: 'A travel and accommodation platform built around listing-oriented functionality using MVC architecture with session-based authentication.',
    problem: 'Renters and hosts require reliable property listings, transparent review workflows, and intuitive image handling without overhead.',
    highlights: [
      'Engineered clean MVC architecture with Express.js routes, controllers, and data models',
      'Configured robust session-based authentication and authorization with Passport.js',
      'Integrated Cloudinary API for optimized responsive multi-image uploads',
      'Deployed on Render with MongoDB Atlas cluster database synchronization'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Passport.js', 'Cloudinary', 'Render'],
    githubUrl: 'https://github.com/Khanasjad27/WanderLust',
    liveUrl: 'https://wanderlust-3q0y.onrender.com/listing',
    status: 'deployed',
    featured: true,
    accentColor: '#f59e0b',
    previewType: 'listing'
  },
  {
    id: 'smart-energy',
    title: 'Smart Energy Monitoring & Billing',
    tagline: 'IoT-Enabled Consumption & Automated Billing Platform',
    category: 'IoT Backend & Distributed Systems',
    description: 'Designing a backend system for IoT-based electricity billing across residential societies with JWT auth, role-based access control, and automated consumption-based billing logic.',
    problem: 'Residential apartment complexes face high rates of reconciliation errors and disputes due to manual meter audits and non-transparent tariff structures.',
    highlights: [
      'Building automated time-series consumption calculation pipelines for IoT power meters',
      'Strict Role-Based Access Control (Admin, Society Manager, Resident) using signed JWTs',
      'Prisma ORM data layer managing relational schemas on PostgreSQL',
      'Automated invoice generation triggers based on slab-rated tariff models'
    ],
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT'],
    githubUrl: 'https://github.com/Khanasjad27/Smart-Energy-IoT',
    liveUrl: 'https://smart-energy-iot.vercel.app/',
    status: 'deployed',
    featured: true,
    accentColor: '#8b5cf6',
    previewType: 'iot'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'unsaidtalks',
    role: 'Software Developer Intern',
    organization: 'UnsaidTalks Education Pvt. Ltd.',
    location: 'Mumbai, India (Remote)',
    period: 'Jun 2026 – Present',
    description: 'Contributing to full-stack product development, including authentication, dashboards, notifications, user management, and AI-powered resume builder and reviewer tools.',
    bullets: [
      'Develop full-stack features (authentication, dashboards, notifications, user management) for production web applications.',
      'Contribute to AI-powered platforms including an automated Resume Builder and Resume Reviewer tool.',
      'Collaborate with mentors using Git-based version control and Agile workflows; follow software development best practices.'
    ],
    category: 'internship',
    current: true
  },
  {
    id: 'gsa-2026',
    role: 'Google Student Ambassador 2026',
    organization: 'Google',
    location: 'Mumbai, India',
    period: 'May 2026 – Present',
    description: 'Supporting campus engagement and promoting Google AI tools and student-facing AI experiences.',
    bullets: [
      'Selected to represent Google’s AI and developer initiatives within the campus community.',
      'Organize technical workshops on Gemini, Google AI Studio, and developer tooling for engineering students.',
      'Spearhead peer learning cohorts focused on practical AI application building.'
    ],
    category: 'ambassador',
    current: true
  },
  {
    id: 'ieee-webmaster',
    role: 'Joint Webmaster',
    organization: 'IEEE MHSSCE Student Branch',
    location: 'Mumbai, India',
    period: 'July 2026 – Present',
    description: 'Contributing to web-related and technical activities within the IEEE student branch.',
    bullets: [
      'Oversee web infrastructure, event landing portals, and technical resources for chapter activities.',
      'Maintain deployment pipelines and digital assets for collegiate symposiums.'
    ],
    category: 'leadership',
    current: true
  },
  {
    id: 'ieee-media',
    role: 'Social Media Member',
    organization: 'IEEE MHSSCE Student Branch',
    location: 'Mumbai, India',
    period: 'July 2025 – Present',
    description: 'Supporting student-branch communication and social media activities.',
    bullets: [
      'Design technical announcements, workshop highlights, and speaker spotlights.',
      'Drive student participation across flagship technical workshops.'
    ],
    category: 'community',
    current: true
  },
  {
    id: 'edc-iit-delhi',
    role: 'Campus Ambassador – BECon 2026',
    organization: 'eDC, IIT Delhi',
    location: 'Remote',
    period: 'Dec 2025 – Feb 2026',
    description: 'Contributing to campus outreach and student engagement for BECon 2026.',
    bullets: [
      'Led digital outreach for IIT Delhi’s flagship entrepreneurship conclave.',
      'Ranked among top-performing Campus Ambassadors nationwide based on verified outreach volume and delegate engagement.'
    ],
    category: 'ambassador',
    current: false
  },
  {
    id: 'acm-media',
    role: 'Social Media Member',
    organization: 'ACM MHSSCE Student Chapter',
    location: 'Mumbai, India',
    period: 'August 2025 – July 2026',
    description: 'Supporting student-branch communication and chapter activities.',
    bullets: [
      'Assisted chapter communication, technical talk announcements, and hackathon promotions.'
    ],
    category: 'community',
    current: false
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'gitgrade',
    title: '3rd Rank — GitGrade Hackathon',
    event: 'National Hackathon',
    organization: 'GitGrade',
    period: 'Dec 2025',
    rank: '3rd Place',
    tag: 'Hackathon Award',
    description: 'Awarded 3rd rank for RepoMirror (AI-powered GitHub repository evaluator) for automated recruiter-centric review heuristics and prioritized improvement roadmaps.'
  },
  {
    id: 'gfg-hackathon',
    title: '2nd Runner-Up — GFG Body of MHSSCE',
    event: 'GeeksforGeeks Collegiate Hackathon',
    organization: 'GeeksforGeeks Student Body // MHSSCE',
    period: '2025',
    rank: '2nd Runner-Up',
    tag: 'Hackathon Award',
    description: 'Secured 2nd Runner-Up in the flagship hackathon organized by the GeeksforGeeks student body of MHSSCE, developing real-world algorithmic implementations and full-stack prototypes.'
  },
  {
    id: 'gsa-selection',
    title: 'Google Student Ambassador 2026',
    event: 'GSA Campus Program',
    organization: 'Google',
    period: 'May 2026 – Present',
    rank: 'Selected Ambassador',
    tag: 'Ambassadorship',
    description: 'Selected to represent Google’s AI and developer initiatives on campus; organizing technical workshops on Gemini, Google AI Studio, and developer tooling.'
  },
  {
    id: 'paper-113',
    title: 'Research: Campus Event & Club Management Platform',
    event: 'ICSSSD Post-Conference Publication Track',
    organization: 'M. H. Saboo Siddik College of Engineering',
    period: '2026',
    rank: 'Paper ID: 113',
    tag: 'Research Paper',
    description: 'Co-authored a research paper proposing a centralized web platform (React, Supabase, AI chatbot) to digitize campus event scheduling, club registrations, and analytics.'
  },
  {
    id: 'paper-123',
    title: 'Research: Critical Analysis of Builder.ai Startup Collapse',
    event: 'SMARTSSD 2026 Conference Track (AI/ML)',
    organization: 'Research Track',
    period: '2026',
    rank: 'Paper ID: 123',
    tag: 'Research Paper',
    description: 'Co-authored a qualitative case study analyzing strategic, technological, unit economic, and governance factors behind the collapse of an AI startup.'
  },
  {
    id: 'iit-delhi-ambassador',
    title: 'Top-Performing Campus Ambassador (Nationwide)',
    event: 'BECon 2026',
    organization: 'eDC, IIT Delhi',
    period: 'Dec 2025 – Feb 2026',
    rank: 'National Distinction',
    tag: 'National Distinction',
    description: 'Recognized among top-performing Campus Ambassadors nationwide for high-impact campus outreach and delegate engagement for IIT Delhi’s flagship entrepreneurship conclave.'
  },
  {
    id: 'cert-genai',
    title: 'Generative AI for All',
    event: 'Industry Accreditation',
    organization: 'Certification Authority',
    period: '2025',
    rank: 'Certified',
    tag: 'Professional Certification',
    description: 'Comprehensive certification covering foundational concepts, prompt engineering, multimodal architectures, and real-world applications of Large Language Models.'
  },
  {
    id: 'cert-aws',
    title: 'AWS Solutions Architecture Job Simulation',
    event: 'Cloud Architecture Simulation',
    organization: 'Forage / Amazon Web Services',
    period: '2025',
    rank: 'Completed',
    tag: 'Professional Certification',
    description: 'Practical job simulation designing resilient multi-tier cloud architectures, VPC networking, access management, and disaster recovery strategies.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    iconName: 'Code',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C', 'C++']
  },
  {
    category: 'Frontend Development',
    iconName: 'Layout',
    skills: ['React.js', 'Next.js 15', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'HTML5 / SCSS']
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'RESTful API Design', 'MVC Architecture', 'JWT Authentication']
  },
  {
    category: 'Databases & Storage',
    iconName: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'MinIO (min.io)', 'Prisma ORM', 'MongoDB Atlas']
  },
  {
    category: 'AI, ML & Data Science',
    iconName: 'Brain',
    skills: ['NumPy', 'Pandas', 'AI API Integration', 'Gemini API', 'OpenAI API', 'LangChain / RAG']
  },
  {
    category: 'Tools & DevOps',
    iconName: 'Terminal',
    skills: ['Git & GitHub', 'Vercel', 'Render', 'Docker', 'Postman', 'Cloudinary']
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'paper-113',
    title: 'Design and Implementation of a Web-Based Campus Event and Club Management System',
    role: 'Co-Author',
    year: '2026',
    track: 'ICSSSD Post-Conference Publication Track',
    paperId: 'Paper ID: 113',
    description: 'Co-authored a paper proposing a centralized web platform (React, Supabase) for MHSSCE to digitize campus event scheduling, club registration, and participation tracking via role-based dashboards and an AI chatbot.',
    statusNote: 'Submitted under the post-conference publication track of ICSSSD (Paper ID: 113)'
  },
  {
    id: 'paper-123',
    title: 'A Critical Analysis of Builder.ai: Factors Behind the Collapse of an AI-Driven Startup',
    role: 'Co-Author',
    year: '2026',
    track: 'SMARTSSD 2026 Conference Track (AI, Data Science & ML)',
    paperId: 'Paper ID: 123',
    description: 'Co-authored a qualitative case-study analyzing strategic, technological, and governance factors behind Builder.ai’s collapse, evaluating structural unit economics and over-promoted synthetic automation.',
    statusNote: 'Submitted to SMARTSSD 2026 conference track (Paper ID: 123)'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'genai-cert',
    title: 'Generative AI for All',
    issuer: 'Certification Authority',
    type: 'AI / Deep Learning Foundation',
    description: 'Foundations and practical applications of Large Language Models, prompt engineering, and multimodal AI systems.'
  },
  {
    id: 'aws-sim',
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage / AWS Simulation',
    type: 'Cloud Architecture Simulation',
    description: 'Practical job simulation analyzing client requirements, designing resilient multi-tier cloud architectures, and optimizing AWS security and reliability.'
  }
];

export const EDUCATION = {
  institution: 'M. H. Saboo Siddik College of Engineering',
  university: 'University of Mumbai',
  degree: 'Bachelor of Engineering in Computer Science Engineering',
  specialization: 'Artificial Intelligence and Machine Learning (AI & ML)',
  location: 'Mumbai, India',
  period: 'September 2024 – May 2028',
  batch: '2024 – 2028',
  status: 'In Progress (Undergraduate)'
};
