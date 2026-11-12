'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { yearsOfExperience } from '../../data/site';
import { CountUp } from '../CountUp';
import { FadeUp } from '../Reveal';
import { TiltCard } from '../TiltCard';

const systemsInProduction = projects.filter((project) => project.category === 'sistema' && project.featured).length;
const companySites = projects.filter((project) => project.category === 'site').length;

const milestones = [
  { year: '2023', titleKey: 'dataAnalystTitle' },
  { year: '2023', titleKey: 'backendTitle' },
  { year: '2024', titleKey: 'fullstackTitle' },
  { yearKey: 'today', titleKey: 'milestoneToday' },
];

export function ExperienceProof() {
  const { t } = useLanguage();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 65%'] });

  const stats = [
    { value: yearsOfExperience(), suffix: '+', labelKey: 'statYears' },
    { value: systemsInProduction, labelKey: 'statSystems' },
    { value: companySites, labelKey: 'statSites' },
    { value: milestones.length - 1, labelKey: 'statRoles' },
  ];

  return (
    <section className="px-4 pb-28 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-3xl">
          <p className="label text-accent">{t('experience')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t('experienceTitle')}</h2>
          <p className="mt-4 text-muted">{t('experienceDesc')}</p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeUp key={stat.labelKey} delay={index * 0.06}>
              <TiltCard className="h-full">
                <div className="p-6">
                  <p className="text-4xl font-semibold tracking-tight text-paper md:text-5xl">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{t(stat.labelKey)}</p>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>

        <ol ref={ref} className="relative mt-14 grid gap-8 pt-8 md:grid-cols-4 md:gap-6">
          <span className="absolute inset-x-0 top-0 hidden h-px bg-line md:block" />
          <motion.span style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 top-0 hidden h-px origin-left bg-accent md:block" />
          {milestones.map((milestone, index) => (
            <li key={milestone.titleKey} className="relative">
              <FadeUp delay={index * 0.08}>
                <span
                  className={`absolute -top-[37px] hidden h-[11px] w-[11px] rounded-full border-2 md:block ${index === milestones.length - 1 ? 'border-accent bg-accent shadow-[0_0_16px_rgb(34_195_230/0.6)]' : 'border-line bg-ink'}`}
                />
                <p className="font-mono text-xs text-accent">{milestone.yearKey ? t(milestone.yearKey) : milestone.year}</p>
                <p className="mt-2 font-medium text-paper">{t(milestone.titleKey)}</p>
              </FadeUp>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
