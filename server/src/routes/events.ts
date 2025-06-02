import { Router } from 'express';
import { EventData } from '../types/EventData';

const router = Router();

const recentEvents: EventData[] = [];

router.get('/', (req, res) => {
  res.json(recentEvents.slice(-50)); // last 50
});

export default router;
