import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Globe, Compass, ExternalLink, Sparkles, Terminal, Palette, Zap } from 'lucide-react';

interface AboutProps {
  onNavigateContact?: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigateContact }) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // WIB timezone (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('id-ID', options).format(new Date()) + ' WIB');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const traits = [
    {
      icon: Terminal,
      title: 'Clean Architecture',
      desc: 'Menulis kode modular, reusable, dan type-safe menggunakan TypeScript dan React modern patterns.',
    },
    {
      icon: Palette,
      title: 'Glassmorphism & Aesthetics',
      desc: 'Menerapkan hierarchy visual refined, backdrop-blur berlapis, dan balance palet pastel segar.',
    },
    {
      icon: Zap,
      title: 'Micro-Interactions',
      desc: 'Animasi 60fps dengan Framer Motion, magnetic feedback, dan transisi fluid tanpa layout thrashing.',
    },
  ];

  return (
    <section id="about" className="py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. BIOGRAFI &amp; FILOSOFI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Memadukan Logika Kode dengan Sentuhan Artistik
          </h2>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Bio Narrative & Principles */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-5">
                Menciptakan Produk Digital yang Berkesan
              </h3>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Saya percaya bahwa antarmuka web yang luar biasa tidak hanya harus berfungsi dengan
                  cepat tanpa cacat, tetapi juga harus mampu menghadirkan kegembiraan sensori melalui
                  umpan balik visual yang halus, ritme ruang yang proporsional, dan tipografi yang berkarakter.
                </p>
                <p>
                  Sebagai pengembang frontend, saya berfokus pada eksekusi kode bersih (clean code),
                  aksesibilitas menyeluruh (WCAG AA), dan implementasi motion design yang responsif.
                  Setiap interaksi dirancang dengan prinsip bahwa teknologi harus terasa alami dan
                  elegan di tangan pengguna.
                </p>
              </div>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-900/10">
              {traits.map((trait, idx) => {
                const IconComponent = trait.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="w-9 h-9 rounded-xl bg-white/70 border border-white/80 flex items-center justify-center text-[#DB5184] mb-3 shadow-2xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-sm text-slate-900 mb-1">{trait.title}</h4>
                    <p className="text-xs text-slate-600 leading-normal">{trait.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Location & Context Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#DB5184]" />
                  GEOGRAPHIC ANCHOR
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/60 border border-white/80 text-slate-700">
                  {localTime || 'Loading...'}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 mb-6 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DB5184]/15 border border-[#DB5184]/30 flex items-center justify-center text-[#DB5184] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-slate-900 leading-tight">
                      Plered, Jawa Barat
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">Indonesia (GMT+7 · WIB)</p>
                    <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                      Kawasan bersejarah yang kaya akan seni kerajinan keramik tradisional, kini menjadi basis
                      kreativitas digital dan pengembangan web modern.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Lat: -6.6416° · Lon: 107.3912°
                  </span>
                  <a
                    href="https://maps.google.com/?q=Plered,+Purwakarta,+Jawa+Barat,+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#DB5184] hover:underline"
                  >
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Working Availability Status */}
              <div className="p-4 rounded-xl bg-white/40 border border-white/70">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Kolaborasi Global &amp; Remote</h5>
                    <p className="text-xs text-slate-600">
                      Terbuka untuk proyek freelance, kontrak, dan kolaborasi jarak jauh di seluruh dunia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Prompt */}
            <div className="mt-6 pt-4 border-t border-slate-900/10 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">Tertarik berdiskusi?</span>
              <button
                type="button"
                onClick={onNavigateContact}
                className="text-xs font-semibold text-[#DB5184] hover:text-[#c43f71] flex items-center gap-1 border-none bg-transparent p-0 cursor-pointer"
              >
                <span>Kirim Pesan</span>
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
