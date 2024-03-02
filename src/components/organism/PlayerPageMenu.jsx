import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'


function PlayerPageMenu() {
  return (
    <>
     <Box className="d-flex justify-content-between flex-column mb-5 gap-3">

    <Link to={'add-player'} style={{ textDecoration:'none' }}>
    <div className='animate__animated shadow animate__backInUp container rounded d-flex gap-3 align-items-center card__menu'>
     <img className='' src="/images/addplayer.png" width={60}  alt="" />           
 <h1 className='menu__name text-black'>Add Player</h1>
    </div>
    </Link>
    </Box>
    </>
      )
}

export default PlayerPageMenu