import React, { useEffect, useState } from "react";
import Loading from "../components/lottiefiles/loading.json";
import Lottie from "lottie-react";
import Carousel from "../components/organism/Carousel";
import BottomNavbar from "../components/organism/Navbar";
import "@fortawesome/fontawesome-free/css/all.css";
import { useDispatch, useSelector } from "react-redux";
import { addWins, getListPlayer } from "../actions/playerAction";
import Log from "../components/organism/Log";
import LeaderboardMenu from "../components/organism/LeaderboardMenu";
import Dice from "../components/organism/Dice";
import { Link } from "react-router-dom";

function Home() {
 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
 
  const { getListPlayerResult, addWinsResult } =
    useSelector((state) => state.PlayerReducer);

    useEffect(() => {
      dispatch(getListPlayer());
    }, [dispatch]);

    useEffect(()=>{
      if(getListPlayerResult){
        setLoading(false)
      }
    },[getListPlayerResult])


  return (
    <div>
      {loading ? (
        <div className="d-flex align-items-center">
        <Lottie className="mt-auto" animationData={Loading} />
        </div>
      ) : (
        <>
      <div className="container content-container">
  <div className="w-100 p-5 text-center mx-auto">
    <div>
      <img src="/images/logo.png" className="w-100" alt="" />
   
      <img
        src="/images/balls.png"
        className="second__logo "
        width={150}
        alt=""
      />
      
      <img
        src="/images/balls-1.png"
        className="third__logo"
        width={150}
        alt=""
      />
    </div>
  </div>
  
   
    
    
    <Carousel/>
    
    
    
  

  <div className="d-flex justify-content-between flex-column mb-5 gap-3">
   
    <Dice />
    <LeaderboardMenu />
    <Link to={'/history'} className="text-black" style={{ textDecoration:'none' }}> <Log /> </Link>
  </div>
</div>
<BottomNavbar />

        </>
      )}
    </div>
  );
}

export default Home;
