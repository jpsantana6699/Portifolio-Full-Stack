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
        overflow: 'hidden',
      }}
    >
      {/* Animated background circles - optimized */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 0,
          willChange: 'transform',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s',
          zIndex: 0,
          willChange: 'transform',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          className="animate-fade-in-up"
          sx={{
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Badge moderna */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 3,
              px: 3,
              py: 1,
              background: 'rgba(0, 212, 255, 0.15)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#00d4ff',
            }}
          >
            <Box
              sx={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00d4ff',
                animation: 'glow 2s ease-in-out infinite',
              }}
            />
            {t('hello')}
          </Box>

          <Typography
            variant="h1"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #00d4ff 0%, #66e4ff 50%, #ff6b6b 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {t('name')}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 600,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            {t('role')}
          </Typography>
          
          <Box sx={{ 
            mb: 5, 
            minHeight: { xs: '80px', sm: '60px' },
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            color: 'rgba(255, 255, 255, 0.6)',
            fontWeight: 500,
          }}>
            <TypeAnimation
              sequence={
                language === 'pt' 
                  ? [
                    '💻 Desenvolvedor Full Stack',
                    2000,
                    '🚀 Back-End + Front-End',
                    2000,
                    '📊 Analista de Dados & BI',
                    2000,
                    '⚡ APIs Robustas e Escaláveis',
                    2000,
                    '📈 Dashboards Estratégicos',
                    2000,
                  ]
                  : [
                    '💻 Full Stack Developer',
                    2000,
                    '🚀 Back-End + Front-End',
                    2000,
                    '📊 Data Analyst & BI',
                    2000,
                    '⚡ Robust and Scalable APIs',
                    2000,
                    '📈 Strategic Dashboards',
                    2000,
                  ]
              }
              wrapper="span"
              speed={50}
              style={{
                fontSize: 'inherit',
                color: 'inherit',
                fontWeight: 'inherit',
                display: 'inline-block',
              }}
              repeat={Infinity}
              key={language} 
            />
          </Box>

          {/* Glass card para descrição */}
          <Box
            className="glass-card"
            sx={{
              maxWidth: { xs: '90%', sm: '80%', md: '700px' },
              margin: '0 auto 48px auto',
              p: { xs: 3, md: 4 },
              borderRadius: '20px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
              }}
            >
              {t('heroDescription')}
            </Typography>
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
              variant="contained"
              size="large"
              startIcon={<Download />}
              href="/Currículo%20-%20Joao%20Pedro%20Santana.pdf"
              download
              className="modern-button"
              sx={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #66e4ff 0%, #00d4ff 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(0, 212, 255, 0.4)',
                },
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
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(0, 212, 255, 0.2)',
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
                  borderColor: '#ff6b6b',
                  color: '#ff6b6b',
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(255, 107, 107, 0.2)',
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
