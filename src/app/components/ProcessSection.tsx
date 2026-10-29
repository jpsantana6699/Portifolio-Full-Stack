'use client';

import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { Chat, DesignServices, RocketLaunch, SupportAgent } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    { icon: <Chat sx={{ fontSize: 28 }} />, titleKey: 'step1Title', descKey: 'step1Desc' },
    { icon: <DesignServices sx={{ fontSize: 28 }} />, titleKey: 'step2Title', descKey: 'step2Desc' },
    { icon: <RocketLaunch sx={{ fontSize: 28 }} />, titleKey: 'step3Title', descKey: 'step3Desc' },
    { icon: <SupportAgent sx={{ fontSize: 28 }} />, titleKey: 'step4Title', descKey: 'step4Desc' },
  ];

  return (
    <Box sx={{ py: 10, position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="animate-fade-in-up" sx={{ textAlign: 'center', mb: 7 }}>
          <Typography
            variant="overline"
            sx={{ display: 'block', mb: 1.5, color: '#00b4d8', fontWeight: 700, letterSpacing: '0.12em' }}
          >
            {t('processTag')}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: '#f0f6fc',
              fontWeight: 800,
              fontSize: { xs: '2.25rem', md: '3rem' },
              letterSpacing: '-0.02em',
            }}
          >
            {t('processTitle')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '720px',
              margin: '0 auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
            }}
          >
            {t('processSubtitle')}
          </Typography>
        </Box>

        {/* Steps */}
        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={step.titleKey}
              className="animate-fade-in-up"
              sx={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                className="glass-card glass-card-hover"
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: '20px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Step number */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 20,
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {index + 1}
                </Typography>

                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 56,
                    height: 56,
                    borderRadius: '16px',
                    mb: 2.5,
                    color: '#00d4ff',
                    background: 'rgba(0, 212, 255, 0.12)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                  }}
                >
                  {step.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.15rem' }}>
                  {t(step.titleKey)}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.65, fontSize: '0.9rem' }}
                >
                  {t(step.descKey)}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Free first talk banner */}
        <Box
          className="animate-scale-in"
          sx={{
            textAlign: 'center',
            mt: 5,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 3,
              py: 1.5,
              borderRadius: '50px',
              background: 'rgba(76, 175, 80, 0.1)',
              border: '1px solid rgba(76, 175, 80, 0.35)',
              color: '#66bb6a',
              fontWeight: 600,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}
          >
            {t('freeFirstTalk')}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
