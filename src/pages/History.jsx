import React, { useEffect, useState } from "react";
import SafescreenLayout from "../components/SafescreenLayout";
import { fetchMatches } from "../Hooks/ApiHook";
import { formatWib } from "../Hooks/Utils";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

function History() {
  const [history, setHistory] = useState([]);
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

  return (
    <SafescreenLayout title={"History"}>
      <div className="flex flex-col gap-2 pb-5">
      {history.length === 0  ? (
                  <h2 className="text-center text-gray-500">No games</h2>

      ):
    
        history
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((item, index) => (
            <motion.Link
              key={index}
              to={`/match/${item._id}`}
              className="border border-gray-200 rounded-xl p-3 relative flex flex-col shadow-lg"
              initial={{ y: -100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: -100, opacity: 0 }} 
              transition={{ duration: 0.5 }} 
            >
              <div className="flex gap-2 items-center justify-between">
                <div className="flex justify-center items-center gap-2">
                 
                  <FaMapLocationDot className="text-orange-500 text-3xl" />
                  <h1 className="text-sm text-gray-400"> {item.venue}</h1>
                </div>

                <h1 className="text-gray-400 text-sm ">
                  {formatWib(new Date(item.date))}
                </h1>
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
                     <img src="../images/medal.webp" className="w-10 absolute bottom-0" alt="" />
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
            </motion.Link>
          ))}
          </div>
    </SafescreenLayout>
  );
}

export default History;
