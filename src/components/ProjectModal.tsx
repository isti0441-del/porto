import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Clock, Check, Bell, Layers, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types.ts';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [notified, setNotified] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  if (!project) return null;

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setNotified(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#DB5184', '#A8E088', '#ffffff'],
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white shadow-2xl z-10 overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold">
              {project.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              <Clock className="w-3 h-3" />
              {project.status} ({project.progress}% Selesai)
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            {project.title}
          </h2>

          {/* Image Showcase */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-white/80 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                Estimasi Rilis: {project.expectedDate}
              </span>
              <span className="font-mono bg-[#DB5184]/80 backdrop-blur-md px-2.5 py-1 rounded-md font-semibold">
                Work in Progress
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              DESKRIPSI PROYEK
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              FITUR &amp; ARSITEKTUR UTAMA
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white/60 border border-slate-100">
                  <Sparkles className="w-3.5 h-3.5 text-[#DB5184] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Sneak Peek Early Notification */}
          <div className="p-4 rounded-2xl bg-[#A8E088]/20 border border-[#A8E088]/40">
            {notified ? (
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Terima kasih! Kami akan memberi tahu Anda saat proyek ini live.</span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Masukkan email untuk notifikasi preview..."
                  className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#DB5184] text-slate-800"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#DB5184] hover:bg-[#c43f71] rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>Dapatkan Notifikasi</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
