import { createContext, useState } from "react";

export const UseProduct = createContext()
export const ContextProd = ({children}) =>{
    const [arrProduct, setArrProduct] = useState([])
    return(
        <UseProduct.Provider value={{arrProduct, setArrProduct}}>
            {children}
        </UseProduct.Provider>
    )
}