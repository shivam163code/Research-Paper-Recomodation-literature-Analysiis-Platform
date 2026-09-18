import { Router } from 'express';
import { paperController } from '../controllers/paperController.js';

const router = Router();
router.get('/', paperController.saved);
router.post('/:paperId', paperController.save);
router.delete('/:paperId', paperController.remove);
export default router;
