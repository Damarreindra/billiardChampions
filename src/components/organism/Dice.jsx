import React from 'react'
import { Link } from 'react-router-dom'

function Dice() {
  return (
    <Link to={'/game'} style={{ textDecoration:'none' }}>
    <div className='animate__animated animate__backInUp container rounded d-flex align-items-center card__menu'>
     <img src="/images/billiard.png" width={100} alt="" />           
 <h1 className='menu__name text-black'>Let's Play Some</h1>
    </div>
    </Link>
  )
}

export default Dice