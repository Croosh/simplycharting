import { createContext, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import DataTable from "./Table";
import CreatePopup from "./CreatePopup";

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
      <div className=" h-screen relative  justify-center items-center flex flex-col gap-6">
        <div className="absolute top-1  right-5">
          <ModeToggle />
        </div>
        <div className="flex flex-col justify-end items-end">
          <DataTable />
          <CreatePopup />
        </div>
      </div>
    </Context.Provider>
  );
}
