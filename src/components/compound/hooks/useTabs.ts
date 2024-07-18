import { useContext } from "react"
import { TabContext } from "../context/tabContext"

export const useTabs = () => {

    const context = useContext(TabContext)
    
    if (!context) {
        throw new Error("Oops! You forgot to wraped with a TabsList Component!")
    }

    return context
}