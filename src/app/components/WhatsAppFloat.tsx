'use client';

import { WhatsApp } from '@mui/icons-material';
import { Fab, Tooltip, Zoom } from '@mui/material';
import { usePathname } from 'next/navigation';

const WHATSAPP_URL = 'https://wa.me/5535999788870?text=Ol%C3%A1%20Jo%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';

export function WhatsAppFloat() {
  const pathname = usePathname();

  // Na página de contato já existe o botão grande "Chamar no WhatsApp".
  if (pathname === '/contato') {
    return null;
  }

  return (
    <Tooltip title="Fale comigo no WhatsApp" placement="left" TransitionComponent={Zoom} arrow>
      <Fab
        aria-label="WhatsApp"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 28 },
          right: { xs: 20, md: 28 },
          zIndex: 1300,
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          animation: 'glow 2.5s ease-in-out infinite',
          '&:hover': {
            background: 'linear-gradient(135deg, #2ee878 0%, #25D366 100%)',
            transform: 'scale(1.08)',
          },
          transition: 'transform 0.25s ease',
        }}
      >
        <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </Tooltip>
  );
}
