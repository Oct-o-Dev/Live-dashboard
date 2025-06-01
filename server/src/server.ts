import http from 'http';
import app from './app';
import { Server } from 'socket.io';
import { setupSocket } from './sockets/connection';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

setupSocket(io); // Pass io to your socket handler

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
