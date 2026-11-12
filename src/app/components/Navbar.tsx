'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { WHATSAPP_URL, navLinks } from '../data/site';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => setScrolled(value > 24));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 ${scrolled || open ? 'border-line bg-ink/95 md:bg-ink/70 md:backdrop-blur-xl' : 'border-transparent bg-transparent'}`}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper font-mono text-sm font-bold text-ink">JP</span>
          <span className="hidden text-sm font-medium sm:block">João Pedro Santana</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm transition-colors ${active ? 'text-paper' : 'text-muted hover:text-paper'}`}
              >
                {active && (
                  <motion.span layoutId="nav-active" className="absolute inset-0 rounded-lg bg-tint/[0.06]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                )}
                <span className="relative">{t(link.labelKey)}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg px-3 py-2 font-mono text-xs text-muted transition-colors hover:text-paper"
          >
            {t('languageSwitch')}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent sm:flex"
          >
            {t('navCta')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t('menu')}
            aria-expanded={open}
            className="rounded-lg p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-line bg-ink md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block border-b border-line px-5 py-4 text-lg last:border-0 ${pathname === link.href ? 'text-paper' : 'text-muted'}`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-4 text-lg text-accent">
              {t('navCta')}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
