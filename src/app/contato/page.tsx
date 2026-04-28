'use client';

import { 
  Box, 
  Button,
  Card,  
  Container, 
  Divider,
  Grid, 
  TextField, 
  Typography, 
} from '@mui/material';
// eslint-disable-next-line sort-imports
import { 
  Email, 
  GitHub, 
  Instagram,
  LinkedIn, 
  LocationOn, 
  Phone, 
  Send, 
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

const contactInfo = [
  {
    icon: <Email color="primary" />, 
    titleKey: 'emailLabel',
    value: 'jpsantana003@gmail.com',
    link: 'jpsantana003@gmail.com',
  },
  {
    icon: <Phone color="primary" />, 
    titleKey: 'whatsappLabel',
    value: '+55 (35) 99978-8870 (WhatsApp)',
    link: 'https://wa.me/5535999788870',
  },
  {
    icon: <Instagram color="primary" />,
    titleKey: 'instagramLabel',
    value: 'instagram.com/jpsantana9922',
    link: 'https://www.instagram.com/jpsantana9922/',
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
    value: 'linkedin.com/in/joaopedrosantana',
    link: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/',
  },
  {
    icon: <GitHub color="primary" />, 
    titleKey: 'githubLabel',
    value: 'github.com/jpsantana6699',
    link: 'https://github.com/jpsantana6699',
  },
];


export default function ContatoPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const phone = '5535999788870';
    const text = `Olá, meu nome é ${formData.name}%0AEmail: ${formData.email}%0AMensagem: ${encodeURIComponent(formData.message)}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', message: '' });
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
                height: '100%',
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.08)',
                          },
                        },
                      }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.08)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label={t('message')}
                      name="message"
                      multiline
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.08)',
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      fullWidth
                      className="modern-button"
                      sx={{
                        background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
                        px: 3,
                        py: 1.5,
                        fontSize: '1rem',
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
                      {t('sendButton')}
                    </Button>
                  </Grid>
                  
                  {/* Impactful Message Card */}
                  <Grid item xs={12}>
                    <Box
                      className="glass-card"
                      sx={{
                        mt: 2.5,
                        p: { xs: 2.5, md: 3 },
                        textAlign: 'center',
                        borderRadius: '16px',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        background: 'rgba(0, 212, 255, 0.05)',
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: '#00d4ff',
                          fontWeight: 700,
                          fontSize: { xs: '1.3rem', md: '1.6rem' },
                          textShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
                          mb: 1.5,
                          lineHeight: 1.3,
                        }}
                      >
                        ✨ Vamos transformar sua ideia em realidade!
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          fontWeight: 500,
                        }}
                      >
                        Respondo normalmente em até 24-48 horas ⚡
                      </Typography>
                    </Box>
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
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  mb: 2,
                  fontWeight: 700,
                  fontSize: '1.15rem',
                }}
              >
                {t('contactInfo')}
              </Typography>
              
              <Grid container spacing={1.5} sx={{ mb: 2 }}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      onClick={() => info.link && window.open(info.link, '_blank')}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.25,
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

              <Divider sx={{ my: 1.5 }} />

              <Box>
                <Typography 
                  variant="subtitle1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    mb: 0.75,
                  }}
                >
                  {t('availability')}
                </Typography>
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
    </Box>
  );
}
