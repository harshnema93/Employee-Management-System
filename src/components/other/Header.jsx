import React, { useEffect, useState } from 'react'

const Header = (props) => {
  const [userName,setUserName] = useState('')
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }
  useEffect(()=>{
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if(loggedInUser){
      setUserName(loggedInUser.firstName)
    }
  },[])
  const logOutUser = ()=>{
    localStorage.removeItem('loggedInUser','')
    props.changeUser('')
  }
  return (
    <div className = ' flex items-end justify-between'>
      <h1 className='text-2xl font-bold'>
        Hello <br />
         <span className='text-3xl font-semibold'>
            {userName}</span> 
         </h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-orange px-5 py-2'>Log out</button>
    </div>
  )
}

export default Header
