import { Router } from 'express';
import { ContactController } from '../controllers/contactController';

const router = Router();

// GET /api/contacts - Buscar todos os contatos (admin)
router.get('/', ContactController.getAllContacts);

// GET /api/contacts/unread - Buscar contatos não lidos (admin)
router.get('/unread', ContactController.getUnreadContacts);

// POST /api/contacts - Criar novo contato (formulário público)
router.post('/', ContactController.createContact);

// PUT /api/contacts/:id/read - Marcar contato como lido (admin)
router.put('/:id/read', ContactController.markContactAsRead);

export default router;
