import React from 'react';
import { motion } from 'motion/react';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Base Pastel Mint Background with subtle gradient wash */}
      <div 
        className="absolute inset-0 bg-[#A8E088] transition-colors duration-700" 
        style={{
          backgroundImage: `
            radial-gradient(at 15% 15%, rgba(255, 255, 255, 0.45) 0px, transparent 50%),
            radial-gradient(at 85% 10%, rgba(219, 81, 132, 0.18) 0px, transparent 45%),
            radial-gradient(at 50% 50%, rgba(168, 224, 136, 0.95) 0px, transparent 65%),
            radial-gradient(at 80% 85%, rgba(219, 81, 132, 0.22) 0px, transparent 50%),
            radial-gradient(at 10% 85%, rgba(255, 255, 255, 0.5) 0px, transparent 45%)
          `
        }}
      />

      {/* Floating Organic Blobs with subtle continuous drift */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-white/40 via-white/20 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 45, -35, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-24 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-[#DB5184]/25 via-[#DB5184]/15 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 35, -40, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-white/35 via-[#A8E088]/30 to-[#DB5184]/15 blur-3xl"
      />

      {/* Subtle Abstract Wave / Heritage Geometric Vector Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14] stroke-slate-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,200 C300,50 600,350 1000,180 C1300,50 1500,220 1600,180"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <path
          d="M-100,650 C250,500 700,750 1100,580 C1350,480 1550,620 1600,590"
          strokeWidth="1.2"
        />
        <circle cx="280" cy="180" r="120" strokeWidth="0.8" strokeDasharray="3 6" />
        <circle cx="1200" cy="720" r="160" strokeWidth="0.8" strokeDasharray="4 8" />
      </svg>

      {/* Fine Frosted Texture Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
