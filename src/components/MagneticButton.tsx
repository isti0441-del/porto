import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass';
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  variant = 'primary',
  href,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Calculate distance with gentle constraint
    const deltaX = (clientX - centerX) * 0.22;
    const deltaY = (clientY - centerY) * 0.22;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      'bg-[#DB5184] text-white hover:bg-[#c93f72] shadow-lg shadow-[#DB5184]/25 hover:shadow-xl hover:shadow-[#DB5184]/40 border border-white/20',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/15 border border-white/10',
    glass:
      'bg-white/40 hover:bg-white/70 text-slate-800 backdrop-blur-md border border-white/60 shadow-sm hover:border-[#DB5184]/40',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.15 }}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
      className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block border-none bg-transparent p-0 cursor-pointer">
      {content}
    </button>
  );
};
