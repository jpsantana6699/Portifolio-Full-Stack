import type { Metadata, Viewport } from 'next';
import { Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { SmoothScroll } from './components/SmoothScroll';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { yearsOfExperience } from './data/site';
import './globals.css';

const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joaopedrotech.netlify.app';

const siteTitle = 'João Pedro Santana | Desenvolvedor Full Stack';
const siteDescription = `Desenvolvedor Full Stack Pleno com ${yearsOfExperience()}+ anos de experiência, em Passos, MG, atendendo empresas de qualquer lugar. Sistemas sob medida, sites e landing pages, automações e dashboards de dados.`;

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
    images: [{ url: '/images/og.jpg', width: 1200, height: 630, alt: 'João Pedro Santana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/og.jpg'],
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
    <html lang="pt-BR" className={`${interTight.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppFloat />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
