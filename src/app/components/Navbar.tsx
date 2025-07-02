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
import { TranslateButton } from './TranslateButton';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useLanguage();
  
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
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          JPS
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Link href={item.href} passHref style={{ width: '100%', textDecoration: 'none' }}>
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  textAlign: 'center', 
                  py: 1,
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }} 
              />
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
        sx={{ 
          backgroundColor: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            João Pedro Santana
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Link key={item.label} href={item.href} passHref style={{ textDecoration: 'none' }}>
                  <Button 
                    sx={{ 
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
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
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar />
    </>
  );
}
