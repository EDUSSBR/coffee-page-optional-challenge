import React, { createContext, ReactNode, useContext, useState } from "react";

interface removeContentContextData {
    removeContent: boolean
    toggleContent: () => void
}

interface removeContentProviderProps {
    children: ReactNode
}

const removeContentContext = createContext<removeContentContextData>({} as removeContentContextData)

export const RemoveContextProvider = ({children}: removeContentProviderProps) => {
    const [removeContent, setRemoveContent] = useState<boolean>(true)
    
    const toggleContent = () => {
        const toggle = !removeContent
        setRemoveContent(toggle)
    }

    return (
        <removeContentContext.Provider value={{removeContent, toggleContent}}>
            {children}
        </removeContentContext.Provider>)
}

export const useRemoveContent = () => {
    return useContext(removeContentContext)
} 