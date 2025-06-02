type StatBoxProps = {
  title: string;
  value: number;
  color?: string;
};

export const StatBox = ({ title, value, color = 'text-blue-600' }: StatBoxProps) => (
  <div className="bg-white shadow rounded p-4">
    <p className="text-sm text-gray-500">{title}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);
