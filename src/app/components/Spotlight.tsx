'use client';

import { ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';

type SpotlightProps = {
  children: ReactNode;
  className?: string;
};

const spring = { stiffness: 120, damping: 20 };

export function Spotlight({ children, className = '' }: SpotlightProps) {
  const x = useSpring(useMotionValue(30), spring);
  const y = useSpring(useMotionValue(40), spring);
  const mask = useMotionTemplate`radial-gradient(300px circle at ${x}% ${y}%, #000 0%, transparent 100%)`;
  const glow = useMotionTemplate`radial-gradient(600px circle at ${x}% ${y}%, rgb(34 195 230 / 0.2), transparent 60%)`;
  const sheen = useMotionTemplate`radial-gradient(380px circle at ${x}% ${y}%, rgb(34 195 230 / 0.12), transparent 70%)`;

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section onMouseMove={handleMove} className={`relative overflow-hidden ${className}`}>
      <div className="bg-dots absolute inset-0 opacity-[0.15]" />
      <motion.div className="bg-dots absolute inset-0 opacity-90 pointer-coarse:hidden" style={{ maskImage: mask, WebkitMaskImage: mask }} />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
      <div className="relative w-full">{children}</div>
      <motion.div className="pointer-events-none absolute inset-0 mix-blend-screen pointer-coarse:hidden" style={{ background: sheen }} />
    </section>
  );
}
