export const WHATSAPP_PHONE = '5535999788870';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Olá João! Vi seu portfólio e gostaria de conversar sobre um projeto.')}`;
export const EMAIL = 'jpsantana003@gmail.com';
export const GITHUB_URL = 'https://github.com/jpsantana6699';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jo%C3%A3o-pedro-santana-01570623a/';
export const CV_URL = '/Currículo%20-%20Joao%20Pedro%20Santana.pdf';

export const socialLinks = [
  { label: 'WhatsApp', href: WHATSAPP_URL },
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
];

export const navLinks = [
  { href: '/', labelKey: 'navHome' },
  { href: '/projetos', labelKey: 'navWork' },
  { href: '/sobre', labelKey: 'navAbout' },
  { href: '/contato', labelKey: 'navContact' },
];

export const CAREER_START = new Date(2023, 1, 1);
export const yearsOfExperience = () => Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
