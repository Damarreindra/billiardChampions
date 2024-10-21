import React, { useEffect, useState } from "react";
import SafescreenLayout from "../components/SafescreenLayout";
import { fetchPlayer, startMatch } from "../Hooks/ApiHook";
import { IoMdAddCircle, IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function SelectPlayer() {
  const [players, setPlayers] = useState([]);
  const [joinedPlayer, setJoinedPlayer] = useState([]);
  const [venue, setVenue] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetchPlayer();

        setPlayers(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPlayer();
  }, []);

  const addPlayer = (id) => {
    if (!joinedPlayer.includes(id)) {
      setJoinedPlayer((prevPlayer) => [...prevPlayer, id]);
    }
  };

  const removePlayer = (id) => {
    setJoinedPlayer((prevPlayer) => prevPlayer.filter((_id) => _id !== id));
  };

  const handleClick = async () => {
    try {
      const response = await startMatch(joinedPlayer, venue);
      if (response) {
        navigate(`/match/${response.match._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafescreenLayout title={"Select Player"}>
      <div className="">
        <motion.div
         initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
         animate={{ y: 0, opacity: 1 }} // Final position (normal)
         exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
         transition={{ duration: 0.5 }} // Animation duration
        >
          <h1 className="text-gray-500">Available Player</h1>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4">
              {players &&
                players.map((item) => (
                  <div className="px-3 border border-gray-200 rounded-xl shadow-inner mt-3 text-center flex flex-col items-center justify-center bg-white">
                    <h1 className="mt-2">{item.username}</h1>
                    <img src={item.photoUrl} className="max-w-24 " alt="" />
                    <button>
                      <IoMdAddCircle
                        className="text-orange-400 text-3xl mt-1"
                        onClick={() => addPlayer(item._id)}
                      />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </motion.div>

        <motion.div
         initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
         animate={{ y: 0, opacity: 1 }} // Final position (normal)
         exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
         transition={{ duration: 0.8 }} // Animation duration
        >
          <h1 className="text-gray-500 mt-5">Selected Player</h1>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-4">
              {joinedPlayer &&
                joinedPlayer.map((item) => {
                  const foundedPlayer =
                    players && players.find((player) => player._id === item);
                  if (!foundedPlayer) return null;
                  return (
                    <div className="px-3 border border-gray-200 rounded-xl shadow-inner mt-3 text-center duration-300 ease-in-out bg-white">
                      <h1 className="mt-2">{foundedPlayer.username}</h1>
                      <img
                        src={foundedPlayer.photoUrl}
                        className="max-w-24 "
                        alt=""
                      />
                      <button>
                        <IoMdTrash
                          className="text-orange-400 text-3xl mt-1"
                          onClick={() => removePlayer(foundedPlayer._id)}
                        />
                      </button>
                    </div>
                  );
                })}

              <div className={joinedPlayer.length === 0 ? "block" : "hidden"}>
                <h1 className="text-gray-500 mt-5 duration-300 ease-in-out ">
                  No Player Joined
                </h1>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
      
         initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
         animate={{ y: 0, opacity: 1 }} // Final position (normal)
         exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
         transition={{ duration: 1 }} // Animation duration
        
        >
        <h1 className="text-gray-500 mt-5 duration-300 ease-in-out ">
                  Venue
                </h1>
          <select className="border border-gray-300 w-full rounded-lg p-3 mt-2" name="" id="" onChange={(e)=>setVenue(e.target.value)}>
          <option value="">Pilih</option>

            <option value="Maxi">Maxi</option>
            <option value="Baltics">Baltics</option>
            <option value="Sasana">Sasana</option>
          </select>
        </motion.div>
        <button
          className="mt-12 w-80 bg-orange-500 p-4 rounded-full absolute bottom-10 disabled:bg-gray-500 text-white"
          onClick={handleClick}
          disabled={joinedPlayer.length === 0 || venue === ""}
        >
          Start Game
        </button>
      </div>
    </SafescreenLayout>
  );
}

export default SelectPlayer;
