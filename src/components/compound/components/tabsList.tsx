import { useState } from "react";
import { TabContext } from "../context/tabContext";
import { Tabs } from "./tabs";
type Props = {
  children: React.ReactNode;
};
export const TabsList = ({ children }: Props) => {
  const [active, setActive] = useState("");

  const handleTabChange = (tab: string) => {
    setActive(tab);
  };

  return (
    <TabContext.Provider
      value={{
        activeTab: active,
        setActiveTab: handleTabChange,
      }}
    >
      <Tabs>{children}</Tabs>
    </TabContext.Provider>
  );
};
