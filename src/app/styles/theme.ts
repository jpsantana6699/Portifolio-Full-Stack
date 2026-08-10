'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
      light: '#66e4ff',
      dark: '#0096cc',
    },
    secondary: {
      main: '#ff6b6b',
      light: '#ff9999',
      dark: '#e74c3c',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    background: {
      default: '#010409',
      paper: 'rgba(26, 26, 26, 0.6)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.125rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(26, 26, 26, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    // Menus/dropdowns (ex.: Select "Tipo de projeto") precisam de fundo opaco,
    // senão o conteúdo atrás vaza pela transparência do background.paper.
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#161b22',
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 212, 255, 0.12)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 212, 255, 0.18)',
          },
        },
      },
    },
  },
});
