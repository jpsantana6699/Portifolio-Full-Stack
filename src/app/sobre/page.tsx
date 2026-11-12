'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'motion/react';
import { BarChart3, Bot, Database, Download, Layout, Server, Wrench } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { FadeUp } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';
import { useLanguage } from '../contexts/LanguageContext';
import { CV_URL, yearsOfExperience } from '../data/site';

const stages = [
  { titleKey: 'fullstackTitle', periodKey: 'fullstackPeriod', descKey: 'fullstackDesc', current: true },
  { titleKey: 'backendTitle', periodKey: 'backendPeriod', descKey: 'backendDesc' },
  { titleKey: 'dataAnalystTitle', periodKey: 'dataAnalystPeriod', descKey: 'dataAnalystDesc' },
  { titleKey: 'previousTitle', periodKey: 'previousPeriod', descKey: 'previousDesc' },
];

const stackGroups = [
  { labelKey: 'stackBack', icon: Server, items: ['Node.js', 'TypeScript', 'Express', 'Zod', 'APIs REST', 'JWT', 'Java', 'Python'] },
  { labelKey: 'stackFront', icon: Layout, items: ['React', 'Next.js', 'React Query', 'Tailwind', 'Motion', 'Material-UI'] },
  { labelKey: 'stackDb', icon: Database, items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Sequelize', 'Prisma'] },
  { labelKey: 'stackAutomation', icon: Bot, items: ['Playwright', 'Puppeteer', 'Selenium', 'Web Scraping'] },
  { labelKey: 'stackData', icon: BarChart3, items: ['Power BI', 'SQL', 'DAX', 'ETL', 'Excel'] },
  { labelKey: 'stackTools', icon: Wrench, items: ['Git/GitHub', 'Docker', 'Swagger', 'Postman', 'Jest', 'ESLint'] },
];

export default function SobrePage() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 60%'] });

  return (
    <main>
      <PageHeader
        label={t('aboutLabel')}
        title={t('aboutTitle')}
        subtitle={t('aboutSubtitle').replace('{years}', String(yearsOfExperience()))}
      />

      <section className="px-4 pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <FadeUp className="mx-auto w-full max-w-sm md:sticky md:top-32 md:self-start">
            <TiltCard>
              <div className="relative m-2 aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-[radial-gradient(ellipse_at_50%_70%,rgb(34_195_230/0.25),transparent_70%)]">
                <Image src="/images/jp-retrato.webp" alt="João Pedro Santana" fill sizes="384px" className="object-contain object-bottom" />
              </div>
              <div className="px-5 pb-5 pt-3">
                <p className="font-semibold">João Pedro Santana</p>
                <p className="text-sm text-muted">{t('heroRole')}</p>
                <p className="mt-1 text-sm text-muted">{t('heroLocation')} · {t('heroRemoteShort')}</p>
              </div>
            </TiltCard>
          </FadeUp>

          <div className="space-y-6 text-lg leading-relaxed text-paper/80">
            {['storyPart1', 'storyPart2', 'storyPart3'].map((key, index) => (
              <FadeUp key={key} delay={index * 0.08}>
                <p>{t(key)}</p>
              </FadeUp>
            ))}
            <FadeUp delay={0.3} className="pt-4">
              <a
                href={CV_URL}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink-2 px-6 py-3.5 text-base font-medium transition-colors hover:border-accent/50"
              >
                <Download className="h-4 w-4 text-accent transition-transform group-hover:translate-y-0.5" />
                {t('downloadCv')}
              </a>
            </FadeUp>

            <div className="pt-16">
              <FadeUp>
                <p className="label text-accent">{t('experience')}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-paper md:text-4xl">Lev Negócios</h2>
                <p className="mt-1 text-base text-muted">{t('levPeriod')}</p>
              </FadeUp>

              <ol ref={timelineRef} className="relative mt-10 space-y-10 pl-8">
                <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />
                <motion.span style={{ scaleY: scrollYProgress }} className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-accent" />
                {stages.map((stage) => (
                  <li key={stage.titleKey} className="relative">
                    <span
                      className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 ${stage.current ? 'border-accent bg-accent shadow-[0_0_16px_rgb(34_195_230/0.6)]' : 'border-line bg-ink'}`}
                    />
                    <FadeUp>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-xl font-semibold text-paper">{t(stage.titleKey)}</h3>
                        <span className="font-mono text-xs text-muted">{t(stage.periodKey)}</span>
                      </div>
                      <p className="mt-2 text-base text-muted">{t(stage.descKey)}</p>
                    </FadeUp>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-28">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <p className="label text-accent">{t('stack')}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t('orbitTitle')}</h2>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map(({ labelKey, icon: Icon, items }, index) => (
              <FadeUp key={labelKey} delay={index * 0.06}>
                <TiltCard className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-semibold">{t(labelKey)}</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span key={item} className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-paper/75">{item}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
