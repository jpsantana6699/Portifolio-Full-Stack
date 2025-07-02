'use client';

import { 
  Box, 
  Button,
  Card,  
  Container, 
  Divider,
  Grid, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField, 
  Typography, 
} from '@mui/material';
import { 
  Email, 
  GitHub, 
  Instagram,
  LinkedIn, 
  LocationOn, 
  Phone, 
  Send, 
} from '@mui/icons-material';

import { ParticlesContatoBackground } from '../components/ParticlesContatoBackground';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

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
    <Box sx={{ minHeight: '100vh', py: 8, position: 'relative', zIndex: 0 }}>
      {/* Partículas de fundo */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, width: '100vw', height: '100vh', background: '#000' }}>
        <ParticlesContatoBackground />
      </div>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              background: 'linear-gradient(45deg, #00d4ff 30%, #ff6b6b 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            {t('getInTouch')}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'text.secondary', maxWidth: '800px', margin: '0 auto' }}
          >
            {t('contactSubtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                {t('sendMessage')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label={t('name_field')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
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
                    />
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        background: 'linear-gradient(45deg, #00d4ff 30%, #0096cc 90%)',
                        px: 4,
                        py: 1.5,
                      }}
                    >
                      {t('sendButton')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: 'fit-content' }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                {t('contactInfo')}
              </Typography>
              <List>
                {contactInfo.map((info, index) => (
                  <Box key={index}>
                    <ListItem
                      sx={{
                        px: 0,
                        ...(info.link && {
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 212, 255, 0.1)',
                            borderRadius: 1,
                          },
                        }),
                      }}
                      onClick={() => info.link && window.open(info.link, '_blank')}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {info.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={t(info.titleKey)}
                        secondary={info.value}
                        primaryTypographyProps={{
                          fontWeight: 600,
                        }}
                        secondaryTypographyProps={{
                          color: 'text.secondary',
                        }}
                      />
                    </ListItem>
                    {index < contactInfo.length - 1 && <Divider sx={{ my: 1 }} />}
                  </Box>
                ))}
              </List>
            </Card>

            <Card sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                {t('availability')}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {t('availabilityText')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('responseTime')} <strong>{t('responseTimeValue')}</strong>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
