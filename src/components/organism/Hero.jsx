import React, { useEffect, useState } from "react";

import { Box, Center, Image, Link as ChakraLink } from "@chakra-ui/react";


function Hero() {
  return (
    <>
    <Box w="100%" p={5} textAlign="center" mx="auto">
    <Box>
      <Image src="/images/logo.png" className="w-100" alt="" />
      <Image
        src="/images/balls.png"
        className="second__logo"
        width={150}
        alt=""
      />
      <Image
        src="/images/balls-1.png"
        className="third__logo"
        width={150}
        alt=""
      />
    </Box>
  </Box>
  </>
  )
}

export default Hero