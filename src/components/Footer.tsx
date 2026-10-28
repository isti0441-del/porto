import React from 'react';
import { ArrowUp, Instagram, Mail, MapPin } from 'lucide-react';
import { PageId } from '../types.ts';

interface FooterProps {
  onPageChange?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Beranda', id: 'home' },
    { label: 'Tentang', id: 'about' },
    { label: 'Keahlian', id: 'skills' },
    { label: 'Proyek', id: 'projects' },
    { label: 'Layanan', id: 'services' },
    { label: 'Kontak', id: 'contact' },
  ];

  return (
    <footer className="relative pt-16 pb-12 border-t border-slate-900/10 overflow-hidden bg-white/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900/10">
          {/* Brand Identity with Heritage Fancy Typography */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => onPageChange?.('home')}
              className="border-none bg-transparent p-0 cursor-pointer text-left group"
            >
              <span className="font-serif font-bold text-2xl tracking-tight text-slate-900 group-hover:text-[#DB5184] transition-colors">
                ISTIQOMAH
              </span>
            </button>
            <p className="text-xs text-slate-600 max-w-sm">
              Frontend &amp; Web Developer · Merancang antarmuka web interaktif berstandar global
              dari Plered, Jawa Barat, Indonesia.
            </p>
          </div>

          {/* Nav Page Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onPageChange?.(item.id)}
                className="hover:text-[#DB5184] transition-colors border-none bg-transparent p-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
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
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 hover:bg-white text-slate-800 text-xs font-semibold border border-white/80 shadow-2xs transition-all hover:border-[#DB5184]/40 cursor-pointer"
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
