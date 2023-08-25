import React from 'react'
import BilliardBall from '../components/lottiefiles/billiardBall.json'
import Lottie from 'lottie-react'

function Landing() {
    setTimeout(function() {
        window.location = '/home'; // Replace with your desired URL
      }, 3000);
  return (

    <div className='d-flex justify-content-center flex-column text-center container p-5'>
        <h1 className='card__name text-white mt-5'>Let's Play!</h1>
        <Lottie animationData={BilliardBall} />
    </div>
  )
}

export default Landing