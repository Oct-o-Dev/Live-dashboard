// src/sockets/connection.ts
import { Server } from 'socket.io';
import { EventData } from '../types/EventData';

const recentEvents: EventData[] = [];

export const setupSocket = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // Emit data every 3 seconds
    const interval = setInterval(() => {
      const fakeData: EventData = {
        id: crypto.randomUUID(),
        type: 'click',
        value: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString(),
      };

      // Push to local in-memory store
      recentEvents.push(fakeData);
      if (recentEvents.length > 100) recentEvents.shift();

      // Emit event to client
      socket.emit('eventData', fakeData);
    }, 3000);

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
      clearInterval(interval);
    });
  });
};

// Optional: export recentEvents if needed in REST API
export { recentEvents };
