'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navbar
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    projects: 'Projetos',
    contact: 'Contato',

    // Hero Section
    hello: 'Olá, eu sou',
    name: 'João Pedro Santana',
    role: 'Desenvolvedor Pleno Full Stack',
    // eslint-disable-next-line @stylistic/max-len
    heroDescription: 'Trabalho na Lev Negócios criando os sistemas internos da empresa: APIs em Node.js, telas em Next.js, robôs de automação e dashboards. Também atendo projetos como freelancer.',
    heroAvailable: 'Disponível para freelance e contratos PJ (mensal/anual)',
    viewProjects: 'Ver Projetos',
    requestQuote: 'Solicitar Orçamento',
    downloadCV: 'Download CV',
    
    // About Page
    aboutMe: 'Sobre Mim',
    aboutSubtitle: 'Como saí da análise de dados e cheguei no desenvolvimento full stack.',
    myStory: 'Minha História',
    profileDescription: 'Desenvolvedor Full Stack Pleno | APIs, sistemas web, automação RPA e BI',

    // About Story
    // eslint-disable-next-line @stylistic/max-len
    storyPart1: 'Comecei em tecnologia pelos dados, como Analista de BI, montando dashboards no Power BI e consultas no SQL Server. Foi assim que entendi como a operação da empresa funciona por dentro, e quis passar a construir os sistemas que geram esses dados.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart2: 'Fui para o back-end e depois para o full stack. Hoje cuido da entrega inteira: a tela em Next.js, a API em Node.js e TypeScript, os robôs de automação, o banco de dados e o dashboard. Já fiz a API de operação, sistemas de débitos e de propostas e robôs que tiram trabalho repetitivo da equipe.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart3: 'Antes de escrever código, procuro entender o que o pessoal da operação precisa. Prefiro a solução mais simples que funcione em produção, com validação, logs e deploy em Docker, e deixo tudo documentado para o próximo dev.',


    // Skills
    techStack: 'Stack Tecnológica',
    backEnd: 'Back-End',
    database: 'Banco de Dados',
    frontEnd: 'Front-End',
    dataBI: 'Dados & BI',
    automation: 'Automação & RPA',
    toolsOrms: 'Ferramentas & ORMs',
    
    // Experience
    experience: 'Experiência',
    tapToExpand: 'Toque em cada etapa para ver os detalhes',

    // Experience entries
    levNegocios: 'Lev Negócios',
    levPeriod: 'Fev/2023 - Atual',
    farmaciaRole: 'Atendente, Caixa e Ajudante de Gerente – Farmácia DSG Farma',
    rhRole: 'Setor de RH e Facilities – Lev Negócios',
    
    // Career Timeline
    dataAnalystTitle: 'Analista de Dados e BI',
    dataAnalystPeriod: 'Fev/2023 - Jul/2023',
    dataAnalystPoint1: 'Dashboards no Power BI para acompanhar produção, comissões e metas.',
    dataAnalystPoint2: 'Análise de dados com SQL Server e elaboração de relatórios executivos.',
    
    backendTitle: 'Desenvolvedor Back-End',
    backendPeriod: 'Ago/2023 - Jan/2024',
    backendPoint1: 'APIs REST em Node.js, TypeScript e Express, com autenticação JWT, validação e tratamento de erros.',
    backendPoint2: 'Integrações entre os sistemas internos e automação de processos que eram feitos à mão.',
    backendPoint3: 'Modelagem e otimização de bancos relacionais (SQL Server, MySQL) e NoSQL (MongoDB), utilizando ORMs como Sequelize e Prisma.',
    
    fullstackTitle: 'Desenvolvedor Pleno Full Stack',
    fullstackPeriod: 'Fev/2024 - Atual',
    fullstackPoint1: 'API de operação em Node.js, TypeScript, Express e Sequelize, com cadastros, comissões e financeiro, documentada em Swagger.',
    fullstackPoint2: 'Sistemas novos do zero, back e front, como a gestão de propostas de crédito e o painel de débitos de parceiros.',
    fullstackPoint3: 'Robôs de automação com Playwright e Puppeteer para rotinas operacionais repetitivas.',
    fullstackPoint4: 'Landing pages institucionais, deploy em Docker e fluxo de Git com PR e code review.',
    
    previousRoles: 'Experiências Anteriores',
    otherCompanies: 'Diversos',
    previousRolesDescription: 'Experiências profissionais em setores não-técnicos, incluindo atendimento ao cliente, operações e recursos humanos.',
    
    // Contact
    getInTouch: 'Entre em Contato',
    contactSubtitle: 'Vamos conversar sobre seu projeto! Estou sempre aberto a novas oportunidades e desafios',
    sendMessage: 'Envie uma Mensagem',
    contactInfo: 'Informações de Contato',
    availability: 'Disponibilidade',
    availabilityText: 'Estou disponível para novos projetos e oportunidades de trabalho.',
    responseTime: 'Tempo de resposta: ',
    responseTimeValue: '24-48 horas',
    
    // Contact labels
    emailLabel: 'Email',
    phoneLabel: 'Telefone',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    locationLabel: 'Localização',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    
    // Form
    name_field: 'Nome',
    subject: 'Assunto',
    message: 'Mensagem',
    sendButton: 'Enviar pelo WhatsApp',
    whatsappNote: 'O WhatsApp abre com a sua mensagem pronta. Nada fica salvo neste site.',
    orText: 'ou',
    projectTypeLabel: 'Tipo de projeto',
    projectTypeSystem: 'Sistema / Software',
    projectTypeSite: 'Site / Landing Page',
    projectTypeData: 'BI & Dados',
    projectTypeOther: 'Outro / Ainda não sei',
    
    // Projects
    myProjects: 'Meus Projetos',
    projectsSubtitle: 'Explore alguns dos projetos que desenvolvi, desde aplicações web até soluções completas',
    viewProject: 'Ver Projeto',
    viewCode: 'Ver Código',
    seeMoreProjects: 'Quer ver mais projetos?',
    viewGithub: 'Ver GitHub',
    featured: 'Destaque',
    allTechs: 'Clique para ver todas as tecnologias:',
    seeLess: 'Ver menos',
    seeMoreProjectsDesc: 'Confira mais projetos e contribuições no meu perfil do GitHub',
    
    // Skill levels
    junior: 'Júnior',
    pleno: 'Pleno',
    senior: 'Sênior',

    // Services
    servicesTag: 'Serviços',
    servicesTitle: 'Como posso ajudar a sua empresa',
    servicesSubtitle: 'O que eu faço no dia a dia e posso fazer para a sua empresa.',
    serviceSystemsTitle: 'Sistemas Sob Medida',
    serviceSystemsOffer: 'Diagnóstico gratuito do seu sistema',
    serviceSystemsDesc: 'Painéis administrativos, automações, integrações e APIs, do banco de dados até a tela.',
    serviceFrontTitle: 'Sites & Landing Pages',
    serviceFrontOffer: 'Landing page pronta em até 10 dias',
    serviceFrontDesc: 'Sites institucionais e landing pages rápidos, que funcionam bem no celular e no computador.',
    serviceDataTitle: 'BI & Análise de Dados',
    serviceDataDesc: 'Dashboards no Power BI, consultas SQL e relatórios para acompanhar os números do negócio.',
    servicesCtaTitle: 'Tem um projeto em mente?',
    servicesCtaDesc: 'Me conta o que você precisa que eu te mando uma proposta.',
    talkOnWhatsapp: 'Chamar no WhatsApp',

    // Process / Como funciona
    processTag: 'Como funciona',
    processTitle: 'Simples e sem complicação',
    processSubtitle: 'Do primeiro "oi" até a entrega, você acompanha cada etapa de perto.',
    step1Title: 'Conversa inicial',
    step1Desc: 'Uma conversa rápida para entender o que você precisa.',
    step2Title: 'Proposta & escopo',
    step2Desc: 'Envio uma proposta clara, com prazo e valor definidos. Sem surpresas.',
    step3Title: 'Desenvolvimento',
    step3Desc: 'Coloco a mão na massa com atualizações frequentes do progresso.',
    step4Title: 'Entrega & suporte',
    step4Desc: 'Entrego tudo funcionando e ofereço suporte após a entrega.',
    freeFirstTalk: 'A primeira conversa é sempre gratuita',


    // Project filters
    filterAll: 'Todos',
    filterSystems: 'Sistemas',
    filterSites: 'Sites',
    filterData: 'BI & Dados',
    filterPersonal: 'Pessoais',
    categorySystem: 'Sistema',
    categorySite: 'Site',
    categoryData: 'BI & Dados',
    categoryPersonal: 'Pessoal',
    privateCode: 'Código privado',
    demoLabel: 'Demonstração',


    // Generic CTA
    letsWorkTitle: 'Vamos trabalhar juntos?',
    letsWorkDesc: 'Tem um projeto ou uma ideia em mente? Me chame e vamos tirar do papel.',

    // Common
    translate: 'Translate to English',
  },
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',

    // Hero Section
    hello: 'Hello, I am',
    name: 'João Pedro Santana',
    role: 'Full Stack Developer',
    // eslint-disable-next-line @stylistic/max-len
    heroDescription: 'I work at Lev Negócios building the company\'s internal systems: Node.js APIs, Next.js screens, automation robots and dashboards. I also take on freelance projects.',
    heroAvailable: 'Available for freelance & contract work (monthly/yearly)',
    viewProjects: 'View Projects',
    requestQuote: 'Request a Quote',
    downloadCV: 'Download CV',
    
    // About Page
    aboutMe: 'About Me',
    aboutSubtitle: 'How I went from data analysis to full stack development.',
    myStory: 'My Story',
    profileDescription: 'Mid-level Full Stack Developer | APIs, web systems, RPA automation and BI',

    // About Story
    // eslint-disable-next-line @stylistic/max-len
    storyPart1: 'I got into tech through data, as a BI Analyst, building Power BI dashboards and SQL Server queries. That is how I learned how the company\'s operation works from the inside, and I wanted to start building the systems that generate that data.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart2: 'I moved to back-end and then to full stack. Today I handle the whole delivery: the Next.js screen, the Node.js and TypeScript API, the automation robots, the database and the dashboard. I have built the operations API, debt and proposal systems, and robots that take repetitive work off the team.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart3: 'Before writing code, I try to understand what the operations team needs. I prefer the simplest solution that works in production, with validation, logs and Docker deployment, and I document everything for the next developer.',


    // Skills
    techStack: 'Tech Stack',
    backEnd: 'Back-End',
    database: 'Databases',
    frontEnd: 'Front-End',
    dataBI: 'Data & BI',
    automation: 'Automation & RPA',
    toolsOrms: 'Tools & ORMs',
    
    // Experience
    experience: 'Experience',
    tapToExpand: 'Tap each step to see the details',

    // Experience entries
    levNegocios: 'Lev Negócios',
    levPeriod: 'Feb/2023 - Present',
    farmaciaRole: 'Attendant, Cashier and Assistant Manager – DSG Farma Pharmacy',
    rhRole: 'HR and Facilities Department – Lev Negócios',
    
    // Career Timeline
    dataAnalystTitle: 'Data & BI Analyst',
    dataAnalystPeriod: 'Feb/2023 - Jul/2023',
    dataAnalystPoint1: 'Power BI dashboards to track production, commissions and targets.',
    dataAnalystPoint2: 'Data analysis with SQL Server and preparation of executive reports.',
    
    backendTitle: 'Back-End Developer',
    backendPeriod: 'Aug/2023 - Jan/2024',
    backendPoint1: 'REST APIs with Node.js, TypeScript and Express, with JWT authentication, validation and error handling.',
    backendPoint2: 'Integrations between internal systems and automation of processes that used to be done by hand.',
    backendPoint3: 'Modeling and optimization of relational (SQL Server, MySQL) and NoSQL (MongoDB) databases, using ORMs like Sequelize and Prisma.',
    
    fullstackTitle: 'Mid-level Full Stack Developer',
    fullstackPeriod: 'Feb/2024 - Present',
    fullstackPoint1: 'Operations API with Node.js, TypeScript, Express and Sequelize, covering registries, commissions and finance, documented in Swagger.',
    fullstackPoint2: 'New systems from scratch, back and front, such as credit proposal management and the partner debt dashboard.',
    fullstackPoint3: 'Automation robots with Playwright and Puppeteer for repetitive operational routines.',
    fullstackPoint4: 'Institutional landing pages, Docker deployment and a Git workflow with PRs and code review.',
    
    previousRoles: 'Previous Experience',
    otherCompanies: 'Various',
    previousRolesDescription: 'Professional experience in non-technical sectors, including customer service, operations and human resources.',
    
    // Contact
    getInTouch: 'Get In Touch',
    contactSubtitle: 'Let\'s talk about your project! I\'m always open to new opportunities and challenges',
    sendMessage: 'Send a Message',
    contactInfo: 'Contact Information',
    availability: 'Availability',
    availabilityText: 'I am available for new projects and job opportunities.',
    responseTime: 'Response time: ',
    responseTimeValue: '24-48 hours',
    
    // Contact labels
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    
    // Form
    name_field: 'Name',
    subject: 'Subject',
    message: 'Message',
    sendButton: 'Send via WhatsApp',
    whatsappNote: 'WhatsApp opens with your message ready. Nothing is stored on this site.',
    orText: 'or',
    projectTypeLabel: 'Project type',
    projectTypeSystem: 'System / Software',
    projectTypeSite: 'Website / Landing Page',
    projectTypeData: 'BI & Data',
    projectTypeOther: 'Other / Not sure yet',
    
    // Projects
    myProjects: 'My Projects',
    projectsSubtitle: 'Explore some of the projects I developed, from web applications to complete solutions',
    viewProject: 'View Project',
    viewCode: 'View Code',
    seeMoreProjects: 'Want to see more projects?',
    viewGithub: 'View GitHub',
    featured: 'Featured',
    allTechs: 'Click to see all technologies:',
    seeLess: 'See less',
    seeMoreProjectsDesc: 'Check out more projects and contributions on my GitHub profile',
    
    // Skill levels
    junior: 'Junior',
    pleno: 'Intermediate',
    senior: 'Senior',

    // Services
    servicesTag: 'Services',
    servicesTitle: 'How I can help your business',
    servicesSubtitle: 'What I do day to day and can do for your company.',
    serviceSystemsTitle: 'Custom Systems',
    serviceSystemsOffer: 'Free assessment of your system',
    serviceSystemsDesc: 'Admin panels, automations, integrations and APIs, from the database to the screen.',
    serviceFrontTitle: 'Websites & Landing Pages',
    serviceFrontOffer: 'Landing page ready in up to 10 days',
    serviceFrontDesc: 'Fast institutional websites and landing pages that work well on phones and desktops.',
    serviceDataTitle: 'BI & Data Analysis',
    serviceDataDesc: 'Power BI dashboards, SQL queries and reports to keep track of your business numbers.',
    servicesCtaTitle: 'Have a project in mind?',
    servicesCtaDesc: 'Tell me what you need and I\'ll send you a proposal.',
    talkOnWhatsapp: 'Chat on WhatsApp',

    // Process / How it works
    processTag: 'How it works',
    processTitle: 'Simple and hassle-free',
    processSubtitle: 'From the first "hi" to delivery, you follow every step closely.',
    step1Title: 'First chat',
    step1Desc: 'A quick chat to understand what you need.',
    step2Title: 'Proposal & scope',
    step2Desc: 'I send a clear proposal with a defined timeline and price. No surprises.',
    step3Title: 'Development',
    step3Desc: 'I get to work with frequent progress updates.',
    step4Title: 'Delivery & support',
    step4Desc: 'I deliver everything working and offer post-delivery support.',
    freeFirstTalk: 'The first conversation is always free',


    // Project filters
    filterAll: 'All',
    filterSystems: 'Systems',
    filterSites: 'Websites',
    filterData: 'BI & Data',
    filterPersonal: 'Personal',
    categorySystem: 'System',
    categorySite: 'Website',
    categoryData: 'BI & Data',
    categoryPersonal: 'Personal',
    privateCode: 'Private code',
    demoLabel: 'Demo',


    // Generic CTA
    letsWorkTitle: 'Let\'s work together?',
    letsWorkDesc: 'Got a project or an idea in mind? Reach out and let\'s make it happen.',

    // Common
    translate: 'Traduzir para Português',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
