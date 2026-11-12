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
    navWork: 'Trabalhos',
    navAbout: 'Sobre',
    navContact: 'Contato',
    navHome: 'Início',
    menu: 'Menu',
    socials: 'Redes',
    languageSwitch: 'EN',

    heroLocation: 'Passos, MG',
    heroCountry: 'Brasil',
    heroRemote: 'Atendo empresas de qualquer lugar, 100% remoto',
    heroRole: 'Desenvolvedor Full Stack Pleno · Dados & BI',
    heroExperience: '{years}+ anos na área',
    trustCompany: 'Desenvolvedor na Lev Negócios desde 2023',
    trustProduction: 'Sistemas em produção usados todo dia',
    trustEndToEnd: 'Do banco de dados à tela',
    experienceTitle: 'Experiência de mercado, não só de curso.',
    experienceDesc: 'Desde 2023 construo e mantenho os sistemas que uma empresa do setor financeiro usa todo dia. Comecei na análise de dados, passei pelo back-end e hoje sou full stack pleno.',
    statYears: 'anos na área',
    statSystems: 'sistemas em produção',
    statSites: 'sites para empresas',
    statRoles: 'cargos, de analista a pleno',
    today: 'Hoje',
    milestoneToday: 'Sistemas, automação e dados de ponta a ponta',
    aboutSubtitle: '{years}+ anos construindo sistemas que equipes reais usam todo dia.',
    heroAvailable: 'Disponível para projetos',

    moreWork: 'Ver todos os trabalhos',
    privateCode: 'Código privado',
    viewCode: 'Código',
    viewLive: 'Ver online',

    servicesLabel: 'O que eu entrego',
    servicesTitle: 'Do primeiro rascunho ao sistema rodando.',
    serviceSystemsTitle: 'Sistemas sob medida',
    serviceSystemsDesc: 'Painéis administrativos, automações, integrações e APIs, do banco de dados até a tela. Para empresas que ainda dependem de planilha e trabalho repetido.',
    serviceSystemsOffer: 'Diagnóstico gratuito do seu sistema',
    serviceSitesTitle: 'Sites e landing pages',
    serviceSitesDesc: 'Sites institucionais e landing pages rápidos, bonitos e pensados para transformar visita em contato, no celular e no computador.',
    serviceSitesOffer: 'Landing page pronta em até 10 dias',
    serviceDataTitle: 'Dados e BI',
    serviceDataDesc: 'Dashboards no Power BI, consultas SQL e relatórios para acompanhar os números do negócio sem montar planilha na mão.',
    serviceDataOffer: 'Painel com os números que importam',

    processLabel: 'Como funciona',
    processTitle: 'Simples, do primeiro oi à entrega.',
    step1Title: 'Conversa',
    step1Desc: 'Uma conversa rápida para entender o que você precisa. A primeira é sempre gratuita.',
    step2Title: 'Proposta',
    step2Desc: 'Escopo, prazo e valor claros, por escrito. Sem surpresa no meio do caminho.',
    step3Title: 'Construção',
    step3Desc: 'Você acompanha o progresso com entregas frequentes e pode ajustar no caminho.',
    step4Title: 'Entrega',
    step4Desc: 'Tudo no ar e funcionando, com suporte depois da entrega.',

    navCta: 'Fale comigo',
    heroRemoteShort: 'atendo empresas de qualquer lugar',
    ctaPrimary: 'Pedir diagnóstico gratuito',
    ctaSecondary: 'Ver projetos',
    serviceAutomationTitle: 'Automação e robôs',
    serviceAutomationDesc: 'Robôs que fazem sozinhos as tarefas repetidas em sistemas e portais, e avisam quando terminam.',
    workHomeTitle: 'Projetos em produção',
    ctaBandTitle: 'Tem um processo que ainda roda na planilha?',
    ctaBandDesc: 'Me conta como funciona hoje. Eu faço um diagnóstico gratuito e te digo o que dá para automatizar.',
    footerTagline: 'Desenvolvedor full stack desde 2023, em Passos, MG. Sistemas, sites, automações e dados para empresas de qualquer lugar.',
    footerNav: 'Navegação',

    rotatePrefix: 'Desenvolvo',
    rotateWords: 'sistemas sob medida|sites que vendem|robôs de automação|dashboards de dados|APIs e integrações',
    orbitTitle: 'Uma stack só, do banco à tela.',
    orbitDesc: 'As mesmas ferramentas que uso em sistemas que rodam todo dia em produção.',

    copied: 'Copiado!',
    localTime: 'Horário local',
    backToTop: 'Voltar ao topo',

    workLabel: 'Portfólio',
    workTitle: 'Trabalhos que resolvem problemas de verdade.',
    workSubtitle: 'Sistemas da empresa em que trabalho (código privado, só o que pode ser mostrado), sites para clientes, painéis de dados e projetos pessoais.',
    filterAll: 'Todos',
    filterSystems: 'Sistemas',
    filterSites: 'Sites',
    filterData: 'BI & Dados',
    filterPersonal: 'Pessoais',
    categorySystem: 'Sistema',
    categorySite: 'Site',
    categoryData: 'BI & Dados',
    categoryPersonal: 'Pessoal',
    demo: 'Demonstração',

    aboutLabel: 'Sobre',
    aboutTitle: 'Comecei pelos dados. Hoje construo o sistema inteiro.',
    storyPart1: 'Comecei em tecnologia como Analista de BI, montando dashboards no Power BI e consultas no SQL Server. Foi assim que entendi como a operação de uma empresa funciona por dentro, e quis passar a construir os sistemas que geram esses dados.',
    storyPart2: 'Fui para o back-end e depois para o full stack. Hoje cuido da entrega inteira: a tela em Next.js, a API em Node.js e TypeScript, os robôs de automação, o banco de dados e o dashboard.',
    storyPart3: 'Antes de escrever código, procuro entender o que o pessoal da operação precisa. Prefiro a solução mais simples que funcione em produção, com validação, logs e deploy em Docker, e deixo tudo documentado para o próximo dev.',
    downloadCv: 'Baixar currículo',
    experience: 'Experiência',
    stack: 'Stack',
    stackBack: 'Back-end',
    stackFront: 'Front-end',
    stackDb: 'Banco de dados',
    stackAutomation: 'Automação',
    stackData: 'Dados & BI',
    stackTools: 'Ferramentas',
    levPeriod: 'Fev/2023 — Atual',
    dataAnalystTitle: 'Analista de Dados e BI',
    dataAnalystPeriod: 'Fev/2023 — Jul/2023',
    dataAnalystDesc: 'Dashboards no Power BI para acompanhar produção, comissões e metas. Análise de dados com SQL Server e relatórios para a diretoria.',
    backendTitle: 'Desenvolvedor Back-end',
    backendPeriod: 'Ago/2023 — Jan/2024',
    backendDesc: 'APIs REST em Node.js, TypeScript e Express, com autenticação, validação e tratamento de erros. Integrações entre os sistemas internos e automação de processos que eram feitos à mão.',
    fullstackTitle: 'Desenvolvedor Full Stack Pleno',
    fullstackPeriod: 'Fev/2024 — Atual',
    fullstackDesc: 'API de operação com cadastros, comissões e financeiro. Sistemas novos do zero, back e front, como a gestão de propostas de crédito e o painel de débitos de parceiros. Robôs de automação com Playwright e Puppeteer, landing pages e deploy em Docker.',
    previousTitle: 'Antes da tecnologia',
    previousPeriod: '2020 — 2023',
    previousDesc: 'Atendimento, caixa e ajudante de gerente na Farmácia DSG Farma (2020–2023) e setor de RH e Facilities na Lev Negócios (2023).',

    contactPageLabel: 'Contato',
    contactPageTitle: 'Bora tirar sua ideia do papel?',
    contactPageDesc: 'Preencha e a mensagem abre pronta no WhatsApp. Nada fica salvo no site.',
    formName: 'Seu nome',
    formNamePlaceholder: 'Como posso te chamar?',
    formType: 'O que você precisa?',
    formMessage: 'Sua mensagem',
    formMessagePlaceholder: 'Conta um pouco do projeto, prazo e objetivo.',
    formSend: 'Enviar pelo WhatsApp',
    typeSystem: 'Sistema',
    typeSite: 'Site ou landing page',
    typeData: 'Dados e BI',
    typeOther: 'Outro',
    whatsappHello: 'Olá João! Meu nome é',
    whatsappType: 'Tipo de projeto',
    contactDetails: 'Contato direto',

    notFoundTitle: 'Página não encontrada.',
    notFoundBack: 'Voltar para o início',
  },
  en: {
    navWork: 'Work',
    navAbout: 'About',
    navContact: 'Contact',
    navHome: 'Home',
    menu: 'Menu',
    socials: 'Socials',
    languageSwitch: 'PT',

    heroLocation: 'Passos, MG',
    heroCountry: 'Brazil',
    heroRemote: 'Working with companies anywhere, fully remote',
    heroRole: 'Mid-level Full Stack Developer · Data & BI',
    heroExperience: '{years}+ years in the field',
    trustCompany: 'Developer at Lev Negócios since 2023',
    trustProduction: 'Systems in production, used every day',
    trustEndToEnd: 'From database to screen',
    experienceTitle: 'Real-world experience, not just courses.',
    experienceDesc: 'Since 2023 I have been building and maintaining the systems a financial company uses every day. I started in data analysis, moved to back-end and today I am a mid-level full stack developer.',
    statYears: 'years in the field',
    statSystems: 'systems in production',
    statSites: 'websites for companies',
    statRoles: 'roles, from analyst to mid-level',
    today: 'Today',
    milestoneToday: 'End-to-end systems, automation and data',
    aboutSubtitle: '{years}+ years building systems that real teams use every day.',
    heroAvailable: 'Available for projects',

    moreWork: 'See all work',
    privateCode: 'Private code',
    viewCode: 'Code',
    viewLive: 'Live',

    servicesLabel: 'What I deliver',
    servicesTitle: 'From the first sketch to a running system.',
    serviceSystemsTitle: 'Custom systems',
    serviceSystemsDesc: 'Admin panels, automations, integrations and APIs, from the database to the screen. For companies that still depend on spreadsheets and repetitive work.',
    serviceSystemsOffer: 'Free assessment of your system',
    serviceSitesTitle: 'Websites and landing pages',
    serviceSitesDesc: 'Fast, good-looking institutional websites and landing pages built to turn visits into leads, on phones and desktops.',
    serviceSitesOffer: 'Landing page ready in up to 10 days',
    serviceDataTitle: 'Data and BI',
    serviceDataDesc: 'Power BI dashboards, SQL queries and reports to track your business numbers without building spreadsheets by hand.',
    serviceDataOffer: 'A dashboard with the numbers that matter',

    processLabel: 'How it works',
    processTitle: 'Simple, from the first hello to delivery.',
    step1Title: 'Chat',
    step1Desc: 'A quick chat to understand what you need. The first one is always free.',
    step2Title: 'Proposal',
    step2Desc: 'Clear scope, timeline and price, in writing. No surprises along the way.',
    step3Title: 'Build',
    step3Desc: 'You follow the progress with frequent deliveries and can adjust along the way.',
    step4Title: 'Delivery',
    step4Desc: 'Everything live and working, with support after delivery.',

    navCta: 'Let\'s talk',
    heroRemoteShort: 'working with companies anywhere',
    ctaPrimary: 'Get a free assessment',
    ctaSecondary: 'See projects',
    serviceAutomationTitle: 'Automation and robots',
    serviceAutomationDesc: 'Robots that do repetitive tasks in systems and portals on their own, and let you know when they finish.',
    workHomeTitle: 'Projects in production',
    ctaBandTitle: 'Got a process that still runs on a spreadsheet?',
    ctaBandDesc: 'Tell me how it works today. I\'ll do a free assessment and tell you what can be automated.',
    footerTagline: 'Full stack developer since 2023, based in Passos, MG, Brazil. Systems, websites, automations and data for companies anywhere.',
    footerNav: 'Navigation',

    rotatePrefix: 'I build',
    rotateWords: 'custom systems|websites that sell|automation robots|data dashboards|APIs and integrations',
    orbitTitle: 'One stack, from database to screen.',
    orbitDesc: 'The same tools I use in systems running in production every day.',

    copied: 'Copied!',
    localTime: 'Local time',
    backToTop: 'Back to top',

    workLabel: 'Portfolio',
    workTitle: 'Work that solves real problems.',
    workSubtitle: 'Systems for the company I work at (private code, only what can be shown), websites for clients, data dashboards and personal projects.',
    filterAll: 'All',
    filterSystems: 'Systems',
    filterSites: 'Websites',
    filterData: 'BI & Data',
    filterPersonal: 'Personal',
    categorySystem: 'System',
    categorySite: 'Website',
    categoryData: 'BI & Data',
    categoryPersonal: 'Personal',
    demo: 'Demo',

    aboutLabel: 'About',
    aboutTitle: 'I started with data. Now I build the whole system.',
    storyPart1: 'I got into tech as a BI Analyst, building Power BI dashboards and SQL Server queries. That is how I learned how a company\'s operation works from the inside, and I wanted to start building the systems that generate that data.',
    storyPart2: 'I moved to back-end and then to full stack. Today I handle the whole delivery: the Next.js screen, the Node.js and TypeScript API, the automation robots, the database and the dashboard.',
    storyPart3: 'Before writing code, I try to understand what the operations team needs. I prefer the simplest solution that works in production, with validation, logs and Docker deployment, and I document everything for the next developer.',
    downloadCv: 'Download résumé',
    experience: 'Experience',
    stack: 'Stack',
    stackBack: 'Back-end',
    stackFront: 'Front-end',
    stackDb: 'Databases',
    stackAutomation: 'Automation',
    stackData: 'Data & BI',
    stackTools: 'Tools',
    levPeriod: 'Feb/2023 — Present',
    dataAnalystTitle: 'Data & BI Analyst',
    dataAnalystPeriod: 'Feb/2023 — Jul/2023',
    dataAnalystDesc: 'Power BI dashboards to track production, commissions and targets. Data analysis with SQL Server and reports for the board.',
    backendTitle: 'Back-end Developer',
    backendPeriod: 'Aug/2023 — Jan/2024',
    backendDesc: 'REST APIs with Node.js, TypeScript and Express, with authentication, validation and error handling. Integrations between internal systems and automation of processes that used to be done by hand.',
    fullstackTitle: 'Mid-level Full Stack Developer',
    fullstackPeriod: 'Feb/2024 — Present',
    fullstackDesc: 'Operations API covering registries, commissions and finance. New systems from scratch, back and front, such as credit proposal management and the partner debt dashboard. Automation robots with Playwright and Puppeteer, landing pages and Docker deployment.',
    previousTitle: 'Before tech',
    previousPeriod: '2020 — 2023',
    previousDesc: 'Customer service, cashier and assistant manager at DSG Farma pharmacy (2020–2023) and HR and Facilities at Lev Negócios (2023).',

    contactPageLabel: 'Contact',
    contactPageTitle: 'Ready to get your idea off the ground?',
    contactPageDesc: 'Fill it in and the message opens ready on WhatsApp. Nothing is stored on the site.',
    formName: 'Your name',
    formNamePlaceholder: 'What should I call you?',
    formType: 'What do you need?',
    formMessage: 'Your message',
    formMessagePlaceholder: 'Tell me about the project, deadline and goal.',
    formSend: 'Send via WhatsApp',
    typeSystem: 'System',
    typeSite: 'Website or landing page',
    typeData: 'Data and BI',
    typeOther: 'Other',
    whatsappHello: 'Hi João! My name is',
    whatsappType: 'Project type',
    contactDetails: 'Direct contact',

    notFoundTitle: 'Page not found.',
    notFoundBack: 'Back to home',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
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
