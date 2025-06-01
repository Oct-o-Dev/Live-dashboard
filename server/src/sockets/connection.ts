import { Server, Socket } from 'socket.io';

export const setupSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`Client connected: ${socket.id}`);

    setInterval(() => {
      const fakeData = {
        type: 'click_event',
        timestamp: new Date().toISOString(),
        value: Math.floor(Math.random() * 100),
      };
      socket.emit('new_event', fakeData);
    }, 5000);

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};
