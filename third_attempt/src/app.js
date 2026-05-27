import express from 'express';

const app = express();

// express json middleware
app.use(express.json());

export default app;
