import { ClientNavbar } from './components/ClientNavbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import { LanguageProvider } from './contexts/LanguageContext';
import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
// eslint-disable-next-line sort-imports
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Pedro Santana - Portfólio',
  description: 'Portfólio pessoal de João Pedro Santana - Desenvolvedor Full Stack',
  keywords: ['portfólio', 'desenvolvedor', 'full stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'João Pedro Santana' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientNavbar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
