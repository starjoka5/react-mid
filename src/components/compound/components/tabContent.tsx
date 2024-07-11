import { ReactNode } from "react";
import { useTabs } from "../hooks/useTabs";

type Props = {
  children: ReactNode;
  name: string;
};

export const TabContent = ({ children, name }: Props) => {
  const { activeTab } = useTabs();

  return activeTab === name ? children : null;
};
