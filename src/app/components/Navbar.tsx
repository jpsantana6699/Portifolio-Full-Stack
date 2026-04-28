'use client';

import { 
  AppBar, 
  Box, 
  Button, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText,
  Toolbar, 
  Typography, 
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TranslateButton } from './TranslateButton';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();
  const pathname = usePathname();
  
  const menuItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/sobre' },
    { label: t('projects'), href: '/projetos' },
    { label: t('contact'), href: '/contato' },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 800, 
            background: 'linear-gradient(135deg, #00d4ff 0%, #ff6b6b 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          JPS
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              color: '#00d4ff',
              background: 'rgba(0, 212, 255, 0.1)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.label} 
            disablePadding
            sx={{ mb: 1 }}
          >
            <Link href={item.href} passHref style={{ width: '100%', textDecoration: 'none' }}>
              <Box
                className="glass-card"
                sx={{
                  width: '100%',
                  py: 2,
                  px: 3,
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: pathname === item.href ? '#00d4ff' : 'rgba(255, 255, 255, 0.8)',
                  fontWeight: pathname === item.href ? 600 : 500,
                  border: pathname === item.href 
                    ? '1px solid rgba(0, 212, 255, 0.3)' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#00d4ff',
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                    background: 'rgba(0, 212, 255, 0.05)',
                  },
                }}
              >
                {item.label}
              </Box>
            </Link>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'center', pt: 2 }}>
          <TranslateButton size="medium" variant="contained" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(10, 10, 10, 0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Link href="/" passHref style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                background: 'linear-gradient(135deg, #00d4ff 0%, #ff6b6b 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              João Pedro Santana
            </Typography>
          </Link>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  color: '#00d4ff',
                  background: 'rgba(0, 212, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Link key={item.label} href={item.href} passHref style={{ textDecoration: 'none' }}>
                  <Button 
                    sx={{ 
                      color: pathname === item.href ? '#00d4ff' : 'rgba(255, 255, 255, 0.8)',
                      fontWeight: pathname === item.href ? 600 : 500,
                      px: 2.5,
                      py: 1,
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: pathname === item.href ? '70%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #00d4ff 0%, #ff6b6b 100%)',
                        borderRadius: '2px',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        color: '#00d4ff',
                        background: 'rgba(0, 212, 255, 0.08)',
                        '&::after': {
                          width: '70%',
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <TranslateButton size="small" variant="outlined" />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar />
    </>
  );
}
