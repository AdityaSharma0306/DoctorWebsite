import { createContext, useState } from 'react';

// 1. Create the context
export const DoctorContext = createContext()

// 2. Create a provider component
const DoctorContextProvider = (props) => {

    // const backendUrl = import.meta.env.VITE_BACKEND_URL

    // const [dToken, setDToken] = useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')
    

    const value = {
        // dToken,
        // setDToken,
        // backendUrl,
       
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider
