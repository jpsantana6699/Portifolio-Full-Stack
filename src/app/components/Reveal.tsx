'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';

type RevealWordsProps = {
  text: string;
  highlight?: string;
  className?: string;
};

export function RevealWords({ text, highlight, className = '' }: RevealWordsProps) {
  const highlightWords = new Set(highlight?.toLowerCase().split(' ') ?? []);

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ staggerChildren: 0.02 }}
    >
      {text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-top">
          <motion.span
            className={`inline-block ${highlightWords.has(word.toLowerCase().replace(/[.,]/g, '')) ? 'text-accent' : ''}`}
            variants={{ hidden: { y: '110%' }, visible: { y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
