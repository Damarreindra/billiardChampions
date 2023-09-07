import React from 'react'
import { Link } from 'react-router-dom'

function LeaderboardMenu() {
  return (
    <Link to={'/leaderboard'} style={{ textDecoration:'none' }}>
    <div className='animate__animated shadow animate__backInUp container rounded d-flex align-items-center card__menu'>
     <img src="/images/podium.png" width={100}  alt="" />           
 <h1 className='menu__name text-black'>Leaderboard</h1>
    </div>
    </Link>
  )
}

export default LeaderboardMenu