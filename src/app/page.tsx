'use client';

import { Box } from '@mui/material';
import { HeroSection } from './components/HeroSection';
import { ParticlesBackground } from './components/ParticlesBackground';

export default function Home() {
  return (
    <Box>
      <ParticlesBackground />
      <main>
        <HeroSection />
      </main>
    </Box>
  );
}
