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
    heroDescription: 'Desenvolvedor Full Stack Pleno com expertise em Back-End, Front-End e Análise de Dados. Criando soluções digitais completas, robustas e escaláveis com foco em APIs, dashboards e arquiteturas modernas.',
    heroAvailable: 'Disponível para freelance e contratos PJ (mensal/anual)',
    viewProjects: 'Ver Projetos',
    requestQuote: 'Solicitar Orçamento',
    downloadCV: 'Download CV',
    
    // About Page
    aboutMe: 'Sobre Mim',
    aboutSubtitle: 'Conheça um pouco mais sobre minha trajetória e paixão por tecnologia',
    myStory: 'Minha História',
    // eslint-disable-next-line @stylistic/max-len
    profileDescription: 'Desenvolvedor Pleno Full Stack com expertise em Back-End, Front-End e Análise de Dados | BI | APIs Robustas',
    
    // About Story
    // eslint-disable-next-line @stylistic/max-len
    storyPart1: 'Sou um Desenvolvedor Pleno Full Stack com experiência completa no ciclo de desenvolvimento de software, desde a concepção até a entrega. Minha jornada começou na área de dados como Analista de BI, evoluindo para o desenvolvimento back-end e posteriormente Full Stack, combinando análise de dados com desenvolvimento de aplicações robustas e escaláveis.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart2: 'No Back-End, domino Node.js, Express e TypeScript, trabalhando com bancos de dados SQL Server, MySQL e MongoDB. Utilizo ORMs como Sequelize, TypeORM e Prisma para modelagem de dados. No Front-End, desenvolvo interfaces modernas com React, Next.js e Material-UI. Na área de dados, crio dashboards estratégicos com Power BI e SQL para análises de negócio.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart3: 'Minha experiência multidisciplinar me permite atuar em todas as camadas da aplicação: desde a modelagem do banco de dados, desenvolvimento de APIs RESTful robustas, criação de interfaces intuitivas, até a construção de dashboards para análise de dados e tomada de decisão. Sempre busco aplicar as melhores práticas e entregar soluções de alta qualidade.',
    
    // Skills
    techStack: 'Stack Tecnológica',
    backEnd: 'Back-End',
    database: 'Banco de Dados',
    frontEnd: 'Front-End',
    dataBI: 'Dados & BI',
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
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint1: 'Criação de dashboards estratégicos no Power BI para suporte à tomada de decisão.',
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint2: 'Análise de dados com SQL Server e elaboração de relatórios executivos.',
    
    backendTitle: 'Desenvolvedor Back-End',
    backendPeriod: 'Ago/2023 - Jan/2024',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint1: 'Desenvolvimento de APIs RESTful robustas com Node.js, TypeScript e Express, implementando autenticação JWT, validações e tratamento de erros.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint2: 'Criação de integrações internas entre sistemas, automação de processos e microserviços escaláveis.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint3: 'Modelagem e otimização de bancos relacionais (SQL Server, MySQL) e NoSQL (MongoDB), utilizando ORMs como Sequelize e Prisma.',
    
    fullstackTitle: 'Desenvolvedor Pleno Full Stack',
    fullstackPeriod: 'Fev/2024 - Atual',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint1: 'Desenvolvimento completo de aplicações web: Back-End com Node.js/TypeScript/Express, Front-End com React/Next.js/Material-UI, e dashboards analíticos com Power BI.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint2: 'Atuação end-to-end em toda a cadeia: arquitetura de banco de dados, APIs RESTful, interfaces responsivas, análise de dados e deploy com Docker.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint3: 'Implementação de boas práticas: testes automatizados com Jest, documentação Swagger/OpenAPI, versionamento Git, CI/CD, e monitoramento de performance.',
    
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
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    locationLabel: 'Localização',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    
    // Form
    name_field: 'Nome',
    email_field: 'Email',
    subject: 'Assunto',
    message: 'Mensagem',
    sendButton: 'Enviar mensagem',
    sending: 'Enviando...',
    messageSent: 'Mensagem enviada! Retorno em breve. 🙌',
    sendError: 'Não consegui enviar agora. Tente pelo WhatsApp.',
    fallbackWhatsapp: 'Email indisponível — te levei pro WhatsApp.',
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
    
    // Skill levels
    junior: 'Júnior',
    pleno: 'Pleno',
    senior: 'Sênior',

    // Services
    servicesTag: 'Serviços',
    servicesTitle: 'Como posso ajudar a sua empresa',
    // eslint-disable-next-line @stylistic/max-len
    servicesSubtitle: 'Do back-end ao dashboard: soluções digitais completas, sob medida e escaláveis para o seu negócio.',
    serviceSystemsTitle: 'Sistemas Sob Medida',
    // eslint-disable-next-line @stylistic/max-len
    serviceSystemsDesc: 'Sistemas web completos para empresas: painéis administrativos, automações, integrações e APIs robustas — do banco de dados à interface.',
    serviceFrontTitle: 'Sites & Landing Pages',
    // eslint-disable-next-line @stylistic/max-len
    serviceFrontDesc: 'Sites institucionais e landing pages modernas, rápidas e responsivas, com foco em conversão e ótima experiência em qualquer dispositivo.',
    serviceDataTitle: 'BI & Análise de Dados',
    // eslint-disable-next-line @stylistic/max-len
    serviceDataDesc: 'Dashboards estratégicos em Power BI, modelagem de dados e relatórios que transformam números em decisões para o seu negócio.',
    servicesCtaTitle: 'Tem um projeto em mente?',
    // eslint-disable-next-line @stylistic/max-len
    servicesCtaDesc: 'Me conte o que precisa e eu retorno com uma proposta sem compromisso.',
    talkOnWhatsapp: 'Chamar no WhatsApp',

    // Process / Como funciona
    processTag: 'Como funciona',
    processTitle: 'Simples e sem complicação',
    processSubtitle: 'Do primeiro "oi" até a entrega, você acompanha cada etapa de perto.',
    step1Title: 'Conversa inicial',
    step1Desc: 'Entendo sua necessidade numa conversa rápida e sem compromisso.',
    step2Title: 'Proposta & escopo',
    step2Desc: 'Envio uma proposta clara, com prazo e valor definidos. Sem surpresas.',
    step3Title: 'Desenvolvimento',
    step3Desc: 'Coloco a mão na massa com atualizações frequentes do progresso.',
    step4Title: 'Entrega & suporte',
    step4Desc: 'Entrego tudo funcionando e ofereço suporte após a entrega.',
    freeFirstTalk: 'A primeira conversa é sempre gratuita',

    // Testimonials
    testimonialsTag: 'Depoimentos',
    testimonialsTitle: 'O que dizem sobre meu trabalho',
    testimonialsSubtitle: 'A confiança de quem já trabalhou comigo é meu melhor portfólio.',

    // Project filters
    filterAll: 'Todos',
    filterSystems: 'Sistemas',
    filterSites: 'Sites',
    filterData: 'BI & Dados',
    filterPersonal: 'Pessoais',
    privateCode: 'Código privado',
    demoLabel: 'Demonstração',

    // About stats
    statsExperience: 'Anos de experiência',
    statsProjects: 'Projetos entregues',
    statsTech: 'Tecnologias',

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
    role: 'Senior Full Stack Developer',
    // eslint-disable-next-line @stylistic/max-len
    heroDescription: 'Senior Full Stack Developer with expertise in Back-End, Front-End and Data Analysis. Creating complete, robust and scalable digital solutions focused on APIs, dashboards and modern architectures.',
    heroAvailable: 'Available for freelance & contract work (monthly/yearly)',
    viewProjects: 'View Projects',
    requestQuote: 'Request a Quote',
    downloadCV: 'Download CV',
    
    // About Page
    aboutMe: 'About Me',
    aboutSubtitle: 'Learn more about my journey and passion for technology',
    myStory: 'My Story',
    // eslint-disable-next-line @stylistic/max-len
    profileDescription: 'Senior Full Stack Developer with expertise in Back-End, Front-End and Data Analysis | BI | Robust APIs',
    
    // About Story
    // eslint-disable-next-line @stylistic/max-len
    storyPart1: 'I am a Senior Full Stack Developer with complete experience in the software development lifecycle, from conception to delivery. My journey began in the data area as a BI Analyst, evolving to back-end development and later Full Stack, combining data analysis with robust and scalable application development.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart2: 'In Back-End, I master Node.js, Express and TypeScript, working with SQL Server, MySQL and MongoDB databases. I use ORMs like Sequelize, TypeORM and Prisma for data modeling. In Front-End, I develop modern interfaces with React, Next.js and Material-UI. In data, I create strategic dashboards with Power BI and SQL for business analysis.',
    // eslint-disable-next-line @stylistic/max-len
    storyPart3: 'My multidisciplinary experience allows me to work across all application layers: from database modeling, robust RESTful API development, intuitive interface creation, to building dashboards for data analysis and decision-making. I always seek to apply best practices and deliver high-quality solutions.',
    
    // Skills
    techStack: 'Tech Stack',
    backEnd: 'Back-End',
    database: 'Databases',
    frontEnd: 'Front-End',
    dataBI: 'Data & BI',
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
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint1: 'Creation of strategic dashboards in Power BI to support decision-making.',
    // eslint-disable-next-line @stylistic/max-len
    dataAnalystPoint2: 'Data analysis with SQL Server and preparation of executive reports.',
    
    backendTitle: 'Back-End Developer',
    backendPeriod: 'Aug/2023 - Jan/2024',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint1: 'Development of robust RESTful APIs with Node.js, TypeScript and Express, implementing JWT authentication, validations and error handling.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint2: 'Creation of internal system integrations, process automation and scalable microservices.',
    // eslint-disable-next-line @stylistic/max-len
    backendPoint3: 'Modeling and optimization of relational (SQL Server, MySQL) and NoSQL (MongoDB) databases, using ORMs like Sequelize and Prisma.',
    
    fullstackTitle: 'Senior Full Stack Developer',
    fullstackPeriod: 'Feb/2024 - Present',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint1: 'Complete web application development: Back-End with Node.js/TypeScript/Express, Front-End with React/Next.js/Material-UI, and analytical dashboards with Power BI.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint2: 'End-to-end work across the entire chain: database architecture, RESTful APIs, responsive interfaces, data analysis and deployment with Docker.',
    // eslint-disable-next-line @stylistic/max-len
    fullstackPoint3: 'Implementation of best practices: automated testing with Jest, Swagger/OpenAPI documentation, Git version control, CI/CD, and performance monitoring.',
    
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
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    locationLabel: 'Location',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    
    // Form
    name_field: 'Name',
    email_field: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendButton: 'Send message',
    sending: 'Sending...',
    messageSent: 'Message sent! I\'ll reply soon. 🙌',
    sendError: 'Could not send right now. Try WhatsApp.',
    fallbackWhatsapp: 'Email unavailable — opening WhatsApp.',
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
    
    // Skill levels
    junior: 'Junior',
    pleno: 'Intermediate',
    senior: 'Senior',

    // Services
    servicesTag: 'Services',
    servicesTitle: 'How I can help your business',
    // eslint-disable-next-line @stylistic/max-len
    servicesSubtitle: 'From back-end to dashboard: complete, tailor-made and scalable digital solutions for your business.',
    serviceSystemsTitle: 'Custom Systems',
    // eslint-disable-next-line @stylistic/max-len
    serviceSystemsDesc: 'Complete web systems for companies: admin panels, automations, integrations and robust APIs — from the database to the interface.',
    serviceFrontTitle: 'Websites & Landing Pages',
    // eslint-disable-next-line @stylistic/max-len
    serviceFrontDesc: 'Modern, fast and responsive institutional websites and landing pages, focused on conversion and a great experience on any device.',
    serviceDataTitle: 'BI & Data Analysis',
    // eslint-disable-next-line @stylistic/max-len
    serviceDataDesc: 'Strategic Power BI dashboards, data modeling and reports that turn numbers into decisions for your business.',
    servicesCtaTitle: 'Have a project in mind?',
    // eslint-disable-next-line @stylistic/max-len
    servicesCtaDesc: 'Tell me what you need and I\'ll get back to you with a no-obligation proposal.',
    talkOnWhatsapp: 'Chat on WhatsApp',

    // Process / How it works
    processTag: 'How it works',
    processTitle: 'Simple and hassle-free',
    processSubtitle: 'From the first "hi" to delivery, you follow every step closely.',
    step1Title: 'First chat',
    step1Desc: 'I understand your needs in a quick, no-obligation conversation.',
    step2Title: 'Proposal & scope',
    step2Desc: 'I send a clear proposal with a defined timeline and price. No surprises.',
    step3Title: 'Development',
    step3Desc: 'I get to work with frequent progress updates.',
    step4Title: 'Delivery & support',
    step4Desc: 'I deliver everything working and offer post-delivery support.',
    freeFirstTalk: 'The first conversation is always free',

    // Testimonials
    testimonialsTag: 'Testimonials',
    testimonialsTitle: 'What people say about my work',
    testimonialsSubtitle: 'The trust of those who have worked with me is my best portfolio.',

    // Project filters
    filterAll: 'All',
    filterSystems: 'Systems',
    filterSites: 'Websites',
    filterData: 'BI & Data',
    filterPersonal: 'Personal',
    privateCode: 'Private code',
    demoLabel: 'Demo',

    // About stats
    statsExperience: 'Years of experience',
    statsProjects: 'Projects delivered',
    statsTech: 'Technologies',

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
