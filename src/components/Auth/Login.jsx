import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    let submithandler=(event)=>{
      event.preventDefault();
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }
    
    return (
      <div className="bg-gray-900 flex h-screen w-screen items-center justify-center">
          <div className="p-8 rounded-lg shadow-lg bg-gray-800 max-w-md w-full">
              <h1 className="text-3xl font-semibold text-white mb-6 text-center">
                  Employee Management System
              </h1>
              <form onSubmit={submithandler} className="space-y-6">
                  <div>
                      <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                          className="w-full p-3 rounded-lg border border-blue-500 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          placeholder="Enter your email"
                      />
                  </div>
                  <div>
                      <input
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                          className="w-full p-3 rounded-lg border border-blue-500 bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                          placeholder="Enter your password"
                      />
                  </div>
                  <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300"
                  >
                      Log in
                  </button>
              </form>
          </div>
      </div>
  );
}

export default Login
