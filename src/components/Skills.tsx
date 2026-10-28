import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Sparkles, Cpu, Layers, CheckCircle } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'core' | 'framework' | 'styling' | 'tooling';
  level: string;
  desc: string;
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'framework' | 'styling' | 'tooling'>('all');

  const techStack: TechItem[] = [
    {
      name: 'React 19',
      category: 'framework',
      level: 'Advanced',
      desc: 'Server Components, Action hooks, Concurrent rendering, state orchestration',
    },
    {
      name: 'TypeScript',
      category: 'core',
      level: 'Advanced',
      desc: 'Strict type safety, generics, comprehensive interfaces, robust error prevention',
    },
    {
      name: 'Framer Motion',
      category: 'styling',
      level: 'Specialist',
      desc: 'Physics-based springs, stagger sequences, 3D tilt transformations, gesture drag',
    },
    {
      name: 'Tailwind CSS v4',
      category: 'styling',
      level: 'Mastery',
      desc: 'Modern zero-runtime engine, glassmorphic filters, responsive utility mastery',
    },
    {
      name: 'Glassmorphism UI',
      category: 'styling',
      level: 'Specialist',
      desc: 'Layered backdrop filters, translucent borders, ambient glow and depth hierarchy',
    },
    {
      name: 'Next.js & Vite',
      category: 'framework',
      level: 'Advanced',
      desc: 'High-speed bundling, SSR/SSG workflows, asset optimization pipelines',
    },
    {
      name: 'JavaScript ESNext',
      category: 'core',
      level: 'Advanced',
      desc: 'Modern asynchronous patterns, DOM manipulation, functional paradigms',
    },
    {
      name: 'Responsive Layouts',
      category: 'core',
      level: 'Mastery',
      desc: 'Fluid CSS Grid, Flexbox, touch-first ergonomics, zero overflow integrity',
    },
    {
      name: 'Web Performance',
      category: 'tooling',
      level: 'Advanced',
      desc: 'Lighthouse audits, cumulative layout shift elimination, compositor-only animations',
    },
    {
      name: 'Git & Version Control',
      category: 'tooling',
      level: 'Advanced',
      desc: 'Semantic commits, branch workflows, collaborative PR reviews',
    },
    {
      name: 'WCAG AA Accessibility',
      category: 'core',
      level: 'Dedicated',
      desc: 'Semantic HTML, ARIA landmarks, keyboard focus management, reduced-motion fallback',
    },
    {
      name: 'REST & API Integration',
      category: 'framework',
      level: 'Advanced',
      desc: 'Fetch architecture, optimistic UI updates, error boundary handling',
    },
  ];

  const filteredTech = selectedCategory === 'all'
    ? techStack
    : techStack.filter((t) => t.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Semua Keahlian' },
    { id: 'core', label: 'Core Web' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'styling', label: 'Motion & Styling' },
    { id: 'tooling', label: 'Performance & Tools' },
  ] as const;

  return (
    <section id="skills" className="py-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>02. ARSENAL TEKNOLOGI</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Keahlian Teknis &amp; Standar Pengerjaan
            </h2>
          </div>

          {/* Functional Category Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#DB5184] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredTech.map((item, idx) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl p-5 flex flex-col justify-between group hover:border-[#DB5184]/40 hover:bg-white/75 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#DB5184] font-semibold">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/70 text-slate-600 border border-white/80">
                    {item.level}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-1 group-hover:text-[#DB5184] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Production Ready</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
