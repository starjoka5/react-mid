import { Button } from "@nextui-org/react";
import { TabContent } from "./components/tabContent";
import { TabListItem } from "./components/tabListItem";
import { TabsList } from "./components/tabsList";

const Compound = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="w-full">
      <h1>Compound ({subtitle})</h1>
      <div className="">
        <TabsList>
          <TabListItem name="item1">Item 1</TabListItem>
          <TabListItem name="item2">Item 2</TabListItem>
          <TabListItem name="item3">Item 3</TabListItem>
          <div className="flex grow bg-slate-500 text-white w-full mt-4 px-4 py-8">
            <TabContent name="item1">Item 1</TabContent>
            <TabContent name="item2">
              <TabsList>
                <TabListItem name="item1">Item 1</TabListItem>
                <TabListItem name="item2">Item 2</TabListItem>
                <TabListItem name="item3">Item 3</TabListItem>
                <div className="flex grow bg-slate-500 text-white w-full mt-4 px-4 py-8">
                  <TabContent name="item1">Item 1</TabContent>
                  <TabContent name="item2">Item 2</TabContent>
                  <TabContent name="item3">
                    <Button>Return to home</Button>
                  </TabContent>
                </div>
              </TabsList>
            </TabContent>
            <TabContent name="item3">
              <Button>Return to home</Button>
            </TabContent>
          </div>
        </TabsList>
      </div>
    </div>
  );
};
export default Compound;