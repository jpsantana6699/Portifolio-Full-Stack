'use client';

import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
// eslint-disable-next-line sort-imports
import {
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
  Send,
  WhatsApp,
  WorkOutline,
} from '@mui/icons-material';

import dynamic from 'next/dynamic';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const ParticlesContatoBackground = dynamic(
  () => import('../components/ParticlesContatoBackground').then((mod) => ({ default: mod.ParticlesContatoBackground })),
  {
    ssr: false,
    loading: () => null,
  },
);

const WHATSAPP_PHONE = '5535999788870';
const WHATSAPP_CTA = `https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%20Jo%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`;

const contactInfo = [
  {
    icon: <Email color="primary" />,
    titleKey: 'emailLabel',
    value: 'jpsantana003@gmail.com',
    link: 'mailto:jpsantana003@gmail.com',
  },
  {
    icon: <Phone color="primary" />,
    titleKey: 'whatsappLabel',
    value: '+55 (35) 99978-8870 (WhatsApp)',
    link: `https://wa.me/${WHATSAPP_PHONE}`,
  },
  {
    icon: <LocationOn color="primary" />,
    titleKey: 'locationLabel',
    value: 'Franca, SP - Brasil',
    link: null,
  },
  {
    icon: <LinkedIn color="primary" />,
    titleKey: 'linkedinLabel',
    value: 'linkedin.com/in/joão-pedro-santana',
    link: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/',
  },
  {
    icon: <GitHub color="primary" />,
    titleKey: 'githubLabel',
    value: 'github.com/jpsantana6699',
    link: 'https://github.com/jpsantana6699',
  },
];

type SnackState = { open: boolean; severity: 'success' | 'error' | 'info'; msg: string };

export default function ContatoPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<SnackState>({ open: false, severity: 'success', msg: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const openWhatsApp = () => {
    const lines = [
      `Olá João! Meu nome é ${formData.name || ''}.`,
      formData.email ? `Email: ${formData.email}` : '',
      `Tipo de projeto: ${formData.projectType || '—'}`,
      '',
      formData.message || '',
    ].filter((l) => l !== '');
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSnack({ open: true, severity: 'success', msg: t('messageSent') });
        setFormData({ name: '', email: '', projectType: '', message: '' });
        return;
      }

      const data = await res.json().catch(() => ({} as { code?: string }));
      // Email ainda não configurado no servidor: cai no WhatsApp automaticamente.
      if (res.status === 503 && data.code === 'NOT_CONFIGURED') {
        setSnack({ open: true, severity: 'info', msg: t('fallbackWhatsapp') });
        openWhatsApp();
        return;
      }
      throw new Error('send failed');
    } catch {
      setSnack({ open: true, severity: 'error', msg: t('sendError') });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', py: { xs: 2, md: 3 }, position: 'relative', zIndex: 0, display: 'flex', alignItems: 'center' }}>
      {/* Partículas de fundo */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, width: '100vw', height: '100vh', background: '#000' }}>
        <ParticlesContatoBackground />
      </div>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          className="animate-fade-in-up"
          sx={{
            textAlign: 'center',
            mb: { xs: 1.5, md: 2 },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 1,
              px: 2.5,
              py: 0.75,
              background: 'rgba(0, 212, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#00d4ff',
            }}
          >
            <Email sx={{ fontSize: '1rem' }} />
            Contato
          </Box>

          <Typography
            variant="h2"
            sx={{
              mb: 1,
              background: 'linear-gradient(135deg, #00d4ff 0%, #66e4ff 50%, #ff6b6b 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '-0.02em',
            }}
          >
            {t('getInTouch')}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: { xs: '0.9rem', md: '1rem' },
              lineHeight: 1.5,
            }}
          >
            {t('contactSubtitle')}
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              className="glass-card animate-fade-in-left"
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: '16px',
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  fontSize: '1.15rem',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '8px',
                    background: 'rgba(0, 212, 255, 0.15)',
                  }}
                >
                  <Send sx={{ color: '#00d4ff', fontSize: '1.1rem' }} />
                </Box>
                {t('sendMessage')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t('name_field')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t('email_field')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label={t('projectTypeLabel')}
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      variant="outlined"
                      sx={fieldSx}
                    >
                      <MenuItem value={t('projectTypeSystem')}>{t('projectTypeSystem')}</MenuItem>
                      <MenuItem value={t('projectTypeSite')}>{t('projectTypeSite')}</MenuItem>
                      <MenuItem value={t('projectTypeData')}>{t('projectTypeData')}</MenuItem>
                      <MenuItem value={t('projectTypeOther')}>{t('projectTypeOther')}</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('message')}
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={fieldSx}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                      className="modern-button"
                      sx={{
                        background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
                        py: 1.5,
                        fontSize: '1rem',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 600,
                        boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #66e4ff 0%, #00d4ff 100%)',
                        },
                        '&.Mui-disabled': {
                          background: 'rgba(0, 212, 255, 0.3)',
                          color: 'rgba(255,255,255,0.7)',
                        },
                      }}
                    >
                      {loading ? t('sending') : t('sendButton')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Card
              className="glass-card animate-fade-in-right"
              sx={{
                p: { xs: 2.5, md: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
              }}
            >
              {/* Big WhatsApp CTA */}
              <Button
                href={WHATSAPP_CTA}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                fullWidth
                startIcon={<WhatsApp />}
                className="modern-button"
                sx={{
                  mb: 2.5,
                  py: 1.5,
                  fontSize: '1.05rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2ee878 0%, #25D366 100%)',
                  },
                }}
              >
                {t('talkOnWhatsapp')}
              </Button>

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  mb: 1.5,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                }}
              >
                {t('contactInfo')}
              </Typography>

              <Grid container spacing={1} sx={{ mb: 2 }}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      onClick={() => info.link && window.open(info.link, '_blank')}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.1,
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        ...(info.link && {
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 212, 255, 0.08)',
                            transform: 'translateX(4px)',
                          },
                        }),
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: 36,
                          height: 36,
                          borderRadius: '8px',
                          background: 'rgba(0, 212, 255, 0.1)',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box sx={{ overflow: 'hidden' }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            mb: 0.25,
                          }}
                        >
                          {t(info.titleKey)}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'text.secondary',
                            fontSize: '0.75rem',
                            display: 'block',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 1 }} />

              {/* Availability / PJ highlight */}
              <Box
                sx={{
                  mt: 1.5,
                  p: 2,
                  borderRadius: '12px',
                  border: '1px solid rgba(76, 175, 80, 0.3)',
                  background: 'rgba(76, 175, 80, 0.06)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                  <WorkOutline sx={{ color: '#66bb6a', fontSize: '1.1rem' }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#66bb6a' }}>
                    {t('availability')}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 0.5 }}>
                  {t('availabilityText')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  {t('responseTime')} <strong>{t('responseTimeValue')}</strong>
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          severity={snack.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.08)',
    },
  },
} as const;
