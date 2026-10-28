/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas.tsx';
import { SpotlightFollower } from './components/SpotlightFollower.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Services } from './components/Services.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { Toast } from './components/Toast.tsx';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-[#DB5184] selection:text-white">
      {/* Dynamic Background with Pastel Mint #A8E088 & Ambient Glow Blobs */}
      <BackgroundCanvas />

      {/* Smooth Cursor Spotlight Follower */}
      <SpotlightFollower />

      {/* Top Bar Navigation Contract */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* About & Philosophy Section */}
        <About />

        {/* Technical Skills & Capabilities */}
        <Skills />

        {/* Coming Soon Projects Showcase */}
        <Projects />

        {/* Services & Industrial Frontend Standards */}
        <Services />

        {/* Contact & Direct Collaboration */}
        <Contact onNotify={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Micro-interaction Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
