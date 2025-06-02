import type { EventData } from '../types/EventData';

export const EventTable = ({ events }: { events: EventData[] }) => (
  <div className="mt-4">
    <h2 className="text-lg font-semibold">Recent Events</h2>
    <table className="w-full mt-2 table-auto text-sm">
      <thead>
        <tr>
          <th>Type</th><th>Value</th><th>Time</th>
        </tr>
      </thead>
      <tbody>
        {events.map((e) => (
          <tr key={e.id} className="border-t">
            <td>{e.type}</td><td>{e.value}</td><td>{new Date(e.timestamp).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
