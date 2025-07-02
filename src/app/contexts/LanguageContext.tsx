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
    projects: 'Projetos',
    contact: 'Contato',
    
    // Hero Section
    hello: 'Olá, eu sou',
    name: 'João Pedro Santana',
    role: 'Desenvolvedor Full Stack',
    // eslint-disable-next-line @stylistic/max-len
    heroDescription: 'Especializado em Back-End, criando soluções digitais robustas e escaláveis com foco em APIs e arquiteturas modernas.',
    viewProjects: 'Ver Projetos',
    downloadCV: 'Download CV',
    
    // About Page
    aboutMe: 'Sobre Mim',
    aboutSubtitle: 'Conheça um pouco mais sobre minha trajetória e paixão por tecnologia',
    myStory: 'Minha História',
    // eslint-disable-next-line @stylistic/max-len
    profileDescription: 'Desenvolvedor Full Stack especializado em Back-End, com foco em APIs robustas e arquiteturas escaláveis',
    
    // About Story
    // eslint-disable-next-line @stylistic/max-len
    storyPart1: 'Sou um desenvolvedor full stack com especialização em back-end, apaixonado por criar soluções digitais robustas e escaláveis. Minha jornada na programação começou com curiosidade e evoluiu para uma carreira focada no desenvolvimento de APIs e arquiteturas de sistemas.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart2: 'Tenho forte experiência em Node.js, Express e TypeScript para o back-end, com domínio em bancos de dados como SQL Server, MySQL e MongoDB. Trabalho diariamente com ORMs como Sequelize, TypeORM e Prisma, além de ferramentas como Docker, Git e Power BI para análise de dados.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart3: 'No front-end, tenho conhecimentos sólidos em React, Next.js e Material-UI, me permitindo desenvolver aplicações completas. Sempre busco aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento para entregar soluções de alta qualidade.',
    
    // Skills
    techStack: 'Stack Tecnológica',
    backEnd: 'Back-End',
    frontEnd: 'Front-End',
    toolsOrms: 'Ferramentas & ORMs',
    
    // Experience
    experience: 'Experiência',
    
    // Experience entries
    levNegocios: 'Lev Negócios',
    levPeriod: 'Fev/2023 - Atual',
    farmaciaRole: 'Atendente, Caixa e Ajudante de Gerente – Farmácia DSG Farma',
    rhRole: 'Setor de RH e Facilities – Lev Negócios',
    
    // Career Timeline
    dataAnalystTitle: 'Analista de Dados e BI',
    dataAnalystPeriod: 'Fev/2023 - Jul/2023',
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint1: 'Criação de dashboards estratégicos no Power BI para suporte à tomada de decisão.',
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint2: 'Análise de dados com SQL Server e elaboração de relatórios executivos.',
    
    backendTitle: 'Desenvolvedor Back-End',
    backendPeriod: 'Ago/2023 - Jan/2024',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint1: 'Desenvolvimento de APIs RESTful com Node.js, TypeScript e Express.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint2: 'Implementação de integrações internas e automações de processos.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint3: 'Trabalho com bancos de dados relacionais (SQL Server, MySQL) e NoSQL (MongoDB).',
    
    fullstackTitle: 'Desenvolvedor Full Stack',
    fullstackPeriod: 'Fev/2024 - Atual',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint1: 'Implementação de interfaces com React.js, Next.js, Material UI e Figma.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint2: 'Atuação em toda a cadeia de desenvolvimento da aplicação, do banco de dados ao front-end.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint3: 'Escrita de testes com Jest, documentação com Swagger, versionamento com Git e uso de containers com Docker.',
    
    previousRoles: 'Experiências Anteriores',
    otherCompanies: 'Diversos',
    // eslint-disable-next-line @stylistic/max-len
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
    locationLabel: 'Localização',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    
    // Form
    name_field: 'Nome',
    email_field: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    sendButton: 'Enviar Mensagem',
    messageSent: 'Mensagem enviada com sucesso!',
    
    // Projects
    myProjects: 'Meus Projetos',
    projectsSubtitle: 'Explore alguns dos projetos que desenvolvi, desde aplicações web até soluções completas',
    viewProject: 'Ver Projeto',
    viewCode: 'Ver Código',
    seeMoreProjects: 'Quer ver mais projetos?',
    viewGithub: 'Ver GitHub',
    featured: 'Destaque',
    
    // Common
    translate: 'Translate to English',
  },
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    hello: 'Hello, I am',
    name: 'João Pedro Santana',
    role: 'Full Stack Developer',
    // eslint-disable-next-line @stylistic/max-len
    heroDescription: 'Specialized in Back-End, creating robust and scalable digital solutions with focus on APIs and modern architectures.',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
    
    // About Page
    aboutMe: 'About Me',
    aboutSubtitle: 'Learn more about my journey and passion for technology',
    myStory: 'My Story',
    // eslint-disable-next-line @stylistic/max-len
    profileDescription: 'Full Stack Developer specialized in Back-End, focused on robust APIs and scalable architectures',
    
    // About Story
    // eslint-disable-next-line @stylistic/max-len
    storyPart1: 'I am a full stack developer specialized in back-end, passionate about creating robust and scalable digital solutions. My programming journey started with curiosity and evolved into a career focused on API development and system architectures.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart2: 'I have strong experience in Node.js, Express and TypeScript for back-end, with expertise in databases like SQL Server, MySQL and MongoDB. I work daily with ORMs like Sequelize, TypeORM and Prisma, plus tools like Docker, Git and Power BI for data analysis.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart3: 'On the front-end, I have solid knowledge in React, Next.js and Material-UI, allowing me to develop complete applications. I always seek to learn new technologies and apply development best practices to deliver high-quality solutions.',
    
    // Skills
    techStack: 'Tech Stack',
    backEnd: 'Back-End',
    frontEnd: 'Front-End',
    toolsOrms: 'Tools & ORMs',
    
    // Experience
    experience: 'Experience',
    
    // Experience entries
    levNegocios: 'Lev Negócios',
    levPeriod: 'Feb/2023 - Present',
    farmaciaRole: 'Attendant, Cashier and Assistant Manager – DSG Farma Pharmacy',
    rhRole: 'HR and Facilities Department – Lev Negócios',
    
    // Career Timeline
    dataAnalystTitle: 'Data & BI Analyst',
    dataAnalystPeriod: 'Feb/2023 - Jul/2023',
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint1: 'Creation of strategic dashboards in Power BI to support decision-making.',
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint2: 'Data analysis with SQL Server and preparation of executive reports.',
    
    backendTitle: 'Back-End Developer',
    backendPeriod: 'Aug/2023 - Jan/2024',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint1: 'Development of RESTful APIs with Node.js, TypeScript and Express.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint2: 'Implementation of internal integrations and process automation.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint3: 'Work with relational databases (SQL Server, MySQL) and NoSQL (MongoDB).',
    
    fullstackTitle: 'Full Stack Developer',
    fullstackPeriod: 'Feb/2024 - Present',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint1: 'Implementation of interfaces with React.js, Next.js, Material UI and Figma.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint2: 'Working across the entire application development chain, from database to front-end.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint3: 'Writing tests with Jest, documentation with Swagger, version control with Git and container usage with Docker.',
    
    previousRoles: 'Previous Experience',
    otherCompanies: 'Various',
    // eslint-disable-next-line @stylistic/max-len
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
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    
    // Form
    name_field: 'Name',
    email_field: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendButton: 'Send Message',
    messageSent: 'Message sent successfully!',
    
    // Projects
    myProjects: 'My Projects',
    projectsSubtitle: 'Explore some of the projects I developed, from web applications to complete solutions',
    viewProject: 'View Project',
    viewCode: 'View Code',
    seeMoreProjects: 'Want to see more projects?',
    viewGithub: 'View GitHub',
    featured: 'Featured',
    
    // Common
    translate: 'Traduzir para Português',
    
    // Skill levels
    junior: 'Junior',
    pleno: 'Intermediate',
    senior: 'Senior',
  },

  // Skill levels for PT
  junior: 'Júnior',
  pleno: 'Pleno',
  senior: 'Sênior',
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
