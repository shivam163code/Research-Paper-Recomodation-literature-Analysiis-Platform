import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import paperRoutes from './routes/paperRoutes.js';
import libraryRoutes from './routes/libraryRoutes.js';
import analysisRoutes from './routes/analysisRoutes.js';
import { papers } from './data/papers.js';

const app = express();
const port = Number(process.env.PORT || 4000);
app.use(helmet());
const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:5174'].filter(Boolean);
app.use(cors({ origin: (origin, callback) => !origin || allowedOrigins.includes(origin) ? callback(null, true) : callback(new Error('Origin not allowed')) }));
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

app.get('/', (_req, res) => res.json({ success: true, data: { service: 'litera-api', version: 'v1', health: '/health', api: '/api/v1' }, message: 'Litera API is running' }));
app.get('/api/v1', (_req, res) => res.json({ success: true, data: { endpoints: ['/dashboard', '/papers/search', '/papers/:id', '/library', '/history'] }, message: 'Litera API v1' }));
app.get('/health', (_req, res) => res.json({ success: true, data: { service: 'litera-api', status: 'ok' }, message: 'Healthy' }));
app.get('/api/v1/dashboard', (_req, res) => res.json({ success: true, data: { recommended: papers, stats: { saved: 28, analyzed: 12, topics: 4, streak: 9 } }, message: 'Dashboard loaded' }));
app.use('/api/v1/papers', paperRoutes);
app.use('/api/v1/library', libraryRoutes);
app.use('/api/v1/analysis', analysisRoutes);
app.get('/api/v1/history', (_req, res) => res.json({ success: true, data: [], message: 'History loaded' }));
app.use((_req, res) => res.status(404).json({ success: false, message: 'Route not found', errorCode: 'NOT_FOUND' }));
app.use((error, _req, res, _next) => { console.error(error); res.status(500).json({ success: false, message: 'Unable to process request', errorCode: 'INTERNAL_ERROR' }); });

app.listen(port, () => console.log(`Litera API listening on http://localhost:${port}`));
