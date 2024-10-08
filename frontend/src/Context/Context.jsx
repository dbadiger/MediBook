import { createContext } from "react";
import { doctorsList } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props)=>{


    const value = {
        doctorsList
    }

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider