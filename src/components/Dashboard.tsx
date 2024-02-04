import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import Chart from "./Chart";
import { ModeToggle } from "./mode-toggle";
import DataTable from "./Table";
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
  const [labelValue, newLabelValue] = useState("");
  const [value, newValue] = useState("");
  const handleRowCreate = () => {
    console.log(row);
    setRow([...row, { id: Date.now(), name: labelValue, value: value }]);
    newValue("");
    newLabelValue("");
  };

  const handleDeleteRow = (rowToDelete) => {
    setRow(row.filter((therow) => therow !== rowToDelete));
  };

  return (
    <div className=" h-screen relative  justify-center items-center flex flex-col gap-6">
      <div className="absolute top-1  right-5">
        <ModeToggle />
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Label"
          value={labelValue}
          onChange={(e) => {
            newLabelValue(e.target.value);
          }}
        />
        <Input
          value={value}
          placeholder="Value"
          onChange={(e) => {
            newValue(e.target.value);
          }}
        />
        <Button onClick={handleRowCreate}>Add</Button>
      </div>
      <DataTable data={row} onDeleteRow={handleDeleteRow} />
      <div className="flex w-[50%]">
        <Chart data={row} />
      </div>
    </div>
  );
}
