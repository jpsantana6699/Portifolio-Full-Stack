'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, BriefcaseBusiness, CircleCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { WHATSAPP_URL, yearsOfExperience } from '../../data/site';
import { BeamButton } from '../BeamButton';
import { Spotlight } from '../Spotlight';
import { HeroPortrait } from './HeroPortrait';

const ease = [0.16, 1, 0.3, 1] as const;

export function SpotlightHero() {
  const { t } = useLanguage();
  const words = t('rotateWords').split('|');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((value) => value + 1), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <Spotlight className="flex min-h-svh items-end px-4 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-6 md:grid-cols-[1.25fr_1fr] md:gap-4">
        <div className="md:self-center md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            {t('heroLocation')} · {t('heroRemoteShort')}
          </motion.p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            {['João Pedro', 'Santana'].map((line, index) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${index === 1 ? 'text-paper/40' : ''}`}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.1 + index * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2 text-sm"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t('heroRole')}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-paper">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-accent" />
              {t('heroExperience').replace('{years}', String(yearsOfExperience()))}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-baseline gap-x-3 text-2xl font-medium tracking-tight md:text-4xl"
          >
            <span className="text-muted">{t('rotatePrefix')}</span>
            <span className="relative inline-flex h-[1.2em] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={wordIndex}
                  className="text-accent"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  {words[wordIndex % words.length]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <BeamButton href={WHATSAPP_URL}>{t('ctaPrimary')}</BeamButton>
            <Link href="/projetos" className="group flex items-center gap-2 px-2 text-sm text-muted transition-colors hover:text-paper">
              {t('ctaSecondary')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted"
          >
            {['trustCompany', 'trustProduction', 'trustEndToEnd'].map((key) => (
              <li key={key} className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-accent" />
                {t(key)}
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroPortrait>
          <motion.div
            className="absolute bottom-[14%] left-0 flex items-center gap-2 rounded-full border border-tint/10 bg-ink/80 px-4 py-2.5 text-sm backdrop-blur md:-left-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t('heroAvailable')}
          </motion.div>
        </HeroPortrait>
      </div>
    </Spotlight>
  );
}
