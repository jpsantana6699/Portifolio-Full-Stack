import { Router } from 'express';
import { ProjectController } from '../controllers/projectController';
import { uploadProjectImage } from '../middleware/upload';

const router = Router();

// GET /api/projects - Buscar todos os projetos
router.get('/', ProjectController.getAllProjects);

// GET /api/projects/featured - Buscar projetos em destaque
router.get('/featured', ProjectController.getFeaturedProjects);

// GET /api/projects/:id - Buscar projeto por ID
router.get('/:id', ProjectController.getProjectById);

// POST /api/projects - Criar novo projeto
router.post('/', uploadProjectImage, ProjectController.createProject);

// PUT /api/projects/:id - Atualizar projeto
router.put('/:id', uploadProjectImage, ProjectController.updateProject);

// DELETE /api/projects/:id - Deletar projeto
router.delete('/:id', ProjectController.deleteProject);

export default router;
