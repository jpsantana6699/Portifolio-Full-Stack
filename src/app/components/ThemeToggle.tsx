'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

export const themeInitScript = `try{if(localStorage.getItem('${STORAGE_KEY}')==='light'){document.documentElement.dataset.theme='light'}}catch(e){}`;

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      return;
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? t('themeLight') : t('themeDark')}
      title={theme === 'dark' ? t('themeLight') : t('themeDark')}
      className={`rounded-lg p-2 text-muted transition-colors hover:text-paper ${className}`}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
