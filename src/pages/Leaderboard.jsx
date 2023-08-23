import React, { useEffect, useState } from "react";
import PodiumRank from "../components/organism/PodiumRank";
import BottomNavbar from "../components/organism/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getListPlayer } from "../actions/playerAction";

function Leaderboard() {
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  
  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  const {getListPlayerResult} =
    useSelector((state) => state.PlayerReducer);

    useEffect(()=>{
        if(getListPlayerResult){
            setData(getListPlayerResult)
        }
    },[getListPlayerResult])

    const sortedLeaderboard = data.sort((a, b) => b.wins - a.wins);
  
  return (
    <>
      <div
        className="container p-5 bg-white text-center"
        style={{ position: "relative" }}
      >
        <img
          src="/images/balls.png"
          width={50}
          alt=""
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <h1 className="card__name__500 animate__animated animate__fadeInDown">This is</h1>
        <h1 className="card__name animate__animated animate__fadeInDown">Leaderboard</h1>
      </div>
      <div className="container p-3 mt-5 d-flex flex-column gap-4">
      {sortedLeaderboard.map((player, index) => (
        <PodiumRank
          key={player.id}
          rank={index + 1}
          name={player.name}
          wins={player.wins}
          avatar={player.avatar}
        />
      ))}
      </div>
      <BottomNavbar />
    </>
  );
}

export default Leaderboard;
