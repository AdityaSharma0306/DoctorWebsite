import { createContext } from 'react';

// 1. Create the context
export const AppContext = createContext()

// 2. Create a provider component
const AppContextProvider = (props) => {

    const currency =' ₹'

    // Function to calculate the age eg. ( 20_01_2000 => 24 )
    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)
        let age = today.getFullYear() - birthDate.getFullYear() 
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        // Adjust age if birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        }

        return age
    }

    const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
   }

    

    const value = {
        calculateAge,
        slotDateFormat,
        currency,
       
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
