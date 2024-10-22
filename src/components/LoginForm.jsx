import React, { useState } from 'react'
import { login } from '../Hooks/ApiHook'

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClick=async()=>{
        try {
            const response = await login(username, password)
           
            if(response){
                localStorage.setItem('token', response.token)
                window.location ='/home'
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-col'>
        <label htmlFor="">Username</label>
        <input className='border border-gray-200 p-3 rounded-xl' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="">Password</label>
        <input  className='border border-gray-200 p-3 rounded-xl'  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className='bg-orange-500 rounded-xl p-3 text-white' onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginForm