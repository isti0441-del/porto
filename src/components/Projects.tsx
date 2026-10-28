import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Bell, Check, ArrowRight, Layers, Code2, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectsProps {
  onNotify?: (message: string) => void;
  onNavigateContact?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNotify, onNavigateContact }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubscribed(true);
    if (onNotify) {
      onNotify('Terima kasih! Anda akan mendapat pemberitahuan eksklusif saat proyek dirilis.');
    }

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#DB5184', '#A8E088', '#ffffff'],
    });
  };

  return (
    <section id="projects" className="pt-28 pb-20 min-h-[calc(100vh-140px)] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold mb-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. PORTOFOLIO &amp; EKSPLORASI DIGITAL</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Karya &amp; Studi Kasus Terpilih
          </h1>
          <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
            Eksplorasi antarmuka digital dan aplikasi web modern yang dibangun dengan fokus pada
            keanggunan visual, arsitektur kode bersih, serta micro-interactions berstandar tinggi.
          </p>
        </div>

        {/* Floating "Coming Soon" Centerpiece Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ambient Decorative Glowing Rings behind floating text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full border border-white/50 opacity-40 -z-10"
            />
            <motion.div
              animate={{
                scale: [1.08, 0.94, 1.08],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-[#DB5184]/30 opacity-30 -z-10"
            />
          </div>

          {/* Main Floating Glass Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden border-2 border-white/80 shadow-2xl backdrop-blur-2xl"
          >
            {/* Subtle light sheen animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-[#DB5184]/10 pointer-events-none" />

            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-2xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DB5184] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DB5184]"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                Under Active Crafting
              </span>
            </div>

            {/* Floating "COMING SOON" Typography Centerpiece */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="my-6"
            >
              <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none drop-shadow-sm select-none">
                COMING{' '}
                <span className="relative inline-block text-[#DB5184] italic">
                  SOON
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3 -right-6 text-2xl sm:text-3xl text-emerald-700 not-italic font-sans"
                  >
                    ✦
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            {/* Elegant Sub-description */}
            <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
              Koleksi karya portofolio web interaktif sedang disempurnakan dengan standar performa
              optimal, animasi 60 FPS, dan pengalaman pengguna kelas industri.
            </p>

            {/* Floating Tags / Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 text-xs font-medium text-slate-800 shadow-2xs"
              >
                <Code2 className="w-3.5 h-3.5 text-[#DB5184]" />
                <span>Web Applications</span>
              </motion.span>

              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 text-xs font-medium text-slate-800 shadow-2xs"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-700" />
                <span>Design Systems</span>
              </motion.span>

              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 text-xs font-medium text-slate-800 shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-600" />
                <span>Creative Web Experiences</span>
              </motion.span>
            </div>

            {/* Interactive Notify Subscription */}
            <div className="max-w-md mx-auto p-2 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm">
              {isSubscribed ? (
                <div className="py-2.5 px-4 flex items-center justify-center gap-2 text-emerald-800 text-xs font-semibold">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Notifikasi diaktifkan! Kami akan mengabari Anda segera.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email untuk pratinjau pertama..."
                    className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#DB5184] text-slate-900 placeholder:text-slate-400"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#DB5184] hover:bg-[#c43f71] rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>Beri Tahu Saya</span>
                  </button>
                </form>
              )}
            </div>

            {/* Bottom Quick Action */}
            {onNavigateContact && (
              <div className="mt-8 pt-6 border-t border-slate-900/10 flex items-center justify-center gap-2 text-xs text-slate-700">
                <span>Ingin mendiskusikan proyek khusus lebih awal?</span>
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="font-semibold text-[#DB5184] hover:text-[#c43f71] inline-flex items-center gap-1 cursor-pointer underline"
                >
                  <span>Hubungi Langsung</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
