import { createContext, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import DataTable from "./Table";
import CreatePopup from "./CreatePopup";
import Chart from "./Chart";

export const Context = createContext<object[]>([]);

export default function Dashoard() {
  const [row, setRow] = useState<object[]>([
    {
      name: "First",
      value: 1900,
    },
    {
      name: "second",
      value: 2000,
    },
    {
      name: "third",
      value: 2200,
    },
  ]);

  return (
    <Context.Provider value={[row, setRow]}>
      <div className=" h-screen relative  justify-center items-center grid grid-cols-2 gap-6">
        <div className="absolute top-5  right-5">
          <ModeToggle />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className=" text-3xl font-extrabold my-4">Data</p>
          <DataTable />
          <CreatePopup />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <p className=" text-3xl font-extrabold my-4">Chart</p>
          <Chart data={row} />
        </div>
      </div>
    </Context.Provider>
  );
}
