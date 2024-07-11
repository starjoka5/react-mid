import { ReactNode } from "react";
import { useTabs } from "../hooks/useTabs";
import { TabItem } from "./tabItem";
type Props = {
  children: ReactNode;
  name: string;
};

export const TabListItem = ({ children, name }: Props) => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <>
      <TabItem active={activeTab === name} onClick={() => setActiveTab(name)}>
        {children}
      </TabItem>
    </>
  );
};
