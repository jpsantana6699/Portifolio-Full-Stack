'use client';

import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip,
  Container, 
  Grid, 
  IconButton,
  Typography, 
} from '@mui/material';
import {  Code, GitHub, Launch } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    id: 0,
    title: 'SoundPad',
    // eslint-disable-next-line @stylistic/max-len
    description: '🔊 DJ JPZINNN - Meme Sound Pad. Um Sound Pad de memes feito com HTML, CSS e JavaScript, com botões que tocam áudios engraçados da internet! Possui 4 estilos de temas, todos com opção escuro e claro.',
    image: '/images/soundpad.png',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/jpsantana6699/SoundPad',
    liveUrl: '',
    featured: true,
  },
  {
    id: 1,
    title: 'Aim_Training',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Treino de Habilidades - Mira, Movimentação e Controle. Um aplicativo web interativo para treino de habilidades em jogos, focado em três aspectos fundamentais: mira, movimentação e controle. Desenvolvido para gamers.',
    image: '',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/jpsantana6699/Aim_Training',
    liveUrl: '',
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce React',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.',
    image: '',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/joaopedro',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados com gráficos e métricas em tempo real.',
    image: '',
    technologies: ['Next.js', 'Material-UI', 'Chart.js', 'API'],
    githubUrl: 'https://github.com/joaopedro',
    liveUrl: 'https://dashboard-demo.vercel.app',
    featured: true,
  },
  {
    id: 4,
    title: 'App de Tarefas',
    description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de arrastar e soltar.',
    image: '',
    technologies: ['React', 'DnD Kit', 'LocalStorage', 'CSS'],
    githubUrl: 'https://github.com/joaopedro',
    liveUrl: 'https://tasks-app-demo.vercel.app',
    featured: false,
  },
  {
    id: 5,
    title: 'Blog Pessoal',
    description: 'Blog responsivo com sistema de comentários e categorização de posts.',
    image: '',
    technologies: ['Next.js', 'Markdown', 'Styled Components'],
    githubUrl: 'https://github.com/joaopedro',
    liveUrl: 'https://blog-demo.vercel.app',
    featured: false,
  },
];

export default function ProjetosPage() {
  const { t } = useLanguage();
  
  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
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
            {t('myProjects')}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'text.secondary', maxWidth: '800px', margin: '0 auto' }}
          >
            {t('projectsSubtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  ...(project.featured && {
                    border: '2px solid',
                    borderColor: 'primary.main',
                  }),
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: project.image && project.image !== '' ? '#222' : 'linear-gradient(45deg, #00d4ff 30%, #ff6b6b 90%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {project.image && project.image !== '' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Code sx={{ fontSize: 60, color: 'white' }} />
                  )}
                </CardMedia>
                
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    {project.featured && (
                      <Chip label={t('featured')} color="primary" size="small" />
                    )}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'text.secondary' }}
                      >
                        <GitHub />
                      </IconButton>
                      {project.liveUrl && (
                        <IconButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: 'primary.main' }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
                    
                    {project.liveUrl && (
                      <Button
                        variant="outlined"
                        size="small"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('viewProject')}
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h6" gutterBottom>
            {t('seeMoreProjects')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://github.com/joaopedro"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHub />}
            sx={{
              background: 'linear-gradient(45deg, #00d4ff 30%, #0096cc 90%)',
              px: 4,
              py: 1.5,
            }}
          >
            {t('viewGithub')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
