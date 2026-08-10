'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { HeroSection } from './components/HeroSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

const ParticlesBackground = dynamic(
  () => import('./components/ParticlesBackground').then((mod) => ({ default: mod.ParticlesBackground })),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function Home() {
  return (
    <main>
      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <ParticlesBackground />
        <HeroSection />
      </Box>
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
    </main>
  );
}
