import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Chart({ data }: { data: Array<object> }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="value"
          fill="#f4f4f4"
          radius={[4, 4, 0, 0]}
          className=" bg-slate-900"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
