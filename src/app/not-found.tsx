'use client';

import { ArrowBack, Home } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '6rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #00d4ff 30%, #ff6b6b 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            404
          </Typography>
          
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: 'text.primary',
              fontWeight: 600,
            }}
          >
            Página não encontrada
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: 6,
              color: 'text.secondary',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto 48px auto',
            }}
          >
            Ops! A página que você está procurando não existe ou foi movida para outro lugar.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Home />}
                sx={{
                  background: 'linear-gradient(45deg, #00d4ff 30%, #0096cc 90%)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Ir para Home
              </Button>
            </Link>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBack />}
              onClick={() => window.history.back()}
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
              Voltar
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
