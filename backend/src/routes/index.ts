import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import projectRoutes from './projects';
import contactRoutes from './contacts';
import personalRoutes from './personal';

const router = Router();

// Definindo as rotas da API
router.use('/projects', projectRoutes);
router.use('/contacts', contactRoutes);
router.use('/personal', personalRoutes);

// Rota de health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API do Portfólio funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Rota de debug para ambiente de desenvolvimento
if (process.env.NODE_ENV !== 'production') {
  router.get('/debug', (req, res) => {
    // Verifica a estrutura de diretórios de upload
    const uploadsPath = path.join(__dirname, '../../uploads');
    let uploadsExists = false;
    let projectsExists = false;
    let files: string[] = [];

    try {
      uploadsExists = fs.existsSync(uploadsPath);
      if (uploadsExists) {
        files = fs.readdirSync(uploadsPath);
        const projectsPath = path.join(uploadsPath, 'projects');
        projectsExists = fs.existsSync(projectsPath);
      }
    } catch (error) {
      console.error('Erro ao verificar diretórios:', error);
    }

    res.json({
      success: true,
      debug: {
        env: process.env.NODE_ENV || 'development',
        dirs: {
          uploadsExists,
          projectsExists,
          uploadsPath,
          files
        },
        memory: process.memoryUsage(),
        uptime: process.uptime()
      }
    });
  });
}

export default router;
