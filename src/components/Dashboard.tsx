import { createContext, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import DataTable from "./Table";
import CreatePopup from "./CreatePopup";
import { Input } from "./ui/input";
import LChart from "./LineChart";

export const Context = createContext<object[]>([]);

export default function Dashoard() {
  const [ticker, setTicker] = useState("$");
  const [row, setRow] = useState<object[]>([
    {
      name: "First",
      value: 1900,
    },
    {
      name: "second",
      value: 1500,
    },
    {
      name: "third",
      value: 2200,
    },
  ]);

  return (
    <Context.Provider value={[row, setRow]}>
      <div className="min- h-screen relative  justify-center items-center grid grid-cols-2 gap-6">
        <div className="absolute top-5  right-5">
          <ModeToggle />
        </div>
        <div className="flex justify-center items-centerp-16">
          <div className="flex flex-col items-end  gap-2">
            <p className=" self-center  text-3xl font-extrabold my-4">Data</p>
            <DataTable />
            <div className="flex gap-4">
              <Input
                id="ticker-input"
                value={ticker}
                placeholder="Ticker"
                onChange={(e) => {
                  setTicker(e.target.value);
                }}
              />
              <CreatePopup />
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-96  justify-center items-center gap-2 p-16">
          <p className=" text-3xl font-extrabold my-4">Chart</p>
          {/* <Chart ticker={ticker} data={row} /> */}
          <LChart data={row} />
        </div>
      </div>
    </Context.Provider>
  );
}
