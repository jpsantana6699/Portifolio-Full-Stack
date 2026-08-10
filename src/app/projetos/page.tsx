'use client';

import { useState } from 'react';
// eslint-disable-next-line sort-imports
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from '@mui/material';
import { Code, GitHub, Launch, Lock } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    id: 0,
    category: 'sistema',
    title: 'Lev Negócios | HUB',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Sistema interno completo que centralizou a operação de uma empresa do setor financeiro, automatizando processos manuais e conectando áreas que antes trabalhavam isoladas. Atuei de ponta a ponta (front-end + back-end), com arquitetura de microsserviços escalável distribuída em múltiplos repositórios.',
    image: '/images/hublev.png',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Next.js', 'React', 'MySQL', 'Docker', 'MaterialUI', 'Axios', 'SwaggerOpenAPI', 'Jest'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://lev.hub.elegen.com.br/login',
    featured: true,
  },
  {
    id: 1,
    category: 'site',
    title: 'Lev Negócios | Landing Page',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Landing page institucional que apresenta o portfólio de produtos financeiros da empresa de forma clara e transmite credibilidade para converter visitantes em contatos. Carregamento rápido, design moderno e 100% responsiva em qualquer dispositivo.',
    image: '/images/page.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Material-UI', 'CSS-in-JS'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://www.levnegocios.com.br',
    featured: true,
  },
  {
    id: 2,
    category: 'site',
    title: 'Voe Soluções Financeiras | Landing Page',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Landing page institucional para empresa do setor financeiro, pensada para gerar credibilidade e novos contatos. Interface intuitiva, rápida e totalmente responsiva, construída com componentes reutilizáveis para fácil manutenção.',
    image: '/images/Voe.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Material-UI', 'CSS-in-JS'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://voesolucoesfinanceiras.com.br',
    featured: true,
  },
  {
    id: 11,
    category: 'bi',
    title: 'Painel Comercial (BI)',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Dashboard comercial estratégico com KPIs de faturamento, meta, ticket médio e vendas por canal — do modelo de dados às visualizações. Transforma dados brutos da operação em indicadores claros para decisão. Demonstração com dados fictícios (projeto real sob confidencialidade).',
    image: '/images/bi-dashboard-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'ETL', 'Modelagem de Dados'],
    githubUrl: '',
    isDemo: true,
    featured: true,
  },
  {
    id: 12,
    category: 'bi',
    title: 'Painel Financeiro (BI)',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Dashboard financeiro com receita, custos, lucro e margem. Destaque para o gráfico waterfall, que mostra a composição do resultado (da receita ao lucro líquido), e o medidor de meta de faturamento. Demonstração com dados fictícios.',
    image: '/images/bi-financeiro-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'Modelagem de Dados'],
    githubUrl: '',
    isDemo: true,
    featured: true,
  },
  {
    id: 13,
    category: 'bi',
    title: 'Painel de Marketing & Growth (BI)',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Dashboard de marketing com funil de conversão (visitantes → leads → clientes), ROI por canal, CAC e origem do tráfego. Transforma dados de aquisição em decisões de investimento. Demonstração com dados fictícios.',
    image: '/images/bi-marketing-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'ETL'],
    githubUrl: '',
    isDemo: true,
    featured: true,
  },
  {
    id: 3,
    category: 'pessoal',
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
    id: 4,
    category: 'pessoal',
    title: 'JotaLives',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma completa para exibição de clipes de live desenvolvida com React e Next.js. Oferece interface elegante com Material-UI, design futurístico com gradientes CSS e animações. Integra backend com API Routes e armazenamento JSON para gerenciamento dos clipes e conteúdo das lives.',
    image: '/images/jotalives.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'MaterialUI', 'CSS', 'Axios', 'API Routes'],
    githubUrl: 'https://github.com/jpsantana6699/JotaLives',
    liveUrl: 'https://jota-lives.vercel.app/',
    featured: true,
    isDemo: true,
  },
  {
    id: 5,
    category: 'pessoal',
    title: 'Aim_Training',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Treino de Habilidades - Mira, Movimentação e Controle. Um aplicativo web interativo para treino de habilidades em jogos, focado em três aspectos fundamentais: mira, movimentação e controle. Desenvolvido para gamers.',
    image: '',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/jpsantana6699/Aim_Training',
    liveUrl: '',
    featured: false,
  },
  {
    id: 6,
    category: 'sistema',
    title: 'JotaPeTech',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma moderna desenvolvida em Next.js focada em Server-Side Rendering (SSR) e desenvolvimento de aplicações web inovadoras. Oferece listagem de posts com paginação, renderização otimizada do lado do servidor e integração com APIs modernas.',
    image: '/images/jotapetech.jpg',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS', 'Material Icons', 'Winston', 'Remark'],
    githubUrl: 'https://github.com/jpsantana6699/JotaPeTech',
    featured: false,
  },
  {
    id: 7,
    category: 'sistema',
    title: 'Catálogo de Livros e Filmes',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Sistema web completo desenvolvido em Java para catalogar e gerenciar livros e filmes. Implementa CRUD completo com Servlets, JSP, JDBC e MySQL. Inclui busca avançada, validações frontend/backend e proteção contra SQL Injection usando PreparedStatement. Projeto acadêmico (ABP) focado em boas práticas de segurança e arquitetura MVC.',
    image: '/images/catalogo.jpeg',
    technologies: ['Java', 'Servlets', 'JSP', 'JSTL', 'JDBC', 'MySQL', 'Apache Tomcat', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/jpsantana6699/CRUD_JAVA',
    liveUrl: '',
    featured: true,
  },
  {
    id: 8,
    category: 'sistema',
    title: 'Sample - API Rest Typescript com MongoDB e Swagger openAPI',
    // eslint-disable-next-line @stylistic/max-len
    description: 'API RESTful completa desenvolvida em TypeScript com MongoDB e documentação Swagger OpenAPI. Implementa autenticação JWT, criptografia de senhas com Bcrypt e padrões de desenvolvimento back-end com estrutura escalável e boas práticas de código.',
    image: '/images/openapi.png',
    technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Express', 'SwaggerOpenAPI', 'JWT', 'Bcrypt'],
    githubUrl: 'https://github.com/jpsantana6699/Swagger-Api-Rest-com-OpenApi/blob/main/docker-compose.yml',
    featured: false,
  },
  {
    id: 9,
    category: 'sistema',
    title: 'Livraria Digital',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Plataforma completa de livraria online desenvolvida com stack full-stack. Combina interface React moderna com backend Node.js robusto, autenticação JWT, banco de dados MongoDB e templates dinâmicos EJS para uma experiência de compra completa.',
    image: '/images/livro.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'JWT', 'EJS', 'Mongoose'],
    githubUrl: 'https://github.com/jpsantana6699/Projeto-Alura-Back-end',
    featured: false,
  },
  {
    id: 10,
    category: 'sistema',
    title: 'Sample - API Node.js com Sequelize',
    // eslint-disable-next-line @stylistic/max-len
    description: 'API RESTful robusta desenvolvida em Node.js com Sequelize ORM para gerenciamento de banco de dados. Implementa padrões de desenvolvimento back-end com estrutura escalável e boas práticas de código.',
    image: '/images/node.png',
    technologies: ['JavaScript', 'Node.js', 'Sequelize', 'Express', 'Sqlite', 'Nodemon', 'ESLint'],
    githubUrl: 'https://github.com/jpsantana6699/Api-Node.js-com-Sequelize',
    featured: false,
  },
];

const filters = [
  { value: 'all', labelKey: 'filterAll' },
  { value: 'sistema', labelKey: 'filterSystems' },
  { value: 'site', labelKey: 'filterSites' },
  { value: 'bi', labelKey: 'filterData' },
  { value: 'pessoal', labelKey: 'filterPersonal' },
];

export default function ProjetosPage() {
  const { t } = useLanguage();
  const [expandedTechs, setExpandedTechs] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const toggleTechs = (projectId: number) => {
    setExpandedTechs((prev) => 
      prev.includes(projectId) 
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId],
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 10, position: 'relative' }}>
      {/* Background decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
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
            Portfólio
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
            }}
          >
            {t('myProjects')}
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
            {t('projectsSubtitle')}
          </Typography>
        </Box>

        {/* Filter tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <ToggleButtonGroup
            value={activeFilter}
            exclusive
            onChange={(_, val) => val && setActiveFilter(val)}
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              '& .MuiToggleButton-root': {
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '50px !important',
                color: 'rgba(255, 255, 255, 0.7)',
                textTransform: 'none',
                fontWeight: 600,
                px: 2.5,
                py: 0.75,
                fontSize: '0.9rem',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 107, 107, 0.15) 100%)',
                  borderColor: 'rgba(0, 212, 255, 0.5)',
                  color: '#00d4ff',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.28) 0%, rgba(255, 107, 107, 0.2) 100%)',
                  },
                },
                '&:hover': {
                  borderColor: 'rgba(0, 212, 255, 0.3)',
                  color: '#00d4ff',
                },
              },
            }}
          >
            {filters.map((f) => (
              <ToggleButton key={f.value} value={f.value}>
                {t(f.labelKey)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={3}>
          {filteredProjects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={project.id}
              className="animate-fade-in-up"
              sx={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <Card 
                className="glass-card glass-card-hover"
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  ...(project.featured && {
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #00d4ff 0%, #ff6b6b 100%)',
                    },
                  }),
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 220,
                    background: project.image && project.image !== '' 
                      ? 'rgba(0, 0, 0, 0.3)' 
                      : 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 107, 107, 0.2) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
                    },
                  }}
                >
                  {project.image && project.image !== '' ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  ) : (
                    <Code sx={{ fontSize: 60, color: 'rgba(255, 255, 255, 0.3)', zIndex: 1 }} />
                  )}
                  
                  {project.featured && (
                    <Chip 
                      label={t('featured')} 
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 2,
                        background: 'rgba(0, 212, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        fontWeight: 600,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    />
                  )}
                </CardMedia>
                
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.35rem',
                      mb: 2,
                      color: 'rgba(255, 255, 255, 0.95)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    paragraph 
                    sx={{ 
                      flexGrow: 1,
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {(expandedTechs.includes(project.id) ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ 
                          background: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.2)',
                          color: 'rgba(0, 212, 255, 0.9)',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                    {project.technologies.length > 4 && !expandedTechs.includes(project.id) && (
                      <Tooltip 
                        title={
                          <Box sx={{ p: 1 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: 'block' }}>
                              Clique para ver todas as tecnologias:
                            </Typography>
                            {project.technologies.slice(4).map((tech) => (
                              <Typography key={tech} variant="caption" sx={{ display: 'block', mb: 0.5 }}>
                                • {tech}
                              </Typography>
                            ))}
                          </Box>
                        }
                        arrow
                        placement="top"
                      >
                        <Chip
                          label={`+${project.technologies.length - 4}`}
                          size="small"
                          onClick={() => toggleTechs(project.id)}
                          sx={{ 
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(0, 212, 255, 0.15)',
                              border: '1px solid rgba(0, 212, 255, 0.3)',
                              color: '#00d4ff',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        />
                      </Tooltip>
                    )}
                    {project.technologies.length > 4 && expandedTechs.includes(project.id) && (
                      <Chip
                        label="Ver menos"
                        size="small"
                        onClick={() => toggleTechs(project.id)}
                        sx={{ 
                          background: 'rgba(255, 107, 107, 0.15)',
                          border: '1px solid rgba(255, 107, 107, 0.3)',
                          color: '#ff6b6b',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(255, 107, 107, 0.25)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      />
                    )}
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    {project.githubUrl ? (
                      <Button
                        variant="outlined"
                        size="medium"
                        startIcon={<GitHub />}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          flex: 1,
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: '#00d4ff',
                            color: '#00d4ff',
                            background: 'rgba(0, 212, 255, 0.1)',
                          },
                        }}
                      >
                        Código
                      </Button>
                    ) : (
                      <Box
                        sx={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 0.75,
                          py: 1,
                          borderRadius: '10px',
                          border: '1px dashed rgba(255, 255, 255, 0.15)',
                          color: 'rgba(255, 255, 255, 0.55)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                        }}
                      >
                        <Lock sx={{ fontSize: '1rem' }} />
                        {project.isDemo ? t('demoLabel') : t('privateCode')}
                      </Box>
                    )}
                    
                    {project.liveUrl && (
                      <Button
                        variant="contained"
                        size="medium"
                        endIcon={<Launch />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modern-button"
                        sx={{
                          flex: 1,
                          background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontWeight: 600,
                          boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #66e4ff 0%, #00d4ff 100%)',
                            boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)',
                          },
                        }}
                      >
                        {project.isDemo ? 'Demo' : 'Ver Projeto'}
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box 
          className="glass-card animate-scale-in"
          sx={{ 
            textAlign: 'center', 
            mt: 10,
            p: { xs: 4, md: 6 },
            borderRadius: '24px',
          }}
        >
          <GitHub sx={{ fontSize: 60, color: '#00d4ff', mb: 2 }} />
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            {t('seeMoreProjects')}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 4,
              maxWidth: '600px',
              margin: '0 auto 32px auto',
            }}
          >
            Confira mais projetos e contribuições no meu perfil do GitHub
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://github.com/jpsantana6699"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHub />}
            className="modern-button"
            sx={{
              background: 'linear-gradient(135deg, #00d4ff 0%, #0096cc 100%)',
              px: 5,
              py: 1.75,
              fontSize: '1.1rem',
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(0, 212, 255, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #66e4ff 0%, #00d4ff 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(0, 212, 255, 0.4)',
              },
            }}
          >
            Ver GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
