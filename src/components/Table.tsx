import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
} from "@adobe/react-spectrum";
import { Delete } from "lucide-react";

function Table({ row }: { row: any }) {
  return (
    <div className="flex gap-2 justify-center items-center flex-col">
      <div className="flex gap-2 flex-col w-96 justify-center items-center">
        {row?.length > 0 ? (
          <TableView
            width={window.innerWidth / 2}
            aria-label="Example table with static contents"
          >
            <TableHeader>
              <Column align="center" allowsResizing>
                Label
              </Column>
              <Column align="center" allowsResizing>
                Value
              </Column>
              <Column align="end">Delete</Column>
            </TableHeader>
            <TableBody>
              {row.map((row: any) => (
                <Row key={row.id}>
                  <Cell>{row.name}</Cell>
                  <Cell>{row.value}</Cell>
                  <Cell>
                    <Delete />
                  </Cell>
                </Row>
              ))}
            </TableBody>
          </TableView>
        ) : null}
      </div>
    </div>
  );
}

export default Table;
