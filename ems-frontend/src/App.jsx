import React,{ useState, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () =>{
const [user,setUser] = useState(null)
const[loggedInUserData,setLoggedInUserData] = useState(null)
const [userData,setUserData] = useContext(AuthContext)


const handleLogin = (role,data) =>{
        setUser(role)
        if(role=='employee'){
        setLoggedInUserData(data)
        }else{
          setLoggedInUserData(data)
       }
 }
return(
    <>
    {!user ? <Login handleLogin={handleLogin}/> :''}
    {user === 'admin' ? <AdminDashboard changeUser={setUser} />: user === 'employee' ? <EmployeeDashboard changeUser={setUser} data ={loggedInUserData}/> : ''}
    </>
)
}

export default App