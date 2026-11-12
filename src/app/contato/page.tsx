'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '../components/BrandIcons';
import { PageHeader } from '../components/PageHeader';
import { FadeUp } from '../components/Reveal';
import { TiltCard } from '../components/TiltCard';
import { useLanguage } from '../contexts/LanguageContext';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, WHATSAPP_PHONE, WHATSAPP_URL } from '../data/site';

const projectTypes = ['typeSystem', 'typeSite', 'typeData', 'typeOther'];

const inputClass = 'w-full rounded-xl border border-line bg-ink px-4 py-3.5 text-paper outline-none transition-colors placeholder:text-muted/70 focus:border-accent/60 focus:ring-4 focus:ring-accent/10';

export default function ContatoPage() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const lines = [
      `${t('whatsappHello')} ${name}.`,
      ...(projectType ? [`${t('whatsappType')}: ${t(projectType)}`] : []),
      '',
      message,
    ];
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
    <main>
      <PageHeader label={t('contactPageLabel')} title={t('contactPageTitle')} subtitle={t('contactPageDesc')} />

      <section className="px-4 pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
          <FadeUp>
            <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-line bg-ink-2 p-6 md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative space-y-7">
                <label className="block">
                  <span className="mb-2 block text-sm text-paper/80">{t('formName')}</span>
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t('formNamePlaceholder')}
                    className={inputClass}
                  />
                </label>

                <fieldset>
                  <legend className="mb-3 text-sm text-paper/80">{t('formType')}</legend>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const active = projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(active ? '' : type)}
                          aria-pressed={active}
                          className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${active ? 'border-accent/60 text-paper' : 'border-line text-muted hover:text-paper'}`}
                        >
                          {active && (
                            <motion.span layoutId="contact-type" className="absolute inset-0 rounded-full bg-accent/15" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                          )}
                          <span className="relative">{t(type)}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="mb-2 block text-sm text-paper/80">{t('formMessage')}</span>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={t('formMessagePlaceholder')}
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="group relative inline-flex w-full overflow-hidden rounded-full p-px sm:w-fit"
                >
                  <span className="absolute inset-[-200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,var(--color-accent)_85%,transparent_100%)]" />
                  <span className="relative flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-accent-ink">
                    <WhatsAppIcon className="h-5 w-5" />
                    {t('formSend')}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>
              </div>
            </form>
          </FadeUp>

          <div className="flex flex-col gap-4">
            <FadeUp delay={0.1}>
              <p className="label mb-1 text-accent">{t('contactDetails')}</p>
            </FadeUp>
            <ContactCard delay={0.12} href={WHATSAPP_URL} icon={<WhatsAppIcon className="h-5 w-5" />} label="WhatsApp" value="+55 35 99978-8870" />
            <FadeUp delay={0.16}>
              <TiltCard>
                <button type="button" onClick={copyEmail} className="flex w-full items-center gap-4 p-5 text-left">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted">E-mail</span>
                    <span className="block truncate">{copied ? t('copied') : EMAIL}</span>
                  </span>
                  {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4 text-muted" />}
                </button>
              </TiltCard>
            </FadeUp>
            <ContactCard delay={0.2} href={LINKEDIN_URL} icon={<LinkedInIcon className="h-5 w-5" />} label="LinkedIn" value="João Pedro Santana" />
            <ContactCard delay={0.24} href={GITHUB_URL} icon={<GitHubIcon className="h-5 w-5" />} label="GitHub" value="jpsantana6699" />
            <FadeUp delay={0.28}>
              <div className="flex items-center gap-4 rounded-3xl border border-line p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block">{t('heroLocation')}, {t('heroCountry')}</span>
                  <span className="block text-sm text-muted">{t('heroRemote')}</span>
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  );
}

type ContactCardProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
};

function ContactCard({ href, icon, label, value, delay }: ContactCardProps) {
  return (
    <FadeUp delay={delay}>
      <TiltCard>
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-ink text-accent">{icon}</span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm text-muted">{label}</span>
            <span className="block truncate">{value}</span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-muted" />
        </a>
      </TiltCard>
    </FadeUp>
  );
}
