'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Spotlight } from './components/Spotlight';
import { useLanguage } from './contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main>
      <Spotlight className="flex min-h-svh items-center px-4">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-mono text-[28vw] font-semibold leading-none tracking-tighter text-paper/10 md:text-[16rem]">404</p>
          <h1 className="-mt-6 text-3xl font-semibold tracking-tight md:-mt-12 md:text-5xl">{t('notFoundTitle')}</h1>
          <Link
            href="/"
            className="group mt-10 inline-flex items-center gap-2 rounded-full border border-line bg-ink-2 px-6 py-3.5 font-medium transition-colors hover:border-accent/50"
          >
            <ArrowLeft className="h-4 w-4 text-accent transition-transform group-hover:-translate-x-0.5" />
            {t('notFoundBack')}
          </Link>
        </div>
      </Spotlight>
    </main>
  );
}
