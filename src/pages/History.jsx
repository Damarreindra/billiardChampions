import React, { useEffect, useState } from "react";
import SafescreenLayout from "../components/SafescreenLayout";
import { deleteMatch, fetchMatches } from "../Hooks/ApiHook";
import { formatWib } from "../Hooks/Utils";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoKebabHorizontal } from "react-icons/go";
import { FaTrash } from "react-icons/fa";

function History() {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("")
  useEffect(() => {
    const history = async () => {
      try {
        const fetch = await fetchMatches();
        if (fetch) {
          setHistory(fetch);
        }
      } catch (error) {
        console.log(error);
      }
    };
    history();
  }, []);

  const handleDelete=async(matchId, winnerId)=>{
        // eslint-disable-next-line no-restricted-globals
    if(confirm("Delete this match?")){
      try {
        const response = await deleteMatch(matchId, winnerId)
        if(response){
          setMessage(response.message)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <SafescreenLayout title={"History"}>
      <div className="flex flex-col gap-2 pb-5 ">
        {history.length === 0 ? (
          <h2 className="text-center text-gray-500">No games</h2>
        ) : (
          history
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((item, index) => (
              <motion.div
                initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
                animate={{ y: 0, opacity: 1 }} // Final position (normal)
                exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
                transition={{ duration: 0.5 }}
              >
                <Link
                  key={index}
                  to={`/match/${item._id}`}
                  className="border border-gray-200 rounded-xl p-3 relative flex flex-col shadow-inner bg-white"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex justify-center items-center gap-2">
                      <FaMapLocationDot className="text-orange-500 text-3xl" />
                      <div>
                        <h1 className="text-xs text-gray-400"> {item.venue}</h1>
                        <h1 className="text-gray-400 text-xs ">
                          {formatWib(new Date(item.date))}
                        </h1>
                      </div>
                    </div>
                   
                  </div>

                  <div className="mt-3">
                    {item.winner && (
                      <div className="flex items-center flex-col">
                        <div className="relative">
                          <img
                            src={item.winner.photoUrl}
                            className="w-24 rounded-full "
                            alt=""
                          />
                          <img
                            src="../images/medal.webp"
                            className="w-10 absolute bottom-0"
                            alt=""
                          />
                        </div>
                        <h1 className="font-bold">{item.winner.username}</h1>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center gap-3">
                    {item.players
                      .filter(({ player }) => player._id !== item.winner?._id)
                      .map((item) => (
                        <div className="flex items-center flex-col">
                          <img
                            src={item.player.photoUrl}
                            className="w-16 rounded-full"
                            alt=""
                          />
                          <h1>{item.player.username}</h1>
                        </div>
                      ))}
                  </div>
                </Link>
                <div className="absolute right-4 top-4">
                    <FaTrash className="text-orange-300 text-sm" onClick={()=>handleDelete(item._id, item.winner?._id)} />

                    </div>
              </motion.div>
            ))
        )}
      </div>
    </SafescreenLayout>
  );
}

export default History;
