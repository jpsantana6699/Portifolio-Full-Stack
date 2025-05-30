// filepath: c:\Users\João Pedro Santana\Documents\projects\Portifolio\backend\src\models\database.ts
import { Contact, Education, Experience, PersonalInfo, Project, SocialLink } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface DatabaseSchema {
  personalInfo: PersonalInfo;
  projects: Project[];
  contacts: Contact[];
}

// Dados iniciais para o banco de dados em memória
const initialData: DatabaseSchema = {
  personalInfo: {
    id: uuidv4(),
    name: 'João Pedro Santana',
    title: 'Desenvolvedor Full Stack',
    bio: 'Desenvolvedor apaixonado por criar soluções web inovadoras. Especializado em Node.js, React, e TypeScript, com experiência em desenvolvimento de aplicações escaláveis e de alta performance.',
    location: 'São Paulo, Brasil',
    age: 28,
    profileImageUrl: '/uploads/profile.jpg',
    resumeUrl: '/uploads/resume.pdf',
    skills: [
      'JavaScript', 'TypeScript', 'React', 'Node.js', 
      'Express', 'MongoDB', 'PostgreSQL', 'HTML5',
      'CSS3', 'Tailwind CSS', 'Git', 'Docker'
    ],
    experience: [
      {
        id: uuidv4(),
        company: 'TechInnovate',
        position: 'Desenvolvedor Full Stack Senior',
        description: 'Desenvolvimento de aplicações web de alta performance utilizando React, Node.js e TypeScript. Implementação de arquitetura de microsserviços e CI/CD pipelines.',
        startDate: new Date('2020-01-01'),
        current: true
      },
      {
        id: uuidv4(),
        company: 'WebSolutions',
        position: 'Desenvolvedor Front-end',
        description: 'Criação de interfaces de usuário responsivas e acessíveis com React. Implementação de testes automatizados e integração com APIs REST.',
        startDate: new Date('2018-03-01'),
        endDate: new Date('2019-12-31'),
        current: false
      }
    ],
    education: [
      {
        id: uuidv4(),
        institution: 'Universidade de São Paulo',
        degree: 'Mestrado',
        field: 'Ciência da Computação',
        startDate: new Date('2016-02-01'),
        endDate: new Date('2018-12-01'),
        current: false
      },
      {
        id: uuidv4(),
        institution: 'Universidade Estadual de Campinas',
        degree: 'Bacharelado',
        field: 'Sistemas de Informação',
        startDate: new Date('2012-02-01'),
        endDate: new Date('2016-12-01'),
        current: false
      }
    ],
    socialLinks: [
      {
        id: uuidv4(),
        platform: 'GitHub',
        url: 'https://github.com/jpedrosantana',
        icon: 'github'
      },
      {
        id: uuidv4(),
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/jpedrosantana',
        icon: 'linkedin'
      },
      {
        id: uuidv4(),
        platform: 'Twitter',
        url: 'https://twitter.com/jpedrosantana',
        icon: 'twitter'
      }
    ],
    updatedAt: new Date()
  },
  projects: [
    {
      id: uuidv4(),
      title: 'E-commerce Platform',
      description: 'Uma plataforma completa de e-commerce com painel administrativo, gateway de pagamento e sistema de gestão de estoque.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/jpedrosantana/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform-demo.netlify.app',
      imageUrl: '/uploads/projects/ecommerce.jpg',
      featured: true,
      createdAt: new Date('2021-06-15'),
      updatedAt: new Date('2021-10-20')
    },
    {
      id: uuidv4(),
      title: 'Task Manager App',
      description: 'Aplicativo de gerenciamento de tarefas com funcionalidades de categorização, lembretes e compartilhamento de tarefas entre equipes.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/jpedrosantana/task-manager',
      liveUrl: 'https://task-manager-app.vercel.app',
      imageUrl: '/uploads/projects/task-manager.jpg',
      featured: true,
      createdAt: new Date('2022-02-10'),
      updatedAt: new Date('2022-04-05')
    },
    {
      id: uuidv4(),
      title: 'Blog CMS',
      description: 'Sistema de gerenciamento de conteúdo para blogs com editor WYSIWYG, SEO tools e analytics integrados.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com/jpedrosantana/blog-cms',
      imageUrl: '/uploads/projects/blog-cms.jpg',
      featured: false,
      createdAt: new Date('2021-11-05'),
      updatedAt: new Date('2022-01-15')
    },
    {
      id: uuidv4(),
      title: 'Weather Dashboard',
      description: 'Dashboard para visualização de dados meteorológicos em tempo real com mapas interativos e alertas personalizados.',
      technologies: ['Vue.js', 'D3.js', 'OpenWeatherAPI', 'Leaflet'],
      githubUrl: 'https://github.com/jpedrosantana/weather-dashboard',
      liveUrl: 'https://weather-dash.netlify.app',
      imageUrl: '/uploads/projects/weather.jpg',
      featured: false,
      createdAt: new Date('2022-05-20'),
      updatedAt: new Date('2022-06-10')
    },
    {
      id: uuidv4(),
      title: 'Fitness Tracker',
      description: 'Aplicativo móvel para rastreamento de exercícios físicos, dieta e progresso com gráficos e estatísticas personalizadas.',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/jpedrosantana/fitness-tracker',
      imageUrl: '/uploads/projects/fitness.jpg',
      featured: true,
      createdAt: new Date('2022-07-15'),
      updatedAt: new Date('2022-08-22')
    }
  ],
  contacts: []
};

// Implementação do padrão Singleton para a classe Database
export class Database {
  private static instance: Database;
  private data: DatabaseSchema;

  private constructor() {
    this.data = initialData;
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // Métodos para projetos
  public getAllProjects(): Project[] {
    return [...this.data.projects];
  }

  public getFeaturedProjects(): Project[] {
    return this.data.projects.filter(project => project.featured);
  }

  public getProjectById(id: string): Project | undefined {
    return this.data.projects.find(project => project.id === id);
  }

  public addProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
    const newProject: Project = {
      ...project,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.data.projects.push(newProject);
    return newProject;
  }

  // Métodos para informações pessoais
  public getPersonalInfo(): PersonalInfo {
    return { ...this.data.personalInfo };
  }

  public updatePersonalInfo(personalInfo: Partial<PersonalInfo>): PersonalInfo {
    this.data.personalInfo = {
      ...this.data.personalInfo,
      ...personalInfo,
      updatedAt: new Date()
    };
    return this.data.personalInfo;
  }

  // Métodos para contatos
  public getAllContacts(): Contact[] {
    return [...this.data.contacts];
  }

  public addContact(contact: Omit<Contact, 'id' | 'read' | 'createdAt'>): Contact {
    const newContact: Contact = {
      ...contact,
      id: uuidv4(),
      read: false,
      createdAt: new Date()
    };
    this.data.contacts.push(newContact);
    return newContact;
  }
}

export default Database;