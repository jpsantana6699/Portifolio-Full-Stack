'use client';

import { useState } from 'react';
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
import { CheckCircle, Code, GitHub, Launch, Lock } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    id: 0,
    category: 'sistema',
    title: 'Lev Negócios | HUB',
    result: 'A operação passou a trabalhar num único sistema, no lugar de planilhas espalhadas.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Sistema interno que centralizou a operação de uma empresa do setor financeiro, conectando áreas que antes trabalhavam com planilhas separadas. Fiz a API (cadastros, comissões e financeiro) e telas em Next.js que usam essa API.',
    image: '/images/hublev.png',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Sequelize', 'Next.js', 'React', 'MySQL', 'SQL Server', 'Docker', 'MaterialUI', 'SwaggerOpenAPI'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://lev.hub.elegen.com.br/login',
    featured: true,
  },
  {
    id: 14,
    category: 'sistema',
    title: 'Corban Hub | Débitos de Parceiros',
    result: 'A equipe acompanha todos os débitos num só lugar, sem montar planilha na mão.',
    description: 'Painel de acompanhamento dos débitos de parceiros feito do zero, back e front: indicadores por situação, detalhe de cada lançamento e exportação para Excel.',
    image: '/images/corban-hub-demo.svg',
    technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'React Query', 'Docker'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://lev.corban-hub.elegen.com.br/login',
    featured: true,
  },
  {
    id: 15,
    category: 'sistema',
    title: 'Propostas | API + Painel',
    result: 'Propostas e envios de SMS organizados num só lugar, com busca e histórico.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Sistema de gestão de propostas de crédito feito do zero, back e front. A API cuida do cadastro, edição, busca e histórico de envios de SMS; o painel em Next.js tem tabela com filtros, ordenação, paginação e edição.',
    image: '/images/propostas-demo.svg',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'Zod', 'Next.js', 'React Query', 'Docker', 'SwaggerOpenAPI'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://beta.proposals.elegen.com.br/proposals/app/login',
    featured: true,
  },
  {
    id: 16,
    category: 'sistema',
    title: 'Robôs RPA | Automação de Rotinas',
    result: 'Tarefas repetitivas que tomavam tempo da equipe passaram a rodar sozinhas.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Robôs que executam rotinas operacionais repetitivas em sistemas web de parceiros, como cadastro e manutenção de usuários. Cada pedido entra numa fila, o robô executa e registra o resultado, sem ninguém precisar fazer à mão.',
    image: '/images/robos-rpa-demo.svg',
    technologies: ['TypeScript', 'Node.js', 'Playwright', 'Puppeteer', 'Docker'],
    githubUrl: '',
    githubLabel: 'Privado',
    featured: true,
  },
  {
    id: 1,
    category: 'site',
    title: 'Lev Negócios | Landing Page',
    result: 'Presença online profissional que leva o visitante direto para o contato.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Landing page institucional que apresenta os produtos financeiros da empresa e leva o visitante para o contato. Feita em Next.js, carrega rápido e funciona bem no celular.',
    image: '/images/page.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Material-UI', 'CSS-in-JS'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://www.levnegocios.com.br',
    featured: false,
  },
  {
    id: 2,
    category: 'site',
    title: 'Voe Soluções Financeiras | Landing Page',
    result: 'Site que passa credibilidade e transforma visitas em novos contatos.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Landing page institucional para uma empresa do setor financeiro, focada em gerar novos contatos. Componentes reutilizáveis para facilitar a manutenção e layout responsivo.',
    image: '/images/Voe.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Material-UI', 'CSS-in-JS'],
    githubUrl: '',
    githubLabel: 'Privado',
    liveUrl: 'https://voesolucoesfinanceiras.com.br',
    featured: false,
  },
  {
    id: 11,
    category: 'bi',
    title: 'Painel Comercial (BI)',
    result: 'Metas e vendas acompanhadas num painel só, sem depender de relatório manual.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Dashboard comercial com faturamento, meta, ticket médio e vendas por canal, do modelo de dados aos gráficos. Demonstração com dados fictícios (o projeto real é confidencial).',
    image: '/images/bi-dashboard-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'ETL', 'Modelagem de Dados'],
    githubUrl: '',
    isDemo: true,
    featured: false,
  },
  {
    id: 12,
    category: 'bi',
    title: 'Painel Financeiro (BI)',
    result: 'O resultado do mês fica claro, da receita ao lucro.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Dashboard financeiro com receita, custos, lucro e margem. Destaque para o gráfico waterfall, que mostra a composição do resultado (da receita ao lucro líquido), e o medidor de meta de faturamento. Demonstração com dados fictícios.',
    image: '/images/bi-financeiro-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'Modelagem de Dados'],
    githubUrl: '',
    isDemo: true,
    featured: false,
  },
  {
    id: 13,
    category: 'bi',
    title: 'Painel de Marketing & Growth (BI)',
    result: 'Mostra qual canal traz cliente e quanto cada um custa.',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Dashboard de marketing com funil de conversão (visitantes → leads → clientes), ROI por canal, CAC e origem do tráfego. Transforma dados de aquisição em decisões de investimento. Demonstração com dados fictícios.',
    image: '/images/bi-marketing-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'ETL'],
    githubUrl: '',
    isDemo: true,
    featured: false,
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
    featured: false,
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
    featured: false,
  },
  {
    id: 5,
    category: 'pessoal',
    title: 'Aim Training | Treino de Mira',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Treino de mira grátis no navegador para quem joga FPS, com os modos Gridshot, Flick, Headshot, Spidershot, Tracking, Counter-strafe e Reflexo. Feito em TypeScript puro com Vite e testes em Vitest.',
    image: '/images/aim-training.png',
    technologies: ['TypeScript', 'Vite', 'Vitest', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/jpsantana6699/Aim_Training',
    liveUrl: 'https://treino-de-mira.vercel.app',
    featured: false,
  },
  {
    id: 6,
    category: 'pessoal',
    title: 'JotaPeTech',
    description: 'Blog em Next.js com renderização no servidor (SSR), listagem de posts com paginação e conteúdo em Markdown.',
    image: '/images/jotapetech.jpg',
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS', 'Material Icons', 'Winston', 'Remark'],
    githubUrl: 'https://github.com/jpsantana6699/JotaPeTech',
    featured: false,
  },
  {
    id: 7,
    category: 'pessoal',
    title: 'Catálogo de Livros e Filmes',
    // eslint-disable-next-line @stylistic/max-len
    description: 'Sistema web completo desenvolvido em Java para catalogar e gerenciar livros e filmes. Implementa CRUD completo com Servlets, JSP, JDBC e MySQL. Inclui busca avançada, validações frontend/backend e proteção contra SQL Injection usando PreparedStatement. Projeto acadêmico (ABP) focado em boas práticas de segurança e arquitetura MVC.',
    image: '/images/catalogo.jpeg',
    technologies: ['Java', 'Servlets', 'JSP', 'JSTL', 'JDBC', 'MySQL', 'Apache Tomcat', 'HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/jpsantana6699/CRUD_JAVA',
    liveUrl: '',
    featured: false,
  },
  {
    id: 8,
    category: 'pessoal',
    title: 'Sample - API Rest Typescript com MongoDB e Swagger openAPI',
    description: 'API REST em TypeScript com MongoDB e documentação Swagger/OpenAPI. Tem autenticação JWT e senhas criptografadas com Bcrypt.',
    image: '/images/openapi.png',
    technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Express', 'SwaggerOpenAPI', 'JWT', 'Bcrypt'],
    githubUrl: 'https://github.com/jpsantana6699/Swagger-Api-Rest-com-OpenApi/blob/main/docker-compose.yml',
    featured: false,
  },
  {
    id: 9,
    category: 'pessoal',
    title: 'Livraria Digital',
    description: 'Livraria online feita no curso de back-end da Alura: front em React, API em Node.js com Express, MongoDB, autenticação JWT e templates EJS.',
    image: '/images/livro.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'JWT', 'EJS', 'Mongoose'],
    githubUrl: 'https://github.com/jpsantana6699/Projeto-Alura-Back-end',
    featured: false,
  },
  {
    id: 10,
    category: 'pessoal',
    title: 'Sample - API Node.js com Sequelize',
    description: 'API REST em Node.js com Sequelize e SQLite, usada para praticar modelagem, migrations e organização de rotas.',
    image: '/images/node.png',
    technologies: ['JavaScript', 'Node.js', 'Sequelize', 'Express', 'Sqlite', 'Nodemon', 'ESLint'],
    githubUrl: 'https://github.com/jpsantana6699/Api-Node.js-com-Sequelize',
    featured: false,
  },
];

const categories: Record<string, { labelKey: string; color: string }> = {
  sistema: { labelKey: 'categorySystem', color: '#00d4ff' },
  site: { labelKey: 'categorySite', color: '#ff6b6b' },
  bi: { labelKey: 'categoryData', color: '#c084fc' },
  pessoal: { labelKey: 'categoryPersonal', color: '#3fb950' },
};

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
                  background: 'rgba(0, 212, 255, 0.12)',
                  borderColor: 'rgba(0, 212, 255, 0.5)',
                  color: '#00d4ff',
                  '&:hover': {
                    background: 'rgba(0, 212, 255, 0.18)',
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
                      background: '#00b4d8',
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
                      : '#161b22',
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
                  
                  <Chip
                    label={t(categories[project.category].labelKey)}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      zIndex: 2,
                      background: '#0d1117',
                      color: categories[project.category].color,
                      fontWeight: 700,
                      border: `1px solid ${categories[project.category].color}66`,
                    }}
                  />

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

                  {project.result && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1,
                        mb: 2,
                        p: 1.5,
                        borderRadius: '10px',
                        background: 'rgba(63, 185, 80, 0.08)',
                        border: '1px solid rgba(63, 185, 80, 0.25)',
                      }}
                    >
                      <CheckCircle sx={{ color: '#3fb950', fontSize: '1.1rem', mt: '2px' }} />
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500, lineHeight: 1.6 }}>
                        {project.result}
                      </Typography>
                    </Box>
                  )}

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
                              {t('allTechs')}
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
                            },
                          }}
                        />
                      </Tooltip>
                    )}
                    {project.technologies.length > 4 && expandedTechs.includes(project.id) && (
                      <Chip
                        label={t('seeLess')}
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
                        {t('viewCode')}
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
                          background: '#00b4d8',
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            background: '#0096c7',
                          },
                        }}
                      >
                        {project.isDemo ? 'Demo' : t('viewProject')}
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
            {t('seeMoreProjectsDesc')}
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
              background: '#00b4d8',
              px: 5,
              py: 1.75,
              fontSize: '1.1rem',
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                background: '#0096c7',
              },
            }}
          >
            {t('viewGithub')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
