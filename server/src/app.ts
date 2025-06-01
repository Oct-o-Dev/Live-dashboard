import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// API routes can be added here later
// app.use('/api/events', eventsRouter);

export default app;
