import React from 'react'
import BottomNavbar from '../components/organism/Navbar'
import PlayerPageMenu from '../components/organism/PlayerPageMenu'
import Hero from '../components/organism/Hero'
import { Box } from '@chakra-ui/layout'

function Player() {
  return (
    <>
              <Box className="container content-container">

    <Hero/>
<PlayerPageMenu/>

</Box>
<BottomNavbar/>
    </>
  )
}

export default Player