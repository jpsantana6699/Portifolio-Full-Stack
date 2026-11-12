'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'motion/react';
import { Project } from '../data/projects';

type ProjectMediaProps = {
  project: Project;
  sizes: string;
  className?: string;
};

export function ProjectMedia({ project, sizes, className = '' }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { margin: '0px 0px -10% 0px' });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    if (inView) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView]);

  if (!project.video) {
    return <Image src={project.image} alt={project.title} fill sizes={sizes} className={`object-cover object-top ${className}`} />;
  }

  return (
    <video
      ref={videoRef}
      src={project.video}
      poster={project.image}
      muted
      loop
      playsInline
      preload="none"
      aria-label={project.title}
      className={`absolute inset-0 h-full w-full object-cover object-top ${className}`}
    />
  );
}
