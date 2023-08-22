import React from 'react'
import LoginForm from '../components/organism/LoginForm'
import BilliardBall from '../components/lottiefiles/billiardBall.json'
import Lottie from 'lottie-react'

function Login() {
  return (
    <div className='d-flex align-items-center vh-100'>
    <div className="container d-md-flex p-5 rounded" style={{ backgroundColor:"#f5f5f5" }}>
   <div className='w-50 text-center mx-auto'>
    <img src="/images/billiardChamps.png" className='w-75' alt="" />
   <Lottie animationData={BilliardBall} />
   </div>
    <LoginForm/>
    </div>
    </div>
  )
}

export default Login