import React, {createContext,useState,useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    //localStorage.clear()
    const [userData,setUserData] = useState([])

    useEffect(() => {
        
        const { employees } = getLocalStorage();
        console.log('Loaded employees from localStorage:', employees);
        if (employees && employees.length > 0) {
            setUserData(employees);
        } else {
            
            setUserData([]);
        }
    }, []);
    const updateEmployeeData = (updatedEmployees) => {
        setLocalStorage(updatedEmployees);
        setUserData(updatedEmployees);
    };

  return (
    <div>
        <AuthContext.Provider value={[userData,updateEmployeeData]}>
        {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
