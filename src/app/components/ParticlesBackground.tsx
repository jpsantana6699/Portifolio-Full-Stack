import {
  type Container,
  type ISourceOptions,
} from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import React, { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

export const ParticlesBackground = React.memo(function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    if (container) {
      container.pause();
      requestAnimationFrame(() => container.play());
    }
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: '#0a0a0a' },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: {
            enable: true,
            mode: 'grab',
            parallax: { enable: true, force: 60, smooth: 10 },
          },
          resize: { enable: true, delay: 0.5 },
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 200, links: { opacity: 0.7 } },
        },
      },
      particles: {
        color: { value: '#00d4ff' },
        links: {
          color: '#00d4ff',
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 45,
        },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        zIndex: '0',
      },
      fullScreen: { enable: false },
      motion: { disable: false, reduce: { factor: 4, value: true } },
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
});
