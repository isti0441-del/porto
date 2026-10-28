import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Eye, Layers, ArrowUpRight, Lock } from 'lucide-react';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'aether-ide',
      title: 'Aether Glass Studio',
      category: 'Web App',
      shortDesc: 'Lingkungan IDE berbasis browser dengan arsitektur UI frosted glassmorphism modern, live code compilation, dan performa tinggi.',
      fullDesc: 'Aether Glass Studio menghadirkan pengalaman ngoding kreatif dengan visual glassmorphism berlapis, sintaks highlight dinamis, real-time reactive sandbox, dan manajemen state tanpa lag. Didesain secara khusus untuk frontend engineer yang menyukai estetika visual modern.',
      image: '/src/assets/images/project_glass_ui_1793196373170.jpg',
      tags: ['React 19', 'TypeScript', 'Web Workers', 'Tailwind CSS'],
      status: 'Coming Soon',
      progress: 85,
      expectedDate: 'Desember 2026',
      highlights: [
        'Translucent glassmorphism workspace dengan adaptive blur',
        'In-memory code runner berbasis WebAssembly',
        'Live theme customizer dengan real-time palette engine',
        'Zero layout shifts dan optimalisasi memori browser',
      ],
    },
    {
      id: 'vela-experience',
      title: 'Vela Interactive Platform',
      category: 'Creative UI',
      shortDesc: 'Platform branding interaktif imersif dengan transisi kamera 3D, physics-based motion, dan kinetic typography.',
      fullDesc: 'Vela mengintegrasikan fluid motion typography dengan kanvas interaktif yang merespons pergerakan kursor pengguna. Setiap elemen grafis dihitung dengan formula gerak harmonik untuk memberikan kesan organik dan mewah.',
      image: '/src/assets/images/project_creative_web_1793196374822.jpg',
      tags: ['Framer Motion', 'Canvas API', 'WebGL', 'Modern CSS'],
      status: 'In Development',
      progress: 90,
      expectedDate: 'November 2026',
      highlights: [
        'Kompositor animasi 60fps dengan spring physics',
        'Interactive cursor spotlight dengan dynamic refraction',
        'Responsive viewport adaptif untuk mobile & ultrawide',
        'Aksesibilitas ramah prefers-reduced-motion',
      ],
    },
    {
      id: 'flux-design-tokens',
      title: 'Flux Motion Tokens System',
      category: 'Design System',
      shortDesc: 'Framework komponen UI modular dengan micro-interactions terintegrasi, pastel color palette, dan aksesibilitas ketat.',
      fullDesc: 'Flux Motion Tokens adalah sistem desain yang mencakup 35+ komponen siap pakai (primitives, form controls, modals, feedback toasts) yang dirancang dengan rasio kontras WCAG AA dan kurva easing terkalibrasi.',
      image: '/src/assets/images/project_motion_design_1793196374222.jpg',
      tags: ['Design System', 'Accessibility', 'Micro-interactions', 'Radix Primitives'],
      status: 'Coming Soon',
      progress: 78,
      expectedDate: 'Januari 2027',
      highlights: [
        '35+ komponen UI dengan validasi keyboard focus lengkap',
        'Sistem token warna otomatis dark & light mode',
        'Ukuran paket ultra-ringan dengan tree-shaking native',
        'Dokumentasi interaktif dengan live playground',
      ],
    },
    {
      id: 'sunda-heritage',
      title: 'Sunda Craft Living Archive',
      category: 'Culture & Web',
      shortDesc: 'Arsip digital keramik Plered kontemporer menggabungkan tradisi kriya Jawa Barat dengan tipografi web modern.',
      fullDesc: 'Sebuah penghormatan digital terhadap warisan kriya keramik Plered, Jawa Barat. Memadukan tipografi display berkelas warisan budaya dengan katalog 3D interaktif yang menceritakan proses kriya tanah liat dari masa ke masa.',
      image: '/src/assets/images/project_glass_ui_1793196373170.jpg',
      tags: ['Cultural Heritage', 'Editorial Web', 'Three.js Concept', 'Storytelling'],
      status: 'In Development',
      progress: 70,
      expectedDate: 'Februari 2027',
      highlights: [
        'Editorial layout bergaya monograf visual museum',
        'Katalog artefak keramik resolusi tinggi dengan zoom mikro',
        'Dukungan dwibahasa (Bahasa Indonesia & English)',
        'Optimasi gambar responsif dengan WebP format',
      ],
    },
  ];

  const categories = ['All', 'Web App', 'Creative UI', 'Design System', 'Culture & Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03. KARYA DALAM PENGEMBANGAN</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Portofolio &amp; Eksplorasi Digital
            </h2>
            <p className="text-sm text-slate-700 mt-2 max-w-xl">
              Koleksi proyek terpilih yang sedang dikembangkan secara aktif dengan standar produksi
              tertinggi. Pratinjau sneak peek dapat diakses secara interaktif.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#DB5184] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {cat === 'All' ? 'Semua Proyek' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Interactive Hover & Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setActiveProject(project)}
              className="group relative glass-panel rounded-3xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#DB5184]/50 hover:shadow-2xl hover:shadow-[#DB5184]/20"
            >
              {/* Subtle Shimmer Sheen on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              <div>
                {/* Image Container with Coming Soon Badge */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-100/60 border border-white/80 shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/25 text-white text-[11px] font-mono font-medium">
                      {project.category}
                    </span>

                    {/* Coming Soon Glowing Status Indicator */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#DB5184]/90 backdrop-blur-md text-white text-[11px] font-semibold shadow-sm border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Bottom Image Progress Bar */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <div className="flex items-center justify-between text-white text-xs font-mono mb-1.5 drop-shadow-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#A8E088]" />
                        <span>Estimasi: {project.expectedDate}</span>
                      </span>
                      <span className="font-bold text-[#A8E088]">{project.progress}%</span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-1.5 bg-white/30 backdrop-blur-sm rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-[#A8E088] to-[#DB5184] rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#DB5184] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-slate-700 group-hover:bg-[#DB5184] group-hover:text-white transition-all shrink-0 shadow-xs">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {project.shortDesc}
                </p>
              </div>

              {/* Bottom Tags & Action */}
              <div className="pt-4 border-t border-slate-900/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/60 text-slate-700 border border-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#DB5184] group-hover:translate-x-0.5 transition-transform">
                  <span>Intip Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner for Inquiries */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-card flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/90">
          <div>
            <h4 className="font-serif font-bold text-lg text-slate-900 mb-1">
              Punya ide proyek atau konsep digital yang ingin diwujudkan?
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              Saya siap merancang dan membangun antarmuka web interaktif yang disesuaikan khusus untuk brand Anda.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#DB5184] hover:bg-[#c43f71] text-white text-xs font-semibold shadow-md transition-all hover:scale-103 whitespace-nowrap shrink-0"
          >
            Konsultasikan Sekarang
          </a>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
