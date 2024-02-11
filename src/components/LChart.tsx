import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const LChart = ({ data }: { data: object[] }) => {
  return (
    <ResponsiveContainer aspect={2} width="100%" height="100%">
      <LineChart data={data}>
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          strokeOpacity={0.7}
          stroke="#ffffff"
          dataKey={"name"}
          fontSize="0.8rem"
        />
        <YAxis strokeOpacity={0.7} stroke="#ffffff" fontSize="0.8rem" />
        <Line dataKey="name" fillOpacity={1} fill="url(#bgGrad)" />
        <Line dataKey="value" fillOpacity={1} fill="url(#bgGrad)" />
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.4} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LChart;
