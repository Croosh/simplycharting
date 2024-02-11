import { createContext, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import DataTable from "./Table";
import CreatePopup from "./CreatePopup";
import { Input } from "./ui/input";
import AriaChart from "./AreaChart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "./ui/slider";

export const Context = createContext<object[]>([]);
export const ConfigContext = createContext<object[]>([]);

export default function Dashoard() {
  const [ticker, setTicker] = useState("$");
  const [config, editConfig] = useState<object[]>([
    {
      fontSize: ".8rem",
    },
  ]);
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
      <ConfigContext.Provider value={[config, editConfig]}>
        <div className="min- h-screen relative  justify-center items-center grid grid-cols-2 gap-6">
          <div className="absolute top-5  right-5">
            <ModeToggle />
          </div>
          <div className="flex  p-16 mx-16">
            <div className="flex flex-col items-stretch w-full  gap-2 justify-start">
              <p className="  text-3xl font-extrabold my-4">Data</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Data</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center flex-col gap-4">
                      <DataTable /> <CreatePopup />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Advanced</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-center flex-col gap-4">
                      <Input
                        id="ticker-input"
                        value={ticker}
                        placeholder="Ticker"
                        onChange={(e) => {
                          setTicker(e.target.value);
                        }}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="flex flex-col min-h-96  justify-center items-center gap-2 p-16">
            <p className=" text-3xl font-extrabold my-4">Chart</p>
            <AriaChart data={row} />
          </div>
        </div>
      </ConfigContext.Provider>
    </Context.Provider>
  );
}
