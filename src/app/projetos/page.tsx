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
    title: 'JotaLives',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma completa para exibição de clipes de live desenvolvida com React e Next.js. Oferece interface elegante com Material-UI, design futurístico com gradientes CSS e animações. Integra backend com API Routes e armazenamento JSON para gerenciamento dos clipes e conteúdo das lives.',
    image: '/images/jotalives.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'CSS', 'Axios', 'API Routes'],
    githubUrl: 'https://github.com/jpsantana6699/JotaLives',
    liveUrl: 'https://jota-lives.vercel.app/',
    featured: true,
  },
  {
    id: 2,
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
    id: 3,
    title: 'JotaPeTech',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma moderna desenvolvida em Next.js focada em Server-Side Rendering (SSR) e desenvolvimento de aplicações web inovadoras. Oferece listagem de posts com paginação, renderização otimizada do lado do servidor e integração com APIs modernas.',
    image: '/images/jotapetech.jpg',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS', 'Material Icons', 'Winston', 'Remark'],
    githubUrl: 'https://github.com/jpsantana6699/JotaPeTech',
    featured: false,
  },
  {
    id: 4,
    title: 'Sample - API Rest Typescript com MongoDB e Swagger openAPI',
    // eslint-disable-next-line @stylistic/max-len
    description: 'API RESTful completa desenvolvida em TypeScript com MongoDB e documentação Swagger OpenAPI. Implementa autenticação JWT, criptografia de senhas com Bcrypt e padrões de desenvolvimento back-end com estrutura escalável e boas práticas de código.',
    image: '/images/openapi.png',
    technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Express', 'SwaggerOpenAPI', 'JWT', 'Bcrypt'],
    githubUrl: 'https://github.com/jpsantana6699/Swagger-Api-Rest-com-OpenApi/blob/main/docker-compose.yml',
    featured: false,
  },
  {
    id: 5,
    title: 'Livraria Digital',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma completa de livraria online desenvolvida com stack full-stack. Combina interface React moderna com backend Node.js robusto, autenticação JWT, banco de dados MongoDB e templates dinâmicos EJS para uma experiência de compra completa.',
    image: '/images/livro.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'JWT', 'EJS', 'Mongoose'],
    githubUrl: 'https://github.com/jpsantana6699/Projeto-Alura-Back-end',
    featured: false,
  },
  {
    id: 6,
    title: 'Sample - API Node.js com Sequelize',
    // eslint-disable-next-line @stylistic/max-len
    description: 'API RESTful robusta desenvolvida em Node.js com Sequelize ORM para gerenciamento de banco de dados. Implementa padrões de desenvolvimento back-end com estrutura escalável e boas práticas de código.',
    image: '/images/node.png',
    technologies: ['JavaScript', 'Node.js', 'Sequelize', 'Express', 'Sqlite', 'Nodemon', 'ESLint'],
    githubUrl: 'https://github.com/jpsantana6699/Api-Node.js-com-Sequelize',
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
            href="https://github.com/jpsantana6699"
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
