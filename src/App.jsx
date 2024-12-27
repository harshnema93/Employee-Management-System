import { useState,useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () =>{
  const [user,setUser] = useState(null)
  const[loggedInUserData,setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email,password) =>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',firstName:'Admin'}))
    }else if(userData ){
      const employee = userData.find((e)=>email===e.email && password===e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',firstName:employee.firstName,data:employee}))
      }
    }else{
      alert("Invalid")
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
