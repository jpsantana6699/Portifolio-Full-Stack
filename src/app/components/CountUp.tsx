'use client';

import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react';

export function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const value = useMotionValue(0);
  const text = useTransform(value, (current) => `${Math.round(current)}${suffix}`);

  useEffect(() => {
    if (!inView) {
      return;
    }
    const controls = animate(value, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, value, to]);

  return <motion.span ref={ref} className="tabular-nums">{text}</motion.span>;
}
