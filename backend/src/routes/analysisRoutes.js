import { Router } from 'express';
import multer from 'multer';
import { analysisController } from '../controllers/analysisController.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 }, fileFilter: (_req, file, callback) => callback(null, file.mimetype === 'application/pdf') });
router.post('/upload', upload.single('file'), analysisController.upload);
export default router;
