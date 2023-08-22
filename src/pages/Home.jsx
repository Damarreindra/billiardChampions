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
        <div className="container">
          <div className="animate__animated animate__fadeInDown w-100 p-5 text-center mx-auto">
            <img
              src="/images/billiardChamps-Orange.png"
              className="w-100"
              alt=""
            />
          </div>
          <Carousel />
          <div className="d-flex justify-items-between flex-column gap-3">
          <LeaderboardMenu/>
          <Log/>
          </div>
         
          <BottomNavbar />
        </div>
      )}
    </>
  );
}

export default Home;
