import React from 'react';
import { ArrowUp, Instagram, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 border-t border-slate-900/10 overflow-hidden bg-white/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900/10">
          {/* Brand Identity with Heritage Fancy Typography */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#DB5184] to-[#A8E088] p-0.5 shadow-2xs">
                <div className="w-full h-full bg-white/95 rounded-[6px] flex items-center justify-center font-serif font-black text-xs text-slate-900">
                  IQ
                </div>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">
                ISTIQOMAH
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-sm">
              Frontend &amp; Web Developer · Merancang antarmuka web interaktif berstandar global
              dari Plered, Jawa Barat, Indonesia.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-700">
            <a href="#about" className="hover:text-[#DB5184] transition-colors">
              Tentang
            </a>
            <a href="#skills" className="hover:text-[#DB5184] transition-colors">
              Keahlian
            </a>
            <a href="#projects" className="hover:text-[#DB5184] transition-colors">
              Proyek
            </a>
            <a href="#services" className="hover:text-[#DB5184] transition-colors">
              Layanan
            </a>
            <a href="#contact" className="hover:text-[#DB5184] transition-colors">
              Kontak
            </a>
            <a
              href="https://instagram.com/sftbble_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#DB5184] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@sftbble_</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 hover:bg-white text-slate-800 text-xs font-semibold border border-white/80 shadow-2xs transition-all hover:border-[#DB5184]/40"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#DB5184] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Istiqomah. Dibuat dengan presisi dan antusiasme tinggi.
          </p>
          <div className="flex items-center gap-1">
            <span>Dirancang dengan React, Tailwind CSS, &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
