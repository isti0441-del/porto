/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { PageId } from './types.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4000);
  };

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between text-slate-900 selection:bg-[#DB5184] selection:text-white">
      {/* Dynamic Background with Pastel Mint #A8E088 & Ambient Glow Blobs */}
      <BackgroundCanvas />

      {/* Smooth Cursor Spotlight Follower */}
      <SpotlightFollower />

      {/* Top Bar Navigation with Instant Page Switching */}
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Page Content View Router with Smooth Transitions */}
      <main className="relative z-10 flex-1 flex flex-col w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full"
          >
            {currentPage === 'home' && (
              <Hero
                onExploreWork={() => handlePageChange('projects')}
                onContactClick={() => handlePageChange('contact')}
              />
            )}

            {currentPage === 'about' && (
              <div className="pt-28 pb-20">
                <About onNavigateContact={() => handlePageChange('contact')} />
              </div>
            )}

            {currentPage === 'skills' && (
              <div className="pt-28 pb-20">
                <Skills />
              </div>
            )}

            {currentPage === 'projects' && (
              <Projects
                onNotify={showToast}
                onNavigateContact={() => handlePageChange('contact')}
              />
            )}

            {currentPage === 'services' && (
              <div className="pt-28 pb-20">
                <Services />
              </div>
            )}

            {currentPage === 'contact' && (
              <div className="pt-28 pb-20">
                <Contact onNotify={showToast} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer with Page View Routing */}
      <Footer onPageChange={handlePageChange} />

      {/* Micro-interaction Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
