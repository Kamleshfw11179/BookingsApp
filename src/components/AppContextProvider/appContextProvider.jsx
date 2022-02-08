import { createContext, useState } from "react";

export const AppContext = createContext()

export default  function AppContextProvider({children}){
    const [doctor,setDoctor] = useState({})
    const [user,setUser] = useState({})
    const [list,setList] = useState([])
    return(
        <AppContext.Provider value={{doctor,setDoctor,list,setList,user,setUser}}>
        {children}
        </AppContext.Provider>
            
    )
}