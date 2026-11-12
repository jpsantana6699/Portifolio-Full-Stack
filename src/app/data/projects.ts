export type ProjectCategory = 'sistema' | 'site' | 'bi' | 'pessoal';

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  result?: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  isDemo?: boolean;
};

export const categoryLabelKeys: Record<ProjectCategory, string> = {
  sistema: 'categorySystem',
  site: 'categorySite',
  bi: 'categoryData',
  pessoal: 'categoryPersonal',
};

export const projectFilters: { value: 'all' | ProjectCategory; labelKey: string }[] = [
  { value: 'all', labelKey: 'filterAll' },
  { value: 'sistema', labelKey: 'filterSystems' },
  { value: 'site', labelKey: 'filterSites' },
  { value: 'bi', labelKey: 'filterData' },
  { value: 'pessoal', labelKey: 'filterPersonal' },
];

export const projects: Project[] = [
  {
    slug: 'lev-hub',
    category: 'sistema',
    title: 'Lev HUB',
    subtitle: 'Sistema interno de operação',
    result: 'A operação passou a trabalhar num único sistema, no lugar de planilhas espalhadas.',
    description: 'Sistema interno que centralizou a operação de uma empresa do setor financeiro, conectando áreas que antes trabalhavam com planilhas separadas. Fiz a API (cadastros, comissões e financeiro) e telas em Next.js que usam essa API.',
    image: '/images/hublev.png',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Sequelize', 'Next.js', 'React', 'MySQL', 'SQL Server', 'Docker', 'Swagger'],
    liveUrl: 'https://lev.hub.elegen.com.br/login',
    featured: true,
  },
  {
    slug: 'corban-hub',
    category: 'sistema',
    title: 'Corban Hub',
    subtitle: 'Painel de débitos de parceiros',
    result: 'A equipe acompanha todos os débitos num só lugar, sem montar planilha na mão.',
    description: 'Painel de acompanhamento dos débitos de parceiros feito do zero, back e front: indicadores por situação, detalhe de cada lançamento e exportação para Excel.',
    image: '/images/corban-hub-demo.svg',
    technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Express', 'React Query', 'Docker'],
    liveUrl: 'https://lev.corban-hub.elegen.com.br/login',
    featured: true,
  },
  {
    slug: 'propostas',
    category: 'sistema',
    title: 'Propostas',
    subtitle: 'API + painel de propostas de crédito',
    result: 'Propostas e envios de SMS organizados num só lugar, com busca e histórico.',
    description: 'Sistema de gestão de propostas de crédito feito do zero, back e front. A API cuida do cadastro, edição, busca e histórico de envios de SMS; o painel em Next.js tem tabela com filtros, ordenação, paginação e edição.',
    image: '/images/propostas-demo.svg',
    technologies: ['TypeScript', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'Zod', 'Next.js', 'React Query', 'Docker', 'Swagger'],
    liveUrl: 'https://beta.proposals.elegen.com.br/proposals/app/login',
    featured: true,
  },
  {
    slug: 'robos-rpa',
    category: 'sistema',
    title: 'Robôs RPA',
    subtitle: 'Automação de rotinas',
    result: 'Tarefas repetitivas que tomavam tempo da equipe passaram a rodar sozinhas.',
    description: 'Robôs que executam rotinas operacionais repetitivas em sistemas web de parceiros, como cadastro e manutenção de usuários. Cada pedido entra numa fila, o robô executa e registra o resultado, sem ninguém precisar fazer à mão.',
    image: '/images/robos-rpa-demo.svg',
    technologies: ['TypeScript', 'Node.js', 'Playwright', 'Puppeteer', 'Docker'],
    featured: true,
  },
  {
    slug: 'lev-landing',
    category: 'site',
    title: 'Lev Negócios',
    subtitle: 'Landing page institucional',
    result: 'Presença online profissional que leva o visitante direto para o contato.',
    description: 'Landing page institucional que apresenta os produtos financeiros da empresa e leva o visitante para o contato. Feita em Next.js, carrega rápido e funciona bem no celular.',
    image: '/images/page.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Material-UI'],
    liveUrl: 'https://www.levnegocios.com.br',
    featured: true,
  },
  {
    slug: 'voe',
    category: 'site',
    title: 'Voe Soluções Financeiras',
    subtitle: 'Landing page institucional',
    result: 'Site que passa credibilidade e transforma visitas em novos contatos.',
    description: 'Landing page institucional para uma empresa do setor financeiro, focada em gerar novos contatos. Componentes reutilizáveis para facilitar a manutenção e layout responsivo.',
    image: '/images/Voe.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Material-UI'],
    liveUrl: 'https://voesolucoesfinanceiras.com.br',
  },
  {
    slug: 'bi-comercial',
    category: 'bi',
    title: 'Painel Comercial',
    subtitle: 'Power BI',
    result: 'Metas e vendas acompanhadas num painel só, sem depender de relatório manual.',
    description: 'Dashboard comercial com faturamento, meta, ticket médio e vendas por canal, do modelo de dados aos gráficos. Demonstração com dados fictícios (o projeto real é confidencial).',
    image: '/images/bi-dashboard-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'ETL', 'Modelagem de Dados'],
    isDemo: true,
  },
  {
    slug: 'bi-financeiro',
    category: 'bi',
    title: 'Painel Financeiro',
    subtitle: 'Power BI',
    result: 'O resultado do mês fica claro, da receita ao lucro.',
    description: 'Dashboard financeiro com receita, custos, lucro e margem. Destaque para o gráfico waterfall, que mostra a composição do resultado (da receita ao lucro líquido), e o medidor de meta de faturamento. Demonstração com dados fictícios.',
    image: '/images/bi-financeiro-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'Modelagem de Dados'],
    isDemo: true,
  },
  {
    slug: 'bi-marketing',
    category: 'bi',
    title: 'Painel de Marketing',
    subtitle: 'Power BI',
    result: 'Mostra qual canal traz cliente e quanto cada um custa.',
    description: 'Dashboard de marketing com funil de conversão (visitantes, leads e clientes), ROI por canal, CAC e origem do tráfego. Demonstração com dados fictícios.',
    image: '/images/bi-marketing-demo.svg',
    technologies: ['Power BI', 'SQL', 'DAX', 'ETL'],
    isDemo: true,
  },
  {
    slug: 'aim-training',
    category: 'pessoal',
    title: 'Aim Training',
    subtitle: 'Treino de mira no navegador',
    description: 'Treino de mira grátis no navegador para quem joga FPS, com os modos Gridshot, Flick, Headshot, Spidershot, Tracking, Counter-strafe e Reflexo. Feito em TypeScript puro com Vite e testes em Vitest.',
    image: '/images/aim-training.png',
    technologies: ['TypeScript', 'Vite', 'Vitest', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/jpsantana6699/Aim_Training',
    liveUrl: 'https://treino-de-mira.vercel.app',
  },
  {
    slug: 'jotalives',
    category: 'pessoal',
    title: 'JotaLives',
    subtitle: 'Plataforma de clipes de live',
    description: 'Plataforma para exibição de clipes de live feita com React e Next.js, com API Routes e armazenamento em JSON para gerenciar os clipes.',
    image: '/images/jotalives.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'API Routes'],
    githubUrl: 'https://github.com/jpsantana6699/JotaLives',
  },
  {
    slug: 'soundpad',
    category: 'pessoal',
    title: 'SoundPad',
    subtitle: 'Sound pad de memes',
    description: 'Sound pad de memes feito com HTML, CSS e JavaScript, com botões que tocam áudios da internet e 4 temas, todos com modo claro e escuro.',
    image: '/images/soundpad.png',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/jpsantana6699/SoundPad',
  },
  {
    slug: 'jotapetech',
    category: 'pessoal',
    title: 'JotaPeTech',
    subtitle: 'Blog com SSR',
    description: 'Blog em Next.js com renderização no servidor (SSR), listagem de posts com paginação e conteúdo em Markdown.',
    image: '/images/jotapetech.jpg',
    technologies: ['React', 'Next.js', 'JavaScript', 'Remark', 'Winston'],
    githubUrl: 'https://github.com/jpsantana6699/JotaPeTech',
  },
  {
    slug: 'catalogo',
    category: 'pessoal',
    title: 'Catálogo de Livros e Filmes',
    subtitle: 'Projeto acadêmico em Java',
    description: 'Sistema web em Java para catalogar livros e filmes, com CRUD em Servlets, JSP, JDBC e MySQL, busca, validações e proteção contra SQL Injection. Projeto acadêmico com arquitetura MVC.',
    image: '/images/catalogo.jpeg',
    technologies: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Tomcat'],
    githubUrl: 'https://github.com/jpsantana6699/CRUD_JAVA',
  },
  {
    slug: 'api-mongo',
    category: 'pessoal',
    title: 'API REST com MongoDB',
    subtitle: 'Estudo de back-end',
    description: 'API REST em TypeScript com MongoDB e documentação Swagger/OpenAPI. Tem autenticação JWT e senhas criptografadas com Bcrypt.',
    image: '/images/openapi.png',
    technologies: ['TypeScript', 'Node.js', 'MongoDB', 'Express', 'Swagger', 'JWT'],
    githubUrl: 'https://github.com/jpsantana6699/Swagger-Api-Rest-com-OpenApi',
  },
  {
    slug: 'livraria',
    category: 'pessoal',
    title: 'Livraria Digital',
    subtitle: 'Curso de back-end da Alura',
    description: 'Livraria online feita no curso de back-end da Alura: front em React, API em Node.js com Express, MongoDB, autenticação JWT e templates EJS.',
    image: '/images/livro.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    githubUrl: 'https://github.com/jpsantana6699/Projeto-Alura-Back-end',
  },
  {
    slug: 'api-sequelize',
    category: 'pessoal',
    title: 'API com Sequelize',
    subtitle: 'Estudo de back-end',
    description: 'API REST em Node.js com Sequelize e SQLite, usada para praticar modelagem, migrations e organização de rotas.',
    image: '/images/node.png',
    technologies: ['JavaScript', 'Node.js', 'Sequelize', 'Express', 'SQLite'],
    githubUrl: 'https://github.com/jpsantana6699/Api-Node.js-com-Sequelize',
  },
];

export const projectHref = (project: Project) => project.liveUrl || project.githubUrl;
