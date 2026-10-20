import React from 'react';
import { ScrollProgressBar } from '@/components/UI/ScrollProgressBar';
import { SceneBackdrop } from '@/components/Scene/SceneBackdrop';
import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { ProofStrip } from '@/components/Hero/ProofStrip';
import { TechMarquee } from '@/components/UI/TechMarquee';
import { About } from '@/components/About/About';
import { Projects } from '@/components/Projects/Projects';
import { Experience } from '@/components/Experience/Experience';
import { Skills } from '@/components/Skills/Skills';
import { Achievements } from '@/components/Achievements/Achievements';
import { Education } from '@/components/Education/Education';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import { CursorSpotlight } from '@/components/UI/CursorSpotlight';

export default function Home() {
  return (
    <>
      {/* 3px Hardware-Accelerated Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sarthak-Style Fixed Noir Signal Portrait & Ambient Grid Backdrop */}
      <SceneBackdrop />

      {/* Interactive Cursor Ambient Spotlight */}
      <CursorSpotlight />

      {/* Refined Glass Pill Navigation */}
      <Navbar />

      <main id="main">
        {/* Editorial Hero with Presence Indicator and Instrument Serif Typography */}
        <Hero />

        {/* 4-Column Proof & Highlights Strip */}
        <ProofStrip />

        {/* 60fps Infinite Technical Ticker Ribbon */}
        <TechMarquee />

        {/* 01 / About: Persona, Narrative & Interactive Terminal Spec */}
        <About />

        {/* 02 / Selected Work: Browser-Bar Artworks & RepoMirror Live Radar */}
        <Projects />

        {/* 03 / Experience: Career Timeline (ACM at bottom) & Methodology */}
        <Experience />

        {/* 04 / Skills: Categorized Engineering Matrix */}
        <Skills />

        {/* 05 / Achievements & Research: Hackathons, Ambassador Honors, Papers & Accreditations */}
        <Achievements />

        {/* 06 / Education & Accreditations */}
        <Education />

        {/* 07 / Contact: Direct 1-Click Clipboard & Connect */}
        <Contact />
      </main>

      {/* Editorial Developer Footer */}
      <Footer />
    </>
  );
}
