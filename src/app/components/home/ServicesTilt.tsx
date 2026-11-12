'use client';

import { BadgeCheck, Bot, ChartColumn, Globe, Server } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FadeUp } from '../Reveal';
import { TiltCard } from '../TiltCard';

const services = [
  { icon: Server, titleKey: 'serviceSystemsTitle', descKey: 'serviceSystemsDesc', offerKey: 'serviceSystemsOffer' },
  { icon: Globe, titleKey: 'serviceSitesTitle', descKey: 'serviceSitesDesc', offerKey: 'serviceSitesOffer' },
  { icon: Bot, titleKey: 'serviceAutomationTitle', descKey: 'serviceAutomationDesc' },
  { icon: ChartColumn, titleKey: 'serviceDataTitle', descKey: 'serviceDataDesc', offerKey: 'serviceDataOffer' },
];

export function ServicesTilt() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="max-w-2xl">
          <p className="label text-accent">{t('servicesLabel')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t('servicesTitle')}</h2>
        </FadeUp>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, titleKey, descKey, offerKey }, index) => (
            <FadeUp key={titleKey} delay={index * 0.08}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col gap-5 p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-ink text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(titleKey)}</h3>
                  <p className="text-muted">{t(descKey)}</p>
                  {offerKey && (
                    <p className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {t(offerKey)}
                    </p>
                  )}
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
