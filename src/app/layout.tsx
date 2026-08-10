import { ClientNavbar } from './components/ClientNavbar';
import { EmotionRegistry } from './components/EmotionRegistry';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import { LanguageProvider } from './contexts/LanguageContext';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joaopedrotech.netlify.app';

const siteTitle = 'João Pedro Santana | Desenvolvedor Full Stack & BI';
// eslint-disable-next-line @stylistic/max-len
const siteDescription = 'Desenvolvedor Full Stack e Analista de BI. Sistemas sob medida, sites e landing pages e dashboards de dados para empresas. Disponível para freelance e contratos PJ (mensal/anual).';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'desenvolvedor full stack',
    'freelancer',
    'sistemas sob medida',
    'landing page',
    'power bi',
    'análise de dados',
    'react',
    'next.js',
    'typescript',
    'node.js',
  ],
  authors: [{ name: 'João Pedro Santana' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'João Pedro Santana',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/images/perfil.jpg', width: 1200, height: 630, alt: 'João Pedro Santana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/perfil.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <EmotionRegistry>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ClientNavbar />
              {children}
              <WhatsAppFloat />
            </ThemeProvider>
          </LanguageProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
