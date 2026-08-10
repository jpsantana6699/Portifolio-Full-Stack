'use client';

import { CacheProvider } from '@emotion/react';
import type { EmotionCache, Options as CacheOptions } from '@emotion/cache';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

/**
 * Registro de cache do Emotion para o App Router do Next.js.
 * Garante que os estilos gerados no servidor (SSR) sejam injetados na
 * mesma ordem no cliente, evitando o erro de "Hydration failed" do MUI.
 * Baseado no exemplo oficial da MUI (sem depender do @mui/material-nextjs,
 * que ainda não suporta o Next 16 no peer range).
 */
export function EmotionRegistry({ children }: { children: React.ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const options: CacheOptions = { key: 'mui', prepend: true };
    const cache: EmotionCache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
