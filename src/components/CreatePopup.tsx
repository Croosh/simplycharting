import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Context } from "./Dashboard";
import { useContext, useState } from "react";

function CreatePopup() {
  const [row, setRow] = useContext<object[]>(Context);
  const [labelValue, newLabelValue] = useState("");
  const [value, newValue] = useState("");
  const handleRowCreate = () => {
    console.log(row);
    setRow([...row, { id: Date.now(), name: labelValue, value: value }]);
    newValue("");
    newLabelValue("");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Data</DialogTitle>
            <DialogDescription>Add more data to the table</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Label
              </Label>
              <Input
                onChange={(e) => {
                  newLabelValue(e.target.value);
                }}
                id="name"
                value={labelValue}
                placeholder="e.g First Year"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Value
              </Label>
              <Input
                id="username"
                value={value}
                className="col-span-3"
                onChange={(e) => {
                  newValue(e.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button onClick={handleRowCreate} type="submit">
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePopup;
