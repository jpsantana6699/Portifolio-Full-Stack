'use client';

import { Box, Button, Card, Chip, Container, Grid, Typography } from '@mui/material';
import { BarChart, Storage, WhatsApp, Web } from '@mui/icons-material';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/5535999788870?text=Ol%C3%A1%20Jo%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento.';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Storage sx={{ fontSize: 30 }} />,
      color: '#00d4ff',
      titleKey: 'serviceSystemsTitle',
      descKey: 'serviceSystemsDesc',
      stack: ['Node.js', 'TypeScript', 'React', 'Next.js', 'APIs REST', 'Docker'],
    },
    {
      icon: <Web sx={{ fontSize: 30 }} />,
      color: '#ff6b6b',
      titleKey: 'serviceFrontTitle',
      descKey: 'serviceFrontDesc',
      stack: ['Next.js', 'React', 'TypeScript', 'Material-UI', 'Responsivo', 'SEO'],
    },
    {
      icon: <BarChart sx={{ fontSize: 30 }} />,
      color: '#9c27b0',
      titleKey: 'serviceDataTitle',
      descKey: 'serviceDataDesc',
      stack: ['Power BI', 'SQL', 'DAX', 'ETL', 'Dashboards'],
    },
  ];

  return (
    <Box id="servicos" sx={{ py: 10, position: 'relative', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="animate-fade-in-up" sx={{ textAlign: 'center', mb: 7 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 3,
              px: 3,
              py: 1,
              background: 'rgba(0, 212, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#00d4ff',
            }}
          >
            <Storage sx={{ fontSize: '1.2rem' }} />
            {t('servicesTag')}
          </Box>

          <Typography
            variant="h2"
            sx={{
              mb: 3,
              background: 'linear-gradient(135deg, #00d4ff 0%, #66e4ff 50%, #ff6b6b 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              fontSize: { xs: '2.25rem', md: '3rem' },
              letterSpacing: '-0.02em',
            }}
          >
            {t('servicesTitle')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '760px',
              margin: '0 auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
            }}
          >
            {t('servicesSubtitle')}
          </Typography>
        </Box>

        {/* Service cards */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={service.titleKey}
              className="animate-fade-in-up"
              sx={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                className="glass-card glass-card-hover"
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '16px',
                    mb: 3,
                    color: service.color,
                    background: `${service.color}22`,
                    border: `1px solid ${service.color}55`,
                  }}
                >
                  {service.icon}
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontSize: '1.35rem' }}>
                  {t(service.titleKey)}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                    flexGrow: 1,
                    mb: 3,
                  }}
                >
                  {t(service.descKey)}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {service.stack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        background: `${service.color}18`,
                        border: `1px solid ${service.color}44`,
                        color: service.color,
                        fontWeight: 500,
                        fontSize: '0.72rem',
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA band */}
        <Box
          className="glass-card animate-scale-in"
          sx={{
            textAlign: 'center',
            mt: 8,
            p: { xs: 4, md: 6 },
            borderRadius: '24px',
            border: '1px solid rgba(0, 212, 255, 0.25)',
            background: 'rgba(0, 212, 255, 0.05)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.6rem', md: '2rem' } }}>
            {t('servicesCtaTitle')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, maxWidth: '600px', margin: '0 auto 32px auto' }}
          >
            {t('servicesCtaDesc')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/contato"
              variant="contained"
              size="large"
              className="modern-button"
              sx={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #66e4ff 0%, #00d4ff 100%)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('requestQuote')}
            </Button>
            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<WhatsApp />}
              className="modern-button glass-card"
              sx={{
                borderColor: 'rgba(76, 175, 80, 0.5)',
                color: '#4caf50',
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#4caf50',
                  background: 'rgba(76, 175, 80, 0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('talkOnWhatsapp')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
