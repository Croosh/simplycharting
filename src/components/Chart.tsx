import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import FileSaver from "file-saver";
import { Button } from "./ui/button";

export default function Chart({
  data,
  ticker,
}: {
  data: Array<object>;
  ticker: string;
}) {
  const handleAreaDownload = async () => {
    // console.log("Pressed");
    // const element = document.querySelector(".recharts-wrapper");
    // const svgURL = new XMLSerializer().serializeToString(element);
    // const svgBlob = new Blob([svgURL], { type: "image/svg+xml;charset=utf-8" });
    // FileSaver.saveAs(svgBlob, "chart.svg");
  };
  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} className="recharts-wrapper">
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
            tickFormatter={(value) => `${ticker} ${value}`}
          />
          <Bar
            dataKey="value"
            fill="#f4f4f4"
            radius={[4, 4, 0, 0]}
            className=" bg-slate-900"
          />
        </BarChart>
      </ResponsiveContainer>
      <Button onClick={() => handleAreaDownload()}>Export</Button>
    </>
  );
}
