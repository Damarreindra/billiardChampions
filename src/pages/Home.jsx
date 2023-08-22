import React, { useEffect, useState } from "react";
import Loading from "../components/lottiefiles/loading.json";
import Lottie from "lottie-react";
import Carousel from "../components/organism/Carousel";
import BottomNavbar from "../components/organism/Navbar";
import "@fortawesome/fontawesome-free/css/all.css";
import { useDispatch, useSelector } from "react-redux";
import { getListPlayer } from "../actions/playerAction";
import Log from "../components/organism/Log";
import LeaderboardMenu from "../components/organism/LeaderboardMenu";
import Dice from "../components/organism/Dice";

function Home() {
  const dispatch = useDispatch();
 
  const { getListPlayerResult } =
    useSelector((state) => state.PlayerReducer);

    useEffect(() => {
      dispatch(getListPlayer());
    }, [dispatch]);


  const [loading, setLoading] = useState(true);
  useEffect(() => {
   if(getListPlayerResult){
    setLoading(false)
   }
  }, [getListPlayerResult]);
  return (
    <>
      {loading ? (
        <Lottie className="mt-auto" animationData={Loading} />
      ) : (
        <>
      <div className="container content-container">
  <div className="animate__animated animate__fadeInDown w-100 p-5 text-center mx-auto">
    <div>
      <img src="/images/logo.png" className="w-100" alt="" />
      <img
        src="/images/balls.png"
        className="second__logo animate__animated animate__fadeInDown animate__delay-1s"
        width={150}
        alt=""
      />
      <img
        src="/images/balls-1.png"
        className="third__logo animate__animated animate__fadeInDown animate__delay-1s"
        width={150}
        alt=""
      />
    </div>
  </div>
  <Carousel />
  <div className="d-flex justify-content-between flex-column mb-5 gap-3">
    <Dice />
    <LeaderboardMenu />
    <Log />
  </div>
</div>
<BottomNavbar />

        </>
      )}
    </>
  );
}

export default Home;
