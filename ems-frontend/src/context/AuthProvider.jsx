import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/employees');
                if (response.status === 200) {
                    setUserData(response.data);
                } else {
                    console.error('Failed to fetch employee data from API.');
                }
            } catch (err) {
                console.error('Error fetching employee data:', err);
            }
        };
        fetchData();
    }, []);


 const updateEmployeeData = async (updatedEmployees) => {
          setUserData(updatedEmployees);
      };
    return (
        <div>
            <AuthContext.Provider value={[userData, updateEmployeeData]}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;