'use client';

import { useState } from 'react';
// eslint-disable-next-line sort-imports
import {
  ArrowDropDown,
  ArrowDropUp,
  BarChart,
  Build,
  Code,
  School,
  Send,
  Storage,
  Web,
  Work,
} from '@mui/icons-material';
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
import { useLanguage } from '../contexts/LanguageContext';

const skillsCategories = {
  backend: [
    { name: 'Node.js', level: 'pleno' },
    { name: 'Express', level: 'pleno' },
    { name: 'TypeScript', level: 'pleno' },
    { name: 'Python', level: 'junior' },
    { name: 'SQL Server', level: 'pleno' },
    { name: 'MySQL', level: 'pleno' },
    { name: 'MongoDB', level: 'pleno' },
  ],
  frontend: [
    { name: 'React.js', level: 'pleno' },
    { name: 'Next.js', level: 'pleno' },
    { name: 'JavaScript', level: 'pleno' },
    { name: 'HTML/CSS', level: 'pleno' },
    { name: 'Material-UI', level: 'pleno' },
  ],
  dataBI: [
    { name: 'Power BI', level: 'pleno' },
    { name: 'SQL', level: 'pleno' },
    { name: 'DAX', level: 'pleno' },
    { name: 'ETL', level: 'junior' },
    { name: 'Data Analysis', level: 'pleno' },
  ],
  tools: [
    { name: 'Git/GitHub', level: 'pleno' },
    { name: 'Docker', level: 'pleno' },
    { name: 'Postman', level: 'pleno' },
    { name: 'Jest', level: 'pleno' },
    { name: 'Swagger', level: 'pleno' },
    { name: 'Sequelize', level: 'pleno' },
    { name: 'TypeORM', level: 'pleno' },
    { name: 'Prisma', level: 'pleno' },
  ],
};

