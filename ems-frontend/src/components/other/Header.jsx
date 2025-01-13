import React, { useState } from 'react'
const Header = (props) => {
  const [userName,setUserName] = useState('')
    return (
        <div className = ' flex items-end justify-between'>
            <h1 className='text-2xl font-bold'>
              Hello <br />
                <span className='text-3xl font-semibold'>
                    {userName}</span>
            </h1>
             <button onClick={()=>{ props.changeUser(null)}} className='bg-red-500 text-lg font-medium text-orange px-5 py-2'>Log out</button>
          </div>
    )
  }
export default Header