import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMatchById, getWinner, updateScore } from "../Hooks/ApiHook";
import SafescreenLayout from "../components/SafescreenLayout";
import { FaCircleMinus, FaMapLocationDot, FaMinus } from "react-icons/fa6";
import { formatWib } from "../Hooks/Utils";
import Lottie from "lottie-react";
import LoadingAnimation from "../lottie/loading.json";
import { IoMdAddCircle } from "react-icons/io";
import { motion } from "framer-motion"


function Match() {
  const params = useParams();
  const { id } = params;
  const [match, setMatch] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const fetchMatch = async () => {
    try {
      const response = await fetchMatchById(id);
      if (response) {
        setMatch(response);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchMatch();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const addScore = async (playerId) => {
    try {
      const response = await updateScore(playerId, 1, id);
      if (response) {
        fetchMatch();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const substractScore = async (playerId) => {
    try {
      const response = await updateScore(playerId, -1, id);
      if (response) {
        fetchMatch();
      }
    } catch (error) {
      alert(error.message);
    }
  };


const winner = match?.players?.sort((a,b)=>b.score - a.score)

const addWinner = async()=>{
 try {
  const winnerPlayer = winner[0]
  const playerId = winnerPlayer.player._id
  const response = await getWinner(id,playerId)
  if(response){
    navigate('/history')
  }
 } catch (error) {
  alert(error.message)
 }
}

  if (loading)
    return (
        <div className="min-h-screen">
        <Lottie animationData={LoadingAnimation} />
        </div>
    
    );

  return (
    <SafescreenLayout title={"Billiard Match"}>
      <div className="flex flex-col "
       
      >
        <motion.div className="flex justify-between items-center"
         initial={{ y: -100, opacity: 0 }} 
         animate={{ y: 0, opacity: 1 }} 
         exit={{ y: -100, opacity: 0 }} 
         transition={{ duration: 0.8 }} 
        >
          <div className="flex gap-2 items-center">
            <FaMapLocationDot className="text-orange-500 text-3xl" />
            <h1> {match.venue}</h1>
          </div>
          <h1 className="text-sm text-gray-400">
            {" "}
            {formatWib(new Date(match.date))}
          </h1>
        </motion.div>

        <motion.div className="mt-5"
         initial={{ y: -100, opacity: 0 }} 
         animate={{ y: 0, opacity: 1 }} 
         exit={{ y: -200, opacity: 0 }} 
         transition={{ duration: 1.2 }} 
        >
          <h1 className="text-gray-500">Players</h1>
          <div className="grid grid-cols-2  gap-3">
            {match &&
              match.players.map(({ player, score }) => (
                <div className="px-3 border border-gray-200 rounded-xl shadow-inner bg-white mt-3 text-center flex flex-col items-center">
                  <h1 className="mt-2">{player.username}</h1>
                  <img src={player.photoUrl} className="max-w-24 " alt="" />
                  <h1 className="mt-2 text-gray-500 font-bold">{score}</h1>
                  <div className="flex items-center justify-center gap-3 p-2">
                    <button
                      className="text-2xl text-orange-500 disabled:text-gray-400"
                      onClick={() => addScore(player._id)}
                      disabled={match?.winner ? true : false}
                    >
                      <IoMdAddCircle />
                    </button>
                    <button className="text-xl text-orange-500 disabled:text-gray-400" 
                    onClick={()=>substractScore(player._id)}
                    disabled={match?.winner ? true : false}
                    >
                      <FaCircleMinus />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>

        <button className="p-3 rounded-full bg-orange-500 text-white w-80 mt-5 absolute bottom-10 disabled:bg-gray-400"
        onClick={()=>addWinner()}
        disabled={match?.winner ? true : false}
        >
          Finish Game
        </button>
      </div>
    </SafescreenLayout>
  );
}

export default Match;
