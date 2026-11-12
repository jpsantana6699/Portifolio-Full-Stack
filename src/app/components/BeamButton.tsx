import { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BeamButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex w-fit overflow-hidden rounded-full p-px"
    >
      <span className="absolute inset-[-200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,var(--color-accent)_85%,transparent_100%)]" />
      <span className="relative flex items-center gap-2 rounded-full bg-ink-2 px-7 py-4 font-medium transition-colors group-hover:bg-ink">
        {children}
        <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
