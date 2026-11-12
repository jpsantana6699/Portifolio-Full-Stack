'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { FadeUp } from '../Reveal';

const rings = [
  { size: 260, duration: 28, items: ['Node.js', 'TypeScript', 'React', 'Next.js'] },
  { size: 420, duration: 40, items: ['SQL Server', 'MySQL', 'Docker', 'Playwright', 'Power BI', 'Express'] },
  { size: 580, duration: 56, items: ['Tailwind', 'Zod', 'Sequelize', 'Python', 'Git', 'Swagger', 'Puppeteer', 'React Query'] },
];

export function OrbitStack() {
  const { t } = useLanguage();

  return (
    <section className="overflow-hidden px-4 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.2fr]">
        <FadeUp>
          <p className="label text-accent">{t('stack')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t('orbitTitle')}</h2>
          <p className="mt-4 max-w-md text-muted">{t('orbitDesc')}</p>
        </FadeUp>

        <div className="relative mx-auto aspect-square w-full max-w-[580px] scale-[0.62] sm:scale-90 md:scale-100">
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-accent/40 bg-ink-2 font-mono text-2xl font-bold shadow-[0_0_80px_rgb(34_195_230/0.25)]">
            JP
          </div>
          {rings.map((ring, ringIndex) => (
            <div
              key={ring.size}
              className="absolute left-1/2 top-1/2 rounded-full border border-line"
              style={{
                width: ring.size,
                height: ring.size,
                marginLeft: -ring.size / 2,
                marginTop: -ring.size / 2,
                animation: `orbit ${ring.duration}s linear infinite ${ringIndex % 2 ? 'reverse' : ''}`,
              }}
            >
              {ring.items.map((item, index) => {
                const angle = (index / ring.items.length) * 360;
                return (
                  <div
                    key={item}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `rotate(${angle}deg) translateY(-${ring.size / 2}px)` }}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <span
                        className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-ink-2 px-3 py-1.5 font-mono text-xs text-paper/80"
                        style={{ animation: `orbit ${ring.duration}s linear infinite ${ringIndex % 2 ? '' : 'reverse'}` }}
                      >
                        {item}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
