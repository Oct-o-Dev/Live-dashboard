// src/server.ts
import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app';
import { setupSocket } from './sockets/connection';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

setupSocket(io);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
