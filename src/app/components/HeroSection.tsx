'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowForward, Download, GitHub, LinkedIn, Send } from '@mui/icons-material';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <Box
      component="section"
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          className="animate-fade-in-up"
          sx={{
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <Typography
            sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.6)', fontSize: { xs: '1rem', md: '1.125rem' }, fontWeight: 500 }}
          >
            {t('hello')}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              mb: 2,
              color: '#f0f6fc',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {t('name')}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: '#00b4d8',
              fontWeight: 600,
              fontSize: { xs: '1.35rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            {t('role')}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: '640px',
              margin: '0 auto 40px auto',
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.8,
            }}
          >
            {t('heroDescription')}
          </Typography>

          {/* Availability badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 4,
              px: 2.5,
              py: 1,
              background: 'rgba(76, 175, 80, 0.12)',
              border: '1px solid rgba(76, 175, 80, 0.35)',
              borderRadius: '50px',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
              fontWeight: 500,
              color: '#66bb6a',
            }}
          >
            <Box
              sx={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4caf50',
              }}
            />
            {t('heroAvailable')}
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button
              component={Link}
              href="/contato"
              variant="contained"
              size="large"
              startIcon={<Send />}
              className="modern-button"
              sx={{
                background: '#00b4d8',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: '#0096c7',
                },
              }}
            >
              {t('requestQuote')}
            </Button>

            <Button
              component={Link}
              href="/projetos"
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              className="modern-button glass-card"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.9)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#00d4ff',
                  color: '#00d4ff',
                  backgroundColor: 'rgba(0, 212, 255, 0.1)',
                },
              }}
            >
              {t('viewProjects')}
            </Button>
          </Box>

          {/* Secondary links */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              flexWrap: 'wrap',
              mt: 2.5,
            }}
          >
            <Button
              variant="text"
              size="medium"
              startIcon={<Download />}
              href="/Currículo%20-%20Joao%20Pedro%20Santana.pdf"
              download
              className="modern-button"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                px: 3,
                py: 1,
                fontSize: '0.95rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#00d4ff',
                  backgroundColor: 'rgba(0, 212, 255, 0.08)',
                },
              }}
            >
              {t('downloadCV')}
            </Button>

            <Button
              variant="text"
              size="medium"
              startIcon={<GitHub />}
              href="https://github.com/jpsantana6699"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                px: 3,
                py: 1,
                fontSize: '0.95rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#00d4ff',
                  backgroundColor: 'rgba(0, 212, 255, 0.08)',
                },
              }}
            >
              GitHub
            </Button>

            <Button
              variant="text"
              size="medium"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                px: 3,
                py: 1,
                fontSize: '0.95rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#ff6b6b',
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                },
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
