<div align="center">

# ⚡ Asjad Khan — Production Portfolio & Engineering Archive

**Full-Stack Software Engineer • 2x Hackathon Winner • Google Student Ambassador 2026**

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Visuals-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Modular_Design-cc6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  <a href="#-about-the-developer">About</a> •
  <a href="#-architecture--key-modules">Architecture</a> •
  <a href="#-tech-stack--toolchain">Tech Stack</a> •
  <a href="#-featured-projects">Projects</a> •
  <a href="#-experience--leadership">Experience</a> •
  <a href="#-hackathon-awards--research">Achievements</a> •
  <a href="#-local-development">Development</a> •
  <a href="#-contact--connect">Connect</a>
</p>

</div>

---

## 📌 Overview

This repository houses the personal portfolio, engineering showcase, and research repository of **Asjad Khan** — an undergraduate Computer Science Engineering student specializing in **Artificial Intelligence & Machine Learning (Batch: 2024 – 2028)** at **M. H. Saboo Siddik College of Engineering (University of Mumbai)**.

Engineered with **Next.js 15 App Router**, **React 19**, **Three.js**, and custom modular **SCSS**, this platform showcases real-world distributed architectures, production full-stack platforms, AI/ML integrations, and verified collegiate leadership.

---

## 👨‍💻 About The Developer

* **Current Role**: Software Developer Intern at **UnsaidTalks Education Pvt. Ltd.** (Building AI-powered resume builders and assessment platforms).
* **Community Leadership**: **Google Student Ambassador (GSA) 2026** representing Google developer tools, Gemini APIs, and AI workshops on campus.
* **Collegiate Honors**:
  * 🏆 **3rd Rank — GitGrade National Hackathon** (*RepoMirror*)
  * 🥈 **2nd Runner-Up — GeeksforGeeks (GFG) Body of MHSSCE Hackathon**
  * 📄 **2 Co-Authored Research Papers** (ICSSSD Paper ID: 113 & SMARTSSD Paper ID: 123)
  * 🌟 **Top-Performing Campus Ambassador (Nationwide)** — eDC, IIT Delhi (BECon 2026)
  * 🌐 **Joint Webmaster** — IEEE MHSSCE Student Branch

---

## 🛠 Tech Stack & Toolchain

The portfolio is built with zero CSS-framework overhead, utilizing bespoke design tokens, fluid typography, and glassmorphic elevations:

| Category | Technologies & Runtime Ecosystem |
| :--- | :--- |
| **Core Framework** | Next.js 15.1 (App Router), React 19 (Server & Client Components) |
| **Language** | TypeScript (Strict Mode), JavaScript (ES6+) |
| **Graphics & 3D** | Three.js (Interactive constellation, geometric nodes, particle dynamics) |
| **Styling & Tokens** | Modular SCSS, CSS Variables, Glassmorphism, Micro-interactions |
| **Backend & APIs** | Node.js, Express.js, NestJS, FastAPI, RESTful API Design, MVC Architecture, JWT Auth |
| **Databases & Storage**| MongoDB, PostgreSQL, Supabase, MinIO (`min.io`), Prisma ORM, MongoDB Atlas |
| **AI, ML & Data** | NumPy, Pandas, OpenAI API, Google Gemini API, LangChain / RAG, Web Speech API |
| **DevOps & Cloud** | Git & GitHub, Vercel, Render, Docker, Postman, Cloudinary |

---

## 🏛 Architecture & Project Structure

The project is structured around high maintainability, type-safety, and modular component isolation:

```text
PORTFOLIO/
├── public/                     # Static assets, official resumes, optimized portraits, and robots.txt
│   ├── images/                 # Processed monochrome and dual-tone portraits
│   ├── Asjad_Khan_Resume.pdf   # Official downloadable resume
│   └── robots.txt              # Production search engine crawler rules
│
├── scripts/                    # Build-time and pre-processing utility scripts
│   ├── process-portrait.js     # Image pipeline for WebP/PNG high-contrast portraits
│   └── generate-signal-portrait.js
│
├── src/
│   ├── app/                    # Next.js 15 App Router root
│   │   ├── globals.scss        # Global resets, typography tokens, and CSS custom properties
│   │   ├── layout.tsx          # Root layout, Google Fonts (Syne, JetBrains Mono, Inter), metadata
│   │   ├── page.tsx            # Composition root assembling all narrative sections
│   │   └── sitemap.ts          # Automated XML sitemap generator for search indexation
│   │
│   ├── components/             # Domain-driven component architectures
│   │   ├── About/              # Persona story, metrics, and interactive JSON terminal spec
│   │   ├── Achievements/       # Filterable hackathon awards, research publications, distinctions
│   │   ├── Contact/            # Direct WhatsApp 1-click CTA, copyable phone, direct email links
│   │   ├── Education/          # Academic pedigree, MHSSCE, Mumbai University, Batch 2024-2028
│   │   ├── Experience/         # Connected chronological timeline (UnsaidTalks, GSA, IEEE, IIT Delhi)
│   │   ├── Footer/             # System telemetry, active coordinates, and quick anchors
│   │   ├── Hero/               # ProofStrip metrics, interactive 3D scene, dynamic portrait transform
│   │   ├── Navbar/             # Glassmorphic header with desktop links and mobile drawer menu
│   │   ├── Projects/           # Filterable projects, live deployments, codebases, audit previews
│   │   ├── Research/           # Deep-dives into co-authored academic research papers
│   │   ├── Scene/              # Three.js backdrop canvas and particle systems
│   │   ├── Skills/             # 6-category technical toolchain inventory with responsive pill badges
│   │   ├── Three/              # Low-level Three.js animation lifecycle hooks
│   │   └── UI/                 # Primitives: TiltCard (3D perspective), CursorSpotlight, Marquee
│   │
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth (Projects, Experience, Skills, Achievements)
│   │
│   ├── hooks/
│   │   └── use3DTilt.ts        # Gyroscope and mouse-tracking 3D card tilt physics
│   │
│   ├── styles/
│   │   ├── _variables.scss     # Color tokens (#06080d canvas, #10b981 emerald, #06b6d4 cyan)
│   │   └── _mixins.scss        # Breakpoint mixins (mobile, tablet, laptop), glass-card utilities
│   │
│   └── types/
│       └── index.ts            # TypeScript interfaces for strict runtime validation
│
├── .gitignore                  # Git exclusion rules (node_modules, .next, .env, build traces)
├── next.config.mjs             # Next.js compiler optimizations and image domains
├── package.json                # Project dependencies and operational scripts
└── tsconfig.json               # TypeScript compiler options and path aliases (@/*)
```

