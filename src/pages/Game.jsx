import React from 'react'
import RandomRoll from '../components/organism/RandomRoll'

function Game() {
  return (
    <div className='container p-5'>
    <div className='d-flex justify-content-center p-3'>
     <img src="/images/who's.png" width={300} alt="" srcset="" />
    </div>
    <RandomRoll/>
    </div>
  )
}

export default Game