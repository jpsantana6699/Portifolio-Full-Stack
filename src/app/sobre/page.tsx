'use client';

import { useState } from 'react';
import {
  ArrowDropDown,
  ArrowDropUp,
  BarChart,
  Build,
  Code,
  Dns,
  School,
  Send,
  SmartToy,
  Storage,
  Web,
  Work,
} from '@mui/icons-material';
import TouchApp from '@mui/icons-material/TouchApp';
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Collapse,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import type { SvgIconComponent } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

type SkillCategory = {
  labelKey: string;
  color: string;
  Icon: SvgIconComponent;
  skills: string[];
};

type CareerStage = {
  id: string;
  Icon: SvgIconComponent;
  titleKey: string;
  periodKey: string;
  pointKeys: string[];
};

const skillCategories: SkillCategory[] = [
  {
    labelKey: 'backEnd',
    color: '#00d4ff',
    Icon: Dns,
    skills: ['Node.js', 'TypeScript', 'Express', 'Zod', 'APIs REST', 'JWT', 'Java', 'Python'],
  },
  {
    labelKey: 'frontEnd',
    color: '#ff6b6b',
    Icon: Web,
    skills: ['React.js', 'Next.js', 'React Query', 'Material-UI', 'HTML/CSS', 'Responsivo'],
  },
  {
    labelKey: 'database',
    color: '#ff9800',
    Icon: Storage,
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Sequelize', 'Prisma', 'TypeORM'],
  },
  {
    labelKey: 'automation',
    color: '#3fb950',
    Icon: SmartToy,
    skills: ['Playwright', 'Puppeteer', 'Selenium', 'Web Scraping', 'Python'],
  },
  {
    labelKey: 'dataBI',
    color: '#c084fc',
    Icon: BarChart,
    skills: ['Power BI', 'SQL', 'DAX', 'ETL', 'Python', 'Excel'],
  },
  {
    labelKey: 'toolsOrms',
    color: '#66e4ff',
    Icon: Build,
    skills: ['Git/GitHub', 'Docker', 'Swagger/OpenAPI', 'Postman', 'Jest', 'ESLint'],
  },
];


const careerStages: CareerStage[] = [
  {
    id: 'dataAnalyst',
    Icon: BarChart,
    titleKey: 'dataAnalystTitle',
    periodKey: 'dataAnalystPeriod',
    pointKeys: ['dataAnalystPoint1', 'dataAnalystPoint2'],
  },
  {
    id: 'backend',
    Icon: Storage,
    titleKey: 'backendTitle',
    periodKey: 'backendPeriod',
    pointKeys: ['backendPoint1', 'backendPoint2', 'backendPoint3'],
  },
  {
    id: 'fullstack',
    Icon: Code,
    titleKey: 'fullstackTitle',
    periodKey: 'fullstackPeriod',
    pointKeys: ['fullstackPoint1', 'fullstackPoint2', 'fullstackPoint3', 'fullstackPoint4'],
  },
];

