import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import { Context } from "./Dashboard";
import { useContext } from "react";

function DataTable() {
  const [row, setRow] = useContext<object[]>(Context);
  const handleDeleteRow = (rowToDelete) => {
    setRow(row.filter((therow) => therow !== rowToDelete));
  };
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Label</TableHead>
            <TableHead className="text-center">Value</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {row.map((data) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{data.name}</TableCell>
                <TableCell className="  text-center">{data.value}</TableCell>
                <TableCell className="text-right items-center flex justify-end">
                  <X
                    width={16}
                    cursor={"pointer"}
                    onClick={() => handleDeleteRow(data)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
