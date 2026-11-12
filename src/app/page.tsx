import { ExperienceProof } from './components/home/ExperienceProof';
import { OrbitStack } from './components/home/OrbitStack';
import { Process } from './components/home/Process';
import { ProjectsTeaser } from './components/home/ProjectsTeaser';
import { ServicesTilt } from './components/home/ServicesTilt';
import { SpotlightHero } from './components/home/SpotlightHero';

export default function Home() {
  return (
    <main>
      <SpotlightHero />
      <ServicesTilt />
      <ExperienceProof />
      <ProjectsTeaser />
      <Process />
      <OrbitStack />
    </main>
  );
}
