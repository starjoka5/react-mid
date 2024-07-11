import { useContext } from "react"
import { TabContext } from "../context/tabContext"

export const useTabs = () => {

    const context = useContext(TabContext)
    
    if (!context) {
        throw new Error("useTabs must be used within a TabProvider")
    }

    return context
}