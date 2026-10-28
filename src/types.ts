export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web App' | 'Creative UI' | 'Design System' | 'Culture & Web';
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  status: 'Coming Soon' | 'In Development' | 'Alpha Preview';
  progress: number;
  expectedDate: string;
  highlights: string[];
  demoUrl?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
  }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'services' | 'contact';