export default function SobrePage() {
  const { t } = useLanguage();
  const [expandedStage, setExpandedStage] = useState<string | null>(null);

  const handleToggleExpand = (stageId: string) => {
    setExpandedStage(expandedStage === stageId ? null : stageId);
  };
  
  const getLevelColor = (level: string, category: string) => {
    let baseColor = '';
    
    switch (category) {
      case 'backend':
        baseColor = '#00d4ff';
        break;
      case 'frontend':
        baseColor = '#ff6b6b';
        break;
      case 'dataBI':
        baseColor = '#9c27b0';
        break;
      case 'tools':
        baseColor = '#4caf50';
        break;
      default:
        baseColor = '#9E9E9E';
    }
    
    return baseColor;
  };
  
  return (
    <Box sx={{ minHeight: '100vh', py: 10, position: 'relative' }}>
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          className="animate-fade-in-up"
          sx={{ 
            textAlign: 'center', 
            mb: 8,
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 3,
              px: 3,
              py: 1,
              background: 'rgba(0, 212, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#00d4ff',
            }}
          >
            <Code sx={{ fontSize: '1.2rem' }} />
            Sobre Mim
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

        {/* Stats / credibilidade */}
        <Grid container spacing={2} sx={{ mb: 5 }} className="animate-fade-in-up">
          {[
            { value: '+3', labelKey: 'statsExperience' },
            { value: '+10', labelKey: 'statsProjects' },
            { value: '+20', labelKey: 'statsTech' },
          ].map((stat) => (
            <Grid item xs={12} sm={4} key={stat.labelKey}>
              <Card className="glass-card" sx={{ p: 3, textAlign: 'center', borderRadius: '16px' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.25rem', md: '2.75rem' },
                    fontWeight: 800,
                    lineHeight: 1,
                    mb: 1,
                    background: 'linear-gradient(135deg, #00d4ff 0%, #ff6b6b 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                  {t(stat.labelKey)}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

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
                  boxShadow: '0 8px 32px rgba(0, 212, 255, 0.4)',
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

          {/* Skills - Reorganized */}
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
                {/* Back-End */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        color: 'primary.main', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                      }}
                    >
                      <Storage color="primary" />
                      {t('backEnd')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillsCategories.backend.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            background: `${getLevelColor(skill.level, 'backend')}18`,
                            border: `1px solid ${getLevelColor(skill.level, 'backend')}55`,
                            color: getLevelColor(skill.level, 'backend'),
                            fontWeight: 600,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Front-End */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        color: 'secondary.main', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                      }}
                    >
                      <Web color="secondary" />
                      {t('frontEnd')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillsCategories.frontend.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            background: `${getLevelColor(skill.level, 'frontend')}18`,
                            border: `1px solid ${getLevelColor(skill.level, 'frontend')}55`,
                            color: getLevelColor(skill.level, 'frontend'),
                            fontWeight: 600,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Data & BI */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        color: '#9c27b0', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                      }}
                    >
                      <BarChart sx={{ color: '#9c27b0' }} />
                      {t('dataBI')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillsCategories.dataBI.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            background: `${getLevelColor(skill.level, 'dataBI')}18`,
                            border: `1px solid ${getLevelColor(skill.level, 'dataBI')}55`,
                            color: getLevelColor(skill.level, 'dataBI'),
                            fontWeight: 600,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                {/* Ferramentas */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom 
                      sx={{ 
                        color: 'success.main', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                      }}
                    >
                      <Build color="success" />
                      {t('toolsOrms')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillsCategories.tools.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            background: `${getLevelColor(skill.level, 'tools')}18`,
                            border: `1px solid ${getLevelColor(skill.level, 'tools')}55`,
                            color: getLevelColor(skill.level, 'tools'),
                            fontWeight: 600,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Experience */}
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
                <Work color="primary" />
                {t('experience')}
              </Typography>
              
              {/* Career Timeline at Lev Negócios */}
              <Box sx={{ mb: 4, px: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                  {t('levNegocios')} • {t('levPeriod')}
                </Typography>

                {/* Career Timeline */}
                <Box sx={{ position: 'relative' }}>
                  {/* Vertical Timeline Line */}
                  <Box sx={{
                    position: 'absolute',
                    left: '25px',
                    top: '10px',
                    bottom: '10px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #00d4ff, #00d4ff 90%)',
                    zIndex: 0,
                  }} />

                  {/* Timeline Stages */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Data Analyst Stage */}
                    <Box sx={{ mb: 4 }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'flex-start',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleToggleExpand('dataAnalyst')}
                      >
                        <Avatar 
                          sx={{ 
                            bgcolor: '#00d4ff', 
                            mr: 3, 
                            boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                          }}
                        >
                          <BarChart />
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                              {t('dataAnalystTitle')}
                            </Typography>
                            <IconButton size="small">
                              {expandedStage === 'dataAnalyst' ? <ArrowDropUp /> : <ArrowDropDown />}
                            </IconButton>
                          </Box>
                          <Typography variant="subtitle2" color="primary.light">
                            {t('dataAnalystPeriod')}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Collapse in={expandedStage === 'dataAnalyst'}>
                        <Box sx={{ pl: 7, pt: 2 }}>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('dataAnalystPoint1')}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('dataAnalystPoint2')}
                            </Typography>
                          </Box>
                        </Box>
                      </Collapse>
                    </Box>

                    {/* Backend Developer Stage */}
                    <Box sx={{ mb: 4 }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'flex-start',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleToggleExpand('backend')}
                      >
                        <Avatar 
                          sx={{ 
                            bgcolor: '#00d4ff', 
                            mr: 3,
                            boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                          }}
                        >
                          <Storage />
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                              {t('backendTitle')}
                            </Typography>
                            <IconButton size="small">
                              {expandedStage === 'backend' ? <ArrowDropUp /> : <ArrowDropDown />}
                            </IconButton>
                          </Box>
                          <Typography variant="subtitle2" color="primary.light">
                            {t('backendPeriod')}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Collapse in={expandedStage === 'backend'}>
                        <Box sx={{ pl: 7, pt: 2 }}>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('backendPoint1')}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('backendPoint2')}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('backendPoint3')}
                            </Typography>
                          </Box>
                        </Box>
                      </Collapse>
                    </Box>

                    {/* Full Stack Developer Stage */}
                    <Box>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'flex-start',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleToggleExpand('fullstack')}
                      >
                        <Avatar 
                          sx={{ 
                            bgcolor: '#00d4ff', 
                            mr: 3,
                            boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                          }}
                        >
                          <Code />
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                              {t('fullstackTitle')}
                            </Typography>
                            <IconButton size="small">
                              {expandedStage === 'fullstack' ? <ArrowDropUp /> : <ArrowDropDown />}
                            </IconButton>
                          </Box>
                          <Typography variant="subtitle2" color="primary.light">
                            {t('fullstackPeriod')}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Collapse in={expandedStage === 'fullstack'}>
                        <Box sx={{ pl: 7, pt: 2 }}>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('fullstackPoint1')}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('fullstackPoint2')}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', mb: 1.5 }}>
                            <Typography variant="body2" color="primary.main" sx={{ mr: 1, fontWeight: 'bold' }}>•</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {t('fullstackPoint3')}
                            </Typography>
                          </Box>
                        </Box>
                      </Collapse>
                    </Box>
                  </Box>
                </Box>
              </Box>
              
              {/* Previous Experiences */}
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
                  background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.05rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #66e4ff 0%, #00d4ff 100%)',
                    transform: 'translateY(-2px)',
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
