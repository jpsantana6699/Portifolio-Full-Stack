import { Router } from 'express';
import { PersonalController } from '../controllers/personalController';
import { uploadProfileImage } from '../middleware/upload';

const router = Router();

// GET /api/personal - Buscar informações pessoais
router.get('/', PersonalController.getPersonalInfo);

// PUT /api/personal - Atualizar informações pessoais
router.put('/', PersonalController.updatePersonalInfo);

// POST /api/personal/upload-image - Upload de foto de perfil
router.post('/upload-image', uploadProfileImage, PersonalController.uploadProfileImage);

export default router;
