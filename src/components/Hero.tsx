import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MapPin, ArrowRight, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton.tsx';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  const [imageError, setImageError] = useState(false);
  // 3D Tilt Card Interaction
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), {
    damping: 20,
    stiffness: 150,
  });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge: Available for Projects with Pulsing Green Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-800">
                Available for Projects
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-600 font-medium">Q4 2026</span>
            </motion.div>

            {/* Main Headline with Split Text Stagger */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              Membangun Pengalaman Web yang{' '}
              <span className="relative inline-block text-[#DB5184] font-extrabold italic">
                Hidup &amp; Presisi
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#DB5184]/40"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline / Role & Intro */}
            <p className="text-base sm:text-lg text-slate-800/90 leading-relaxed max-w-2xl mb-8 font-normal">
              Halo, saya <strong className="font-semibold text-slate-950">Istiqomah</strong>, seorang{' '}
              <span className="px-1.5 py-0.5 rounded-md bg-white/50 font-medium text-slate-900">
                Frontend &amp; Web Developer
              </span>{' '}
              yang berfokus pada desain antarmuka interaktif berstandar industri, arsitektur modern
              React, animasi micro-interactions, serta estetika glassmorphism modern.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700 mb-9">
              <a
                href="https://maps.google.com/?q=Plered,+Purwakarta,+Jawa+Barat,+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/80 hover:text-[#DB5184] transition-all group shadow-2xs"
              >
                <MapPin className="w-4 h-4 text-[#DB5184] group-hover:scale-110 transition-transform" />
                <span>Plered, Jawa Barat, Indonesia</span>
                <span className="text-[10px] text-slate-500 font-mono">↗</span>
              </a>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm border border-white/60 text-slate-700 shadow-2xs">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>React · TypeScript · Motion</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={onContactClick}
                variant="primary"
                className="px-7 py-3.5 text-sm font-semibold tracking-wide"
              >
                <span className="flex items-center gap-2">
                  <span>Mulai Kolaborasi</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={onExploreWork}
                variant="glass"
                className="px-6 py-3.5 text-sm font-semibold text-slate-800"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#DB5184]" />
                  <span>Jelajahi Karya</span>
                </span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column: 3D Tilt Developer Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[390px] aspect-[4/5] rounded-3xl p-4 glass-panel border-2 border-white/80 shadow-2xl transition-shadow duration-300 hover:shadow-[#DB5184]/20"
            >
              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/40 border border-white/60">
                {!imageError ? (
                  <img
                    src="/src/assets/images/istiqomah_portrait_1793196372837.jpeg"
                    alt="Istiqomah - Frontend & Web Developer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-white/70 via-[#A8E088]/40 to-[#DB5184]/25 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/85 border border-white flex items-center justify-center text-slate-800 font-serif text-3xl font-black shadow-md mb-3">
                      IQ
                    </div>
                    <span className="font-serif font-bold text-xl text-slate-900">Istiqomah</span>
                    <span className="text-xs text-slate-700 mt-1 font-medium">Frontend &amp; Web Developer</span>
                  </div>
                )}

                {/* Ambient Soft Glass Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-white/10 pointer-events-none" />

                {/* Floating Interactive Badge: Developer Profile */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/90 shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500 font-mono">
                      DEVELOPER PROFILE
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#DB5184]">
                      <Sparkles className="w-3 h-3" />
                      Crafting UI
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif font-bold text-base text-slate-900 leading-tight">
                        Istiqomah
                      </h2>
                      <p className="text-xs text-slate-600">Frontend &amp; Creative Web Dev</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#A8E088]/50 flex items-center justify-center text-slate-800 text-xs font-mono font-bold">
                      2026
                    </div>
                  </div>
                </div>

                {/* Top Corner Floating Glass Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-tight flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#A8E088]" />
                  <span>Pixel Perfect</span>
                </div>
              </div>

              {/* Decorative Subtle Orbit Circles */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full border border-white/40 pointer-events-none -z-10 animate-spin" style={{ animationDuration: '24s' }} />
              <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full border border-[#DB5184]/30 pointer-events-none -z-10 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Full-width KPI / Value Strip Below Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-900/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold text-slate-900 tabular-nums">100%</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
              Custom Frontend Code
            </span>
            <span className="text-[11px] text-slate-500">React 19 &amp; TypeScript</span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold text-[#DB5184] tabular-nums">60fps</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
              Micro-interactions
            </span>
            <span className="text-[11px] text-slate-500">Compositor-level motion</span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold text-slate-900 tabular-nums">WCAG AA</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
              Accessibility Standard
            </span>
            <span className="text-[11px] text-slate-500">Contrast &amp; Keyboard focus</span>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-3xl font-bold text-emerald-800 tabular-nums">Fast</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700 mt-1">
              Response &amp; Delivery
            </span>
            <span className="text-[11px] text-slate-500">isti0441@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
