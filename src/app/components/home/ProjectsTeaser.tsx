'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';
import { FadeUp } from '../Reveal';

const previews = projects.filter((project) => project.featured).slice(0, 4);

export function ProjectsTeaser() {
  const { t } = useLanguage();

  return (
    <section className="px-4 pb-28 md:pb-36">
      <FadeUp className="mx-auto max-w-6xl">
        <Link
          href="/projetos"
          className="group flex flex-col items-start gap-6 rounded-3xl border border-line bg-ink-2 p-6 transition-colors hover:border-accent/50 sm:flex-row sm:items-center md:p-8"
        >
          <div className="flex -space-x-4">
            {previews.map((project, index) => (
              <div
                key={project.slug}
                className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-ink-2 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 md:h-20 md:w-20"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image src={project.image} alt={project.title} fill sizes="80px" className="object-cover object-top" />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold tracking-tight md:text-2xl">
              {t('teaserTitle').replace('{count}', String(projects.length))}
            </p>
            <p className="mt-1 text-sm text-muted">{t('teaserDesc')}</p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </FadeUp>
    </section>
  );
}
