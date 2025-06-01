import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
  new_event: (data: any) => void;
}

interface ClientToServerEvents {
  // You can define emits here
}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:5000');
