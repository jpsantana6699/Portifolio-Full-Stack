'use client';

import { Avatar, Box, Card, Container, Grid, Rating, Typography } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * ⬇️⬇️⬇️  TROQUE AQUI PELOS DEPOIMENTOS REAIS  ⬇️⬇️⬇️
 * Estes 3 são apenas EXEMPLOS. Substitua o texto (`quote`), o nome (`name`)
 * e o cargo (`role`) pelo que seu chefe, colegas ou clientes disseram.
 * Dica: pode pegar recomendações do seu LinkedIn.
 * (As iniciais do avatar são geradas automaticamente a partir do nome.)
 */
const testimonials = [
  {
    quote:
      'O João entregou nosso sistema interno antes do prazo e resolveu gargalos que travavam a equipe havia meses. Dedicado, comunicativo e fácil de trabalhar.',
    name: 'Nome do seu chefe',
    role: 'Gestor • Lev Negócios',
    color: '#00d4ff',
  },
  {
    quote:
      'Trabalhar com o João é tranquilo: ele entende a necessidade do negócio, não só o código. As entregas vêm sempre testadas e bem documentadas.',
    name: 'Nome de um colega',
    role: 'Desenvolvedor • Colega de equipe',
    color: '#ff6b6b',
  },
  {
    quote:
      'Os dashboards que ele montou no Power BI mudaram a forma como tomamos decisões no dia a dia. Recomendo o trabalho dele de olhos fechados.',
    name: 'Nome de um cliente',
    role: 'Operações',
    color: '#9c27b0',
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <Box sx={{ py: 10, position: 'relative' }}>
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
              background: 'rgba(156, 39, 176, 0.12)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(156, 39, 176, 0.25)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#ce93d8',
            }}
          >
            <FormatQuote sx={{ fontSize: '1.2rem' }} />
            {t('testimonialsTag')}
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
            {t('testimonialsTitle')}
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
            {t('testimonialsSubtitle')}
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {testimonials.map((item, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={item.name}
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
                  position: 'relative',
                }}
              >
                <FormatQuote
                  sx={{
                    fontSize: 48,
                    color: item.color,
                    opacity: 0.25,
                    transform: 'scaleX(-1)',
                    mb: 1,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    flexGrow: 1,
                    mb: 3,
                  }}
                >
                  {item.quote}
                </Typography>

                <Rating value={5} readOnly size="small" sx={{ mb: 2, color: '#ffc107' }} />

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar
                    sx={{
                      bgcolor: `${item.color}22`,
                      color: item.color,
                      border: `1px solid ${item.color}55`,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                    }}
                  >
                    {getInitials(item.name)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
