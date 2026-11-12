'use client';

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

const spring = { stiffness: 150, damping: 15, mass: 0.1 };

export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className ?? 'inline-block'}
    >
      {children}
    </motion.div>
  );
}