---

## 🚀 Key Features & Highlights

### 1. Interactive 3D Canvas & Portrait Transform
* **Custom Three.js Scene**: Renders interactive, mouse-reactive geometric particles and dynamic spatial depth directly on the canvas without third-party heavy bundle baggage.
* **Dual-State Signal Portrait**: Smoothly transitions between authentic photography and engineered matrix signal vectors on interaction.

### 2. High-Density Proof Strip
* Prominently highlights **2x Hackathon Winner** status (GitGrade 3rd Rank & GFG 2nd Runner-Up), **Google Student Ambassador 2026** validation, and **2 Research Papers**.

### 3. Interactive Developer Terminal Spec
* An authentic terminal card featuring copyable JSON runtime specifications, live coordinates (`18.9667° N, 72.8286° E // MUMBAI_IN`), and contact metadata.

### 4. Technical Toolchain Grid
* Structured 6-tier inventory covering **Programming Languages**, **Frontend**, **Backend & APIs** (with NestJS & FastAPI), **Databases & Storage** (MongoDB, PostgreSQL, Supabase, MinIO `min.io`), **AI/ML & Data Science** (NumPy, Pandas, LangChain, Gemini API), and **DevOps**.

### 5. Instant WhatsApp & Phone Connectivity
* Direct deep-link button (`https://wa.me/918108184070`) that opens WhatsApp with a pre-formatted message for recruiters:
  > *"Hi Asjad, I came across your portfolio and would love to connect with you!"*
* Interactive 1-click **Copy Phone Number** button with real-time visual feedback.

### 6. Search Engine Optimization & Production Ready
* Fully automated XML sitemap generation at `/sitemap.xml`.
* Proper OpenGraph metadata, crawl directives via `robots.txt`, and zero TypeScript compile warnings.

---

## 💻 Local Development

### Prerequisites
* **Node.js**: v18.17.0 or later (v20+ recommended)
* **npm**: v9.0.0 or later

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Khanasjad27/AsjadKhan-Portfolio.git
   cd AsjadKhan-Portfolio
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Compile for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm run start
   ```

---

## 🏆 Featured Projects

| Project | Highlights & Tech Stack | Links |
| :--- | :--- | :---: |
| **RepoMirror** | AI-Powered GitHub Repository Evaluator. Analyzes repos, provides a 0–100 quality score, and generates a prioritized improvement roadmap.<br>`React` • `TypeScript` • `OpenAI API` • `Supabase` | [Live](https://repo-mirror-asjad-khan.vercel.app/) • [Code](https://github.com/Khanasjad27/RepoMirror) |
| **LegalEase** | AI-Assisted Multilingual Legal Information Assistant. Converts dense legal jargon into plain language with Hindi & Marathi Speech Synthesis.<br>`React` • `TypeScript` • `Supabase` • `Web Speech API` | [Live](https://legalease-ai.vercel.app/) • [Code](https://github.com/Khanasjad27/LegalEase) |
| **WanderLust** | Full-Stack Travel & Stay Listing Platform with MVC architecture, session auth, Cloudinary uploads, and MongoDB Atlas.<br>`Node.js` • `Express.js` • `MongoDB Atlas` • `Passport.js` | [Live](https://wanderlust-3q0y.onrender.com/listing) • [Code](https://github.com/Khanasjad27/WanderLust) |
| **Smart Energy IoT** | IoT-Enabled automated electricity consumption analysis and slab-rated tariff billing platform.<br>`Node.js` • `Express.js` • `PostgreSQL` • `Prisma ORM` • `JWT` | [Live](https://smart-energy-iot.vercel.app/) • [Code](https://github.com/Khanasjad27/Smart-Energy-IoT) |

---

## 📬 Contact & Connect

* **Full Name**: Asjad Khan
* **Location**: Mumbai, Maharashtra, India
* **Direct Phone / WhatsApp**: [+91 8108184070](https://wa.me/918108184070?text=Hi%20Asjad%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you!)
* **Email**: [khanasjadshamshadahmed@gmail.com](mailto:khanasjadshamshadahmed@gmail.com)
* **GitHub**: [@Khanasjad27](https://github.com/Khanasjad27)
* **LinkedIn**: [linkedin.com/in/asjad-khan-ak27102005](https://www.linkedin.com/in/asjad-khan-ak27102005/)
* **LeetCode**: [leetcode.com/u/Asjad_Khan](https://leetcode.com/u/Asjad_Khan/)

---

<div align="center">
  <sub>Designed &amp; Engineered by Asjad Khan • Built with Next.js 15, React 19 &amp; Three.js</sub>
</div>
