import React from "react";

type TabContextProps = {
    activeTab: string,
    setActiveTab: (tab: string) => void
}

export const TabContext = React.createContext<TabContextProps | undefined>(undefined)