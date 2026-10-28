import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, Palette, Gauge, Check } from 'lucide-react';
import { ServiceItem } from '../types.ts';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'Arsitektur Frontend Modern',
      description:
        'Pembangunan fondasi web aplikasi berbasis React 19 dan TypeScript dengan arsitektur modular, clean code, dan maintainability jangka panjang.',
      features: [
        'Component isolation & reusability tinggi',
        'Strict type-safety dengan TypeScript',
        'State management terstruktur & efisien',
        'Integrasi REST API & GraphQL',
      ],
    },
    {
      number: '02',
      title: 'Motion & Micro-interactions',
      description:
        'Sentuhan animasi halus yang memberikan feedback nyata pada interaksi kursor, gestur sentuh, dan perpindahan halaman.',
      features: [
        'Physics-based springs dengan Framer Motion',
        'Compositor-only rendering (60 FPS stabil)',
        'Magnetic cursor & 3D tilt effects',
        'Dukungan prefers-reduced-motion',
      ],
    },
    {
      number: '03',
      title: 'Glassmorphism & Visual Design',
      description:
        'Penerapan estetika modern dengan backdrop-blur bertingkat, palet warna pastel segar, serta batas semi-transparan yang proporsional.',
      features: [
        'Harmoni palet pastel mint (#A8E088) & magenta (#DB5184)',
        'Depth hierarchy tanpa visual clutter',
        'Tipografi berkarakter & anti-slop rules',
        'Pixel-perfection dari Figma ke React code',
      ],
    },
    {
      number: '04',
      title: 'Performa & Aksesibilitas (WCAG AA)',
      description:
        'Memastikan situs web dapat diakses oleh semua kalangan, memuat dalam hitungan milidetik, serta memiliki skor Core Web Vitals optimal.',
      features: [
        'Lighthouse audit 95+ (Performance, A11y, SEO)',
        'Zero Cumulative Layout Shift (CLS)',
        'Navigasi keyboard & ARIA landmarks lengkap',
        'Responsive layout 320px hingga 4K ultrawide',
      ],
    },
  ];

  return (
    <section id="services" className="py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>04. LAYANAN &amp; KAPABILITAS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Standar Eksekusi Frontend Kelas Industri
          </h2>
          <p className="text-sm text-slate-700 mt-2 max-w-2xl">
            Dari perancangan sistem antarmuka hingga penulisan kode siap rilis, setiap aspek
            dikerjakan dengan disiplin teknik tinggi dan ketelitian estetika.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel rounded-3xl p-7 flex flex-col justify-between hover:border-[#DB5184]/40 hover:bg-white/70 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-2xl font-black text-slate-400 group-hover:text-[#DB5184] transition-colors">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center text-slate-700 group-hover:text-[#DB5184] transition-colors shadow-2xs">
                    {idx === 0 && <Layers className="w-4 h-4" />}
                    {idx === 1 && <Zap className="w-4 h-4" />}
                    {idx === 2 && <Palette className="w-4 h-4" />}
                    {idx === 3 && <Gauge className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="font-serif font-bold text-xl text-slate-900 mb-3 group-hover:text-[#DB5184] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900/5">
                <ul className="space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#DB5184] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
