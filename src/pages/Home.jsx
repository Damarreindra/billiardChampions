import React, { useEffect, useState } from "react";
import Loading from "../components/lottiefiles/loading.json";
import Lottie from "lottie-react";
import Carousel from "../components/organism/Carousel";
import BottomNavbar from "../components/organism/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addWins, getListPlayer } from "../actions/playerAction";
import Log from "../components/organism/Log";
import LeaderboardMenu from "../components/organism/LeaderboardMenu";
import Dice from "../components/organism/Dice";
import { Link } from "react-router-dom";
import { Box, Center, Image, Link as ChakraLink } from "@chakra-ui/react";
import Players from "../components/organism/Players";
import Hero from "../components/organism/Hero";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { getListPlayerResult, addWinsResult } = useSelector(
    (state) => state.PlayerReducer
  );

  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  useEffect(() => {
    if (getListPlayerResult) {
      setLoading(false);
    }
  }, [getListPlayerResult]);

  return (
    <Box>
      {loading ? (
        <Center>
          <Lottie animationData={Loading} />
        </Center>
      ) : (
        <>
          <Box className="container content-container">
            <Hero/>
            <Carousel />
            <Box className="d-flex justify-content-between flex-column mb-5 gap-3">
              <Dice />
              <LeaderboardMenu />
              <ChakraLink
                as={Link}
                to={"/history"}
                className="text-black"
                textDecoration="none"
              >
                <Log />
              </ChakraLink>
              <Players/>
            </Box>
          </Box>
          <BottomNavbar />
        </>
      )}
    </Box>
  );
}

export default Home;
