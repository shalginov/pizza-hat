import { createContext, useContext, useState } from "react"

export const PizzaContext = createContext({})

export const PizzaContextProvider = ({children}) => {
    const [pizza, setPizza] = useState({})

    return <PizzaContext.Provider value={{pizza, setPizza}}>
        {children}
    </PizzaContext.Provider>
    
}

export const usePizzaContext = () => useContext(PizzaContext)