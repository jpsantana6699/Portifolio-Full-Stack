'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Spotlight } from './Spotlight';

const ease = [0.16, 1, 0.3, 1] as const;

type PageHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHeader({ label, title, subtitle, children }: PageHeaderProps) {
  return (
    <Spotlight className="px-4 pb-16 pt-40 md:pb-20 md:pt-48">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="label text-accent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {label}
        </motion.p>
        <h1 className="mt-5 max-w-4xl overflow-hidden text-4xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
          <motion.span
            className="block"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease, delay: 0.05 }}
          >
            {title}
          </motion.span>
        </h1>
        {subtitle && (
          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </Spotlight>
  );
}
