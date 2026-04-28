import Particles, { initParticlesEngine } from '@tsparticles/react';
import React, { useEffect, useMemo, useState } from 'react';
import type { Container } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { loadImageShape } from '@tsparticles/shape-image';

export const ParticlesContatoBackground = React.memo(function ParticlesContatoBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      await loadImageShape(engine);
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

  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: '#000000' },
      },
      clear: true,
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window' as const,
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
          resize: { delay: 0.5, enable: true },
        },
      },
      particles: {
        color: { value: '#fff' },
        move: {
          direction: 'right' as const,
          enable: true,
          outModes: { default: 'out' as const },
          speed: 5,
          straight: false,
        },
        number: {
          density: { enable: false },
          value: 200,
        },
        opacity: { value: 1 },
        shape: { type: 'circle' as const },
        size: { value: 3 },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      emitters: {
        autoPlay: true,
        fill: true,
        life: { wait: false },
        rate: { quantity: 1, delay: 7 },
        shape: { options: {}, replace: { color: false, opacity: false }, type: 'square' },
        startCount: 0,
        size: { mode: 'percent' as const, height: 0, width: 0 },
        particles: {
          shape: {
            type: 'image',
            options: {
              image: {
                src: '/images/cyan_amongus.png',
                width: 500,
                height: 634,
              },
            },
          },
          size: { value: 40 },
          move: {
            speed: 10,
            outModes: { default: 'none' as const, right: 'destroy' as const },
            straight: true,
          },
          zIndex: { value: 0 },
          rotate: {
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 10, sync: true },
          },
        },
        position: { x: -5, y: 55 },
      },
      motion: { disable: false, reduce: { factor: 4, value: true } },
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-contato"
      particlesLoaded={particlesLoaded}
      options={options as any}
      style={{ width: '100vw', height: '100vh', position: 'absolute', inset: 0 }}
    />
  );
});
