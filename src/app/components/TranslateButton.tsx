'use client';

import { Button } from '@mui/material';
import { Translate } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

interface TranslateButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
}

export function TranslateButton({ size = 'small', variant = 'outlined' }: TranslateButtonProps) {
  const { toggleLanguage, t } = useLanguage();

  return (
    <Button
      variant={variant}
      size={size}
      startIcon={<Translate />}
      onClick={toggleLanguage}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        '&:hover': {
          transform: 'translateY(-2px)',
          transition: 'transform 0.2s ease-in-out',
        },
      }}
    >
      {t('translate')}
    </Button>
  );
}
