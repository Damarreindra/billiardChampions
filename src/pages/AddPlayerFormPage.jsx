import React from 'react'
import Hero from '../components/organism/Hero'
import { Flex } from '@chakra-ui/react'
import PlayerPageMenu from '../components/organism/PlayerPageMenu'
import BottomNavbar from '../components/organism/Navbar'

function AddPlayerFormPage() {
  return (
    <>
    <Hero />
      <Flex flexDir={'column'} paddingTop={20} paddingLeft={10} paddingRight={10}> 
     
      </Flex>
      <BottomNavbar />
    </>
  )
}

export default AddPlayerFormPage