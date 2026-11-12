import { Process } from './components/home/Process';
import { ExperienceProof } from './components/home/ExperienceProof';
import { HorizontalProjects } from './components/home/HorizontalProjects';
import { OrbitStack } from './components/home/OrbitStack';
import { ServicesTilt } from './components/home/ServicesTilt';
import { SpotlightHero } from './components/home/SpotlightHero';

export default function Home() {
  return (
    <main>
      <SpotlightHero />
      <ServicesTilt />
      <ExperienceProof />
      <Process />
      <HorizontalProjects />
      <OrbitStack />
    </main>
  );
}