export default function SobrePage() {
  const { t } = useLanguage();
  const [expandedStage, setExpandedStage] = useState<string | null>('fullstack');

  const handleToggleExpand = (stageId: string) => {
    setExpandedStage(expandedStage === stageId ? null : stageId);
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 10, position: 'relative' }}>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          className="animate-fade-in-up"
          sx={{ 
            textAlign: 'center', 
            mb: 8,
          }}
        >
          
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: '#f0f6fc',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
            }}          >
            {t('aboutMe')}
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
            }}
          >
            {t('aboutSubtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Profile Card */}
          <Grid item xs={12} md={4}>
            <Card 
              className="glass-card animate-fade-in-left"
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 3,
                borderRadius: '20px',
              }}
            >
              <Avatar
                src="/images/perfil.jpg"
                alt="João Pedro Santana"
                sx={{
                  width: 180,
                  height: 180,
                  margin: '0 auto 24px auto',
                  border: '4px solid',
                  borderColor: 'primary.main',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: '1.5rem',
                }}
              >
                {t('name')}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 3,
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6,
                }}
              >
                {t('profileDescription')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                <Chip 
                  label="Node.js" 
                  sx={{
                    background: 'rgba(0, 212, 255, 0.15)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    color: '#00d4ff',
                    fontWeight: 600,
                  }}
                />
                <Chip 
                  label="TypeScript" 
                  sx={{
                    background: 'rgba(0, 212, 255, 0.15)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    color: '#00d4ff',
                    fontWeight: 600,
                  }}
                />
                <Chip 
                  label="Express" 
                  sx={{
                    background: 'rgba(0, 212, 255, 0.15)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    color: '#00d4ff',
                    fontWeight: 600,
                  }}
                />
                <Chip 
                  label="SQL Server" 
                  sx={{
                    background: 'rgba(255, 107, 107, 0.15)',
                    border: '1px solid rgba(255, 107, 107, 0.3)',
                    color: '#ff6b6b',
                    fontWeight: 600,
                  }}
                />
                <Chip 
                  label="Next.js" 
                  sx={{
                    background: 'rgba(255, 107, 107, 0.15)',
                    border: '1px solid rgba(255, 107, 107, 0.3)',
                    color: '#ff6b6b',
                    fontWeight: 600,
                  }}
                />
                <Chip 
                  label="React.js" 
                  sx={{
                    background: 'rgba(255, 107, 107, 0.15)',
                    border: '1px solid rgba(255, 107, 107, 0.3)',
                    color: '#ff6b6b',
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Card>
          </Grid>

          {/* About Text */}
          <Grid item xs={12} md={8}>
            <Card 
              className="glass-card animate-fade-in-right"
              sx={{ 
                height: '100%', 
                p: 4,
                borderRadius: '20px',
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: 'rgba(0, 212, 255, 0.15)',
                  }}
                >
                  <Code sx={{ color: '#00d4ff' }} />
                </Box>
                {t('myStory')}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                }}
              >
                {t('storyPart1')}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                }}
              >
                {t('storyPart2')}
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                }}
              >
                {t('storyPart3')}
              </Typography>
            </Card>
          </Grid>


          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}
              >
                <School color="primary" />
                {t('techStack')}
              </Typography>

              <Grid container spacing={3}>
                {skillCategories.map(({ labelKey, color, Icon, skills }) => (
                  <Grid item xs={12} sm={6} md={4} key={labelKey}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color, display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <Icon sx={{ color }} />
                      {t(labelKey)}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            background: `${color}18`,
                            border: `1px solid ${color}55`,
                            color,
                            fontWeight: 600,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
                <Work color="primary" />
                {t('experience')}
              </Typography>

              <Box sx={{ mb: 4, px: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
                  {t('levNegocios')} • {t('levPeriod')}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    mb: 3,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '50px',
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    color: '#66e4ff',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                  }}
                >
                  <TouchApp sx={{ fontSize: '1rem' }} />
                  {t('tapToExpand')}
                </Box>

                <Box sx={{ position: 'relative' }}>
                  <Box sx={{
                    position: 'absolute',
                    left: '20px',
                    top: '10px',
                    bottom: '10px',
                    width: '2px',
                    background: 'rgba(0, 212, 255, 0.35)',
                    zIndex: 0,
                  }} />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {careerStages.map(({ id, Icon, titleKey, periodKey, pointKeys }, index) => (
                      <Box key={id} sx={{ mb: index < careerStages.length - 1 ? 4 : 0 }}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}
                          onClick={() => handleToggleExpand(id)}
                        >
                          <Avatar
                            sx={{
                              bgcolor: '#00d4ff',
                              mr: 3,
                              boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                            }}
                          >
                            <Icon />
                          </Avatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {t(titleKey)}
                              </Typography>
                              <IconButton size="small">
                                {expandedStage === id ? <ArrowDropUp /> : <ArrowDropDown />}
                              </IconButton>
                            </Box>
                            <Typography variant="subtitle2" color="primary.light">
                              {t(periodKey)}
                            </Typography>
                          </Box>
                        </Box>

                        <Collapse in={expandedStage === id}>
                          <Box sx={{ pl: 7, pt: 2 }}>
                            {pointKeys.map((pointKey) => (
                              <Box key={pointKey} sx={{ display: 'flex', mb: 1.5 }}>
                                <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                  {t(pointKey)}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Collapse>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ 
                p: 3,
                border: '1px solid rgba(0, 212, 255, 0.5)', 
                borderRadius: 2,
              }}>
                <Typography variant="h6" gutterBottom>
                  {t('previousRoles')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#00d4ff', mr: 2, width: 32, height: 32 }}>
                    <Work fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold' }}>
                      {t('farmaciaRole')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2020–2023
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#00d4ff', mr: 2, width: 32, height: 32 }}>
                    <Work fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold' }}>
                      {t('rhRole')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2023
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* CTA */}
          <Grid item xs={12}>
            <Card
              className="glass-card animate-scale-in"
              sx={{
                textAlign: 'center',
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                border: '1px solid rgba(0, 212, 255, 0.25)',
                background: 'rgba(0, 212, 255, 0.05)',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.6rem', md: '2rem' } }}>
                {t('letsWorkTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 4, maxWidth: '600px', margin: '0 auto 32px auto' }}
              >
                {t('letsWorkDesc')}
              </Typography>
              <Button
                component={Link}
                href="/contato"
                variant="contained"
                size="large"
                startIcon={<Send />}
                className="modern-button"
                sx={{
                  background: '#00b4d8',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.05rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    background: '#0096c7',
                  },
                }}
              >
                {t('requestQuote')}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
