'use client';

import { usePathname } from 'next/navigation';
import { WHATSAPP_URL } from '../data/site';
import { WhatsAppIcon } from './BrandIcons';
import { Magnetic } from './Magnetic';

export function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname === '/contato') {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 md:bottom-8 md:right-8">
      <Magnetic>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </Magnetic>
    </div>
  );
}
