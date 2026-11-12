'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import { MotionConfig } from 'motion/react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
