import express from 'express';
import noteRoutes from './routes/noteRoutes.js';

const app = express();

// express json middleware
app.use(express.json());

// mount routes
app.use('/api/notes', noteRoutes);

export default app;
