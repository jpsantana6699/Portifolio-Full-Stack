'use client';

import { ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import { FINE_POINTER, useMediaQuery } from './useMediaQuery';

const spring = { stiffness: 200, damping: 20 };

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const finePointer = useMediaQuery(FINE_POINTER);

  if (!finePointer) {
    return (
      <div className={`h-full rounded-3xl bg-line p-px ${className}`}>
        <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink-2">{children}</div>
      </div>
    );
  }

  return <InteractiveTilt className={className}>{children}</InteractiveTilt>;
}

function InteractiveTilt({ children, className }: TiltCardProps) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), spring);
  const glowX = useTransform(px, (value) => `${value * 100}%`);
  const glowY = useTransform(py, (value) => `${value * 100}%`);
  const border = useMotionTemplate`radial-gradient(240px circle at ${glowX} ${glowY}, rgb(34 195 230 / 0.7), transparent 60%)`;
  const shine = useMotionTemplate`radial-gradient(400px circle at ${glowX} ${glowY}, color-mix(in srgb, var(--color-tint) 6%, transparent), transparent 50%)`;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-full rounded-3xl p-px"
      >
        <div className="absolute inset-0 rounded-3xl bg-line" />
        <motion.div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: border }} />
        <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink-2">
          <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: shine }} />
          <div className="relative h-full" style={{ transform: 'translateZ(30px)' }}>{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
