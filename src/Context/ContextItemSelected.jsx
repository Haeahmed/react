import { createContext, useState } from "react";

export const SelectedItem = createContext([])
export const ContextSelected = ({children}) =>{
    const [items, setItems] = useState([])
    return(
        <SelectedItem.Provider value={{items, setItems}}>
            {children}
        </SelectedItem.Provider>
    )
}