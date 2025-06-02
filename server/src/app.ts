import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/events';



const app = express();
app.use('/api/events', eventRoutes);
app.use(cors());
app.use(express.json());

app.get('/api/events', async (req, res) => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('timestamp', { ascending: false })
    .limit(50);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});


// API routes can be added here later
// app.use('/api/events', eventsRouter);

export default app;
