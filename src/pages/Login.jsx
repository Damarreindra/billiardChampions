import React, { useState } from 'react'
import BackgroundImage from "../lottie/bg.png";
import LoginForm from '../components/LoginForm'

function Login() {
    const [username, setUsername] = useState()
  return (
    <div
    className="min-h-screen max-w-7xl mx-auto py-12 px-2 flex flex-col items-center justify-center overflow-hidden gap-6"
    style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
    }}
    >
         <img src="../images/logo.png" alt="" 
    className='w-80 md:w-auto mx-auto'
    />
        <LoginForm/>
    </div>
  )
}

export default Login