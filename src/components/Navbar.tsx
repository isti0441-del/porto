import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PageId } from '../types.ts';

interface NavbarProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: PageId }[] = [
    { label: 'Beranda', id: 'home' },
    { label: 'Tentang', id: 'about' },
    { label: 'Keahlian', id: 'skills' },
    { label: 'Proyek', id: 'projects' },
    { label: 'Layanan', id: 'services' },
    { label: 'Kontak', id: 'contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/50 backdrop-blur-xl border-b border-white/60 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark - Heritage Fancy Typographic Branding */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="group border-none bg-transparent p-0 cursor-pointer whitespace-nowrap shrink-0 text-left"
            >
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-[#DB5184] transition-colors">
                ISTIQOMAH
              </span>
            </button>

            {/* Zone 2: 4-6 concise single-line nav tabs that switch views */}
            <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-2xs">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-white/50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-[#DB5184] rounded-xl -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 border border-white/20 cursor-pointer"
              >
                <span>Mulai Diskusi</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DB5184]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 text-slate-800 hover:bg-white/70 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-50 md:hidden p-6 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  PILIH HALAMAN
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#DB5184] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Frontend &amp; Web Dev
                </span>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-all cursor-pointer ${
                    currentPage === link.id
                      ? 'bg-[#DB5184] text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Mulai Diskusi Sekarang</span>
                  <ArrowUpRight className="w-4 h-4 text-[#DB5184]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
