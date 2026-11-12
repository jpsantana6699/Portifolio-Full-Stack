'use client';

import { useEffect, useState } from 'react';

export const FINE_POINTER = '(hover: hover) and (pointer: fine)';
export const DESKTOP = `${FINE_POINTER} and (min-width: 768px)`;

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}
