import { useEffect, useState } from 'react';
import { socket } from './socket';
import type { EventData } from './types/EventData';

function App() {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    socket.on('new_event', (data) => {
      setEvents((prev) => [data, ...prev]);
    });

    return () => {
      socket.off('new_event');
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Event Feed</h1>
      <ul className="space-y-2">
        {events.map((e, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded">
            <strong>{e.type}</strong> at {new Date(e.timestamp).toLocaleTimeString()} — value: {e.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
