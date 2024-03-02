import React from 'react'
import { Link } from 'react-router-dom'


function Players() {
  return (
<Link to={'players'} style={{ textDecoration:'none' }}>
    <div className='animate__animated shadow animate__backInUp container rounded d-flex align-items-center card__menu'>
     <img className='ms-3 mb-2' src="/images/player.png" width={80}  alt="" />           
 <h1 className='menu__name text-black'>Players</h1>
    </div>
    </Link>
      )
}

export default Players