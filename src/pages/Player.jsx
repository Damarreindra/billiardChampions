import React from "react";
import BottomNavbar from "../components/organism/Navbar";
import PlayerPageMenu from "../components/organism/PlayerPageMenu";
import Hero from "../components/organism/Hero";
import { Flex } from "@chakra-ui/layout";

function Player() {
  return (
    <>
     <Hero />
      <Flex flexDir={'column'} paddingTop={20} paddingLeft={10} paddingRight={10}> 
        <PlayerPageMenu/>
      </Flex>
      <BottomNavbar />
    </>
  );
}

export default Player;
