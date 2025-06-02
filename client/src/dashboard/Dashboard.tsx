import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import type { EventData } from '../types/EventData';
import { StatBox } from '../components/StatBox';
import { EventTable } from '../components/EventTable';
import { ChartCard } from '../components/ChartCard';
import { supabase } from '../lib/supabaseClient';

const socket = io('http://localhost:5000'); // use your backend URL

export const Dashboard = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    socket.on('eventData', (data: EventData) => {
      setEvents((prev) => [...prev.slice(-49), data]); // keep last 50
    });

    return () => {
      socket.off('eventData');
    };
  }, []);

  // ✅ Fetch the user info here safely
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserEmail(user?.email ?? null);
    };

    getUser();
  }, []);

  const avgValue = events.length
    ? (events.reduce((acc, e) => acc + e.value, 0) / events.length).toFixed(2)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight drop-shadow">
              Real-Time Dashboard
            </h1>
            {userEmail && (
              <p className="text-sm text-gray-500 mt-1">Logged in as: {userEmail}</p>
            )}
          </div>
          <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold shadow">
            Live
          </span>
        </header>

        {/* Stat boxes */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <StatBox title="Total Events" value={events.length} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <StatBox title="Average Value" value={+avgValue} color="text-green-600" />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="text-gray-500 text-sm mb-1">Last Event Type</div>
            <div className="text-xl font-bold text-indigo-600">
              {events[events.length - 1]?.type || '-'}
            </div>
          </div>
        </section>

        {/* Chart and Table */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <ChartCard title="Event Values Over Time" data={events} />
        </section>
        <section className="bg-white rounded-xl shadow-lg p-6">
          <EventTable events={events} />
        </section>
      </div>
    </div>
  );
};