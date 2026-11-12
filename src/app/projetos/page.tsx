'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, CircleCheck, Lock } from 'lucide-react';
import { GitHubIcon } from '../components/BrandIcons';
import { PageHeader } from '../components/PageHeader';
import { TiltCard } from '../components/TiltCard';
import { useLanguage } from '../contexts/LanguageContext';
import { Project, ProjectCategory, categoryLabelKeys, projectFilters, projects } from '../data/projects';

type Filter = 'all' | ProjectCategory;

export default function ProjetosPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <main>
      <PageHeader label={t('workLabel')} title={t('workTitle')} subtitle={t('workSubtitle')}>
        <div className="mt-10 flex flex-wrap gap-2">
          {projectFilters.map((option) => {
            const active = filter === option.value;
            const count = option.value === 'all' ? projects.length : projects.filter((project) => project.category === option.value).length;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${active ? 'border-accent/50 text-paper' : 'border-line text-muted hover:text-paper'}`}
              >
                {active && (
                  <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-accent/15" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">
                  {t(option.labelKey)} <span className="font-mono text-xs text-muted">{count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </PageHeader>

      <section className="overflow-x-clip px-4 pb-28">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={filter}
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <TiltCard className="h-full">
      <article className="flex h-full flex-col">
        <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl border border-line">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-ink/85 px-3 py-1 text-xs">
            {t(categoryLabelKeys[project.category])}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 pt-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
            <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          </div>
          {project.result && (
            <p className="flex items-start gap-2 rounded-xl border border-accent/20 bg-accent/5 p-3 text-sm text-paper/90">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {project.result}
            </p>
          )}
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-paper/70">{tech}</span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-5 pt-2 text-sm">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-1.5 font-medium text-accent">
                {t('viewLive')}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted transition-colors hover:text-paper">
                <GitHubIcon className="h-4 w-4" />
                {t('viewCode')}
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-muted">
                <Lock className="h-3.5 w-3.5" />
                {project.isDemo ? t('demo') : t('privateCode')}
              </span>
            )}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
