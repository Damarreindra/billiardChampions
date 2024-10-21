import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import LoadingAnimation from "../lottie/billiardBall.json"

function Landing() {
  const navigate = useNavigate()
  setTimeout(()=>{
    navigate('/home')
  },6000)
  return (
    <div className='max-w-7xl flex items-center justify-center h-screen overflow-hidden  mx-auto'>
      <Lottie animationData={LoadingAnimation}/>
    </div>
  )
}

export default Landing