'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { Download, GitHub, LinkedIn } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t, language } = useLanguage();
  
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            zIndex: 1,
            position: 'relative',
          }}
        >
          <Typography
            variant="h4"
            sx={{ 
              mb: 3, 
              color: 'text.secondary',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            {t('hello')} <Box component="strong" sx={{ color: '#00d4ff' }}>{t('name')}</Box>
          </Typography>
          
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #00d4ff 30%, #ff6b6b 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            }}
          >
            {t('role')}
          </Typography>
          
          <Box sx={{ 
            mb: 4, 
            minHeight: { xs: '80px', sm: '60px' },
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            color: '#b0b0b0',
            fontWeight: 500,
          }}>
            <TypeAnimation
              sequence={
                language === 'pt' 
                  ? [
                    'Desenvolvedor Full Stack',
                    2000,
                    'Especialista em Back-End',
                    2000,
                    'Apaixonado por Tecnologia',
                    2000,
                    'Criador de APIs Robustas',
                    2000,
                  ]
                  : [
                    'Full Stack Developer',
                    2000,
                    'Back-End Specialist',
                    2000,
                    'Technology Enthusiast',
                    2000,
                    'Robust API Creator',
                    2000,
                  ]
              }
              wrapper="span"
              speed={50}
              style={{
                fontSize: 'inherit',
                color: 'inherit',
                fontWeight: 'inherit',
              }}
              repeat={Infinity}
              key={language} 
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: { xs: '90%', sm: '70%', md: '600px' },
              margin: '0 auto 48px auto',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6,
            }}
          >
            {t('heroDescription')}
          </Typography>

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
              variant="contained"
              size="large"
              startIcon={<Download />}
              href="/Currículo%20-%20Joao%20Pedro%20Santana.pdf"
              download
              sx={{
                background: 'linear-gradient(45deg, #00d4ff 30%, #0096cc 90%)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              {t('downloadCV')}
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/jpsantana6699"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'primary.light',
                  backgroundColor: 'rgba(0, 212, 255, 0.1)',
                },
              }}
            >
              GitHub
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: 'secondary.main',
                color: 'secondary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'secondary.light',
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
