import { Router } from 'express';
import { paperController } from '../controllers/paperController.js';

const router = Router();
router.get('/search', paperController.search);
router.get('/:id', paperController.get);
export default router;
