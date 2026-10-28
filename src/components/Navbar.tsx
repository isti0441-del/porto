import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#about', id: 'about' },
    { label: 'Keahlian', href: '#skills', id: 'skills' },
    { label: 'Proyek', href: '#projects', id: 'projects' },
    { label: 'Layanan', href: '#services', id: 'services' },
    { label: 'Kontak', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark - Heritage Fancy Typographic Branding */}
            <a
              href="#hero"
              className="group flex items-center gap-2 text-slate-900 no-underline whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#DB5184] to-[#A8E088] p-0.5 shadow-sm transition-transform duration-300 group-hover:rotate-6">
                <div className="w-full h-full bg-white/90 rounded-[6px] flex items-center justify-center font-serif font-black text-xs text-slate-900 tracking-tighter">
                  IQ
                </div>
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-slate-900 group-hover:text-[#DB5184] transition-colors">
                ISTIQOMAH
              </span>
            </a>

            {/* Zone 2: 4-5 concise single-line nav links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
                      isActive ? 'text-slate-950 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DB5184] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={onContactClick}
                className="relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#DB5184] hover:bg-[#c64073] rounded-xl shadow-md shadow-[#DB5184]/20 hover:shadow-lg hover:shadow-[#DB5184]/35 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 border border-white/25"
              >
                <span>Mulai Diskusi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 text-slate-800 hover:bg-white/70 transition-colors"
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
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-20 z-50 md:hidden p-6 rounded-2xl bg-white/90 backdrop-blur-2xl border border-white shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Navigasi Menu
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#DB5184] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Frontend &amp; Web Dev
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#DB5184]/10 text-[#DB5184] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#DB5184] hover:bg-[#c64073] rounded-xl shadow-md text-center flex items-center justify-center gap-2"
                >
                  <span>Hubungi Saya</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
