import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const SpotlightFollower: React.FC = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none -z-5 w-[650px] h-[650px] rounded-full hidden md:block"
      style={{
        left: smoothX,
        top: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(219, 81, 132, 0.12) 35%, transparent 70%)',
        filter: 'blur(30px)',
      }}
    />
  );
};
