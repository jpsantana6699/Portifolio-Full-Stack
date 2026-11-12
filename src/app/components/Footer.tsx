'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { EMAIL, WHATSAPP_URL, navLinks, socialLinks } from '../data/site';
import { FadeUp } from './Reveal';

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const lenis = useLenis();
  const [copied, setCopied] = useState(false);
  const showCta = pathname !== '/contato';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer className="px-4 pb-6">
      {showCta && (
        <FadeUp className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-ink-2 px-6 py-16 text-center md:py-24">
          <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">{t('ctaBandTitle')}</h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">{t('ctaBandDesc')}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                {t('ctaPrimary')}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-xl border border-line px-6 py-3.5 text-sm transition-colors hover:border-paper/40"
              >
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                {copied ? t('copied') : EMAIL}
              </button>
            </div>
          </div>
        </FadeUp>
      )}

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 border-t border-line px-2 pt-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper font-mono text-sm font-bold text-ink">JP</span>
            <span className="font-medium">João Pedro Santana</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted">{t('footerTagline')}</p>
        </div>
        <FooterColumn title={t('footerNav')}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-paper">
              {t(link.labelKey)}
            </Link>
          ))}
        </FooterColumn>
        <FooterColumn title={t('socials')}>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted transition-colors hover:text-paper">
              {social.label}
            </a>
          ))}
        </FooterColumn>
        <FooterColumn title={t('localTime')}>
          <LocalTime />
          <p className="text-sm text-muted">{t('heroLocation')}</p>
        </FooterColumn>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between px-2 text-xs text-muted">
        <p>© {new Date().getFullYear()} João Pedro Santana</p>
        <button type="button" onClick={() => lenis?.scrollTo(0, { duration: 1.4 })} className="flex items-center gap-1.5 hover:text-paper">
          {t('backToTop')}
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="label text-paper/60">{title}</p>
      {children}
    </div>
  );
}

function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  return <p className="text-sm tabular-nums">{time || '--:--'} · GMT-3</p>;
}
