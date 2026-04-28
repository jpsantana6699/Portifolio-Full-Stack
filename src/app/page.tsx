'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { HeroSection } from './components/HeroSection';

const ParticlesBackground = dynamic(
  () => import('./components/ParticlesBackground').then((mod) => ({ default: mod.ParticlesBackground })),
  { 
    ssr: false,
    loading: () => null,
  },
);

export default function Home() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <ParticlesBackground />
      <main>
        <HeroSection />
      </main>
    </Box>
  );
}
