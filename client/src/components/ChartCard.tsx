import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { EventData } from '../types/EventData';

type Props = {
  title: string;
  data: EventData[];
};

export const ChartCard = ({ title, data }: Props) => (
  <div className="bg-white shadow rounded p-4 mt-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="timestamp" tickFormatter={(str) => new Date(str).toLocaleTimeString()} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
