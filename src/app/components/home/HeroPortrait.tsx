'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { FINE_POINTER, useMediaQuery } from '../useMediaQuery';

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroPortrait({ children }: { children?: ReactNode }) {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, 120]);
  const finePointer = useMediaQuery(FINE_POINTER);

  return (
    <div className="relative mx-auto h-[62svh] w-full max-w-md md:h-[86svh] md:max-w-none">
      <motion.div
        className="absolute inset-x-0 bottom-0 top-[8%] bg-[radial-gradient(ellipse_at_center,rgb(34_195_230/0.22),transparent_65%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
      />
      <motion.div className="absolute inset-0" style={{ y: finePointer ? photoY : 0 }}>
        <motion.div
          className="portrait-fade absolute inset-0"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.25 }}
        >
          <Image
            src="/images/jp-retrato.webp"
            alt="João Pedro Santana"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className="object-contain object-bottom brightness-[0.9] saturate-[0.9]"
          />
          <div className="portrait-shape absolute inset-0 bg-[linear-gradient(110deg,rgb(34_195_230/0.35),transparent_45%)] mix-blend-soft-light pointer-coarse:hidden" />
        </motion.div>
      </motion.div>
      {children}
    </div>
  );
}
