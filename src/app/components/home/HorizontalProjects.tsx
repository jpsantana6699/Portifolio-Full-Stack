'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, CircleCheck } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { categoryLabelKeys, projects } from '../../data/projects';
import { TiltCard } from '../TiltCard';

const featured = projects.filter((project) => project.featured);

export function HorizontalProjects() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (track) {
        setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} style={{ height: `${featured.length * 70 + 60}vh` }} className="relative">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden pt-20">
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between gap-6 px-4">
          <div>
            <p className="label text-accent">{t('workLabel')}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t('workHomeTitle')}</h2>
          </div>
          <Link href="/projetos" className="group hidden items-center gap-2 text-sm text-muted transition-colors hover:text-paper md:flex">
            {t('moreWork')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="mt-12 flex w-max gap-6 px-4 md:px-[max(1rem,calc((100vw-72rem)/2+1rem))]">
          {featured.map((project, index) => (
            <TiltCard key={project.slug} className="w-[85vw] shrink-0 md:w-[480px]">
              <article className="flex h-full flex-col">
                <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                  <Image src={project.image} alt={project.title} fill sizes="480px" className="object-cover object-top" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 pt-3">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="font-mono">0{index + 1}</span>
                    <span>{t(categoryLabelKeys[project.category])}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  {project.result && (
                    <p className="flex items-start gap-2 text-sm text-paper/80">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {project.result}
                    </p>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-auto flex w-fit items-center gap-1.5 text-sm font-medium text-accent">
                      {t('viewLive')}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            </TiltCard>
          ))}
        </motion.div>

        <div className="mx-auto mt-12 w-full max-w-6xl px-4">
          <div className="h-px w-full bg-line">
            <motion.div style={{ scaleX: progress }} className="h-px origin-left bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
