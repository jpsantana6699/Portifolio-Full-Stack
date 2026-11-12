'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FadeUp } from '../Reveal';

const steps = [1, 2, 3, 4];

export function Process() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 60%'] });

  return (
    <section className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <p className="label text-accent">{t('processLabel')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t('processTitle')}</h2>
        </FadeUp>

        <div ref={ref} className="relative mt-14">
          <div className="absolute inset-x-0 top-0 h-px bg-line" />
          <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 top-0 h-px origin-left bg-accent" />
          <ol className="grid gap-10 pt-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <li key={step}>
                <FadeUp delay={index * 0.1}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-ink-2 font-mono text-xs text-accent">0{step}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{t(`step${step}Title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(`step${step}Desc`)}</p>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
