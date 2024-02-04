import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

function DataTable({ data, onDeleteRow }) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Label</TableHead>
            <TableHead className="text-right">Value</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell className="text-right">{row.value}</TableCell>
                <TableCell>
                  <Trash onClick={() => onDeleteRow(row)} />
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
