import React, { useEffect, useState } from "react";
import SafescreenLayout from "../components/SafescreenLayout";
import { fetchChamps } from "../Hooks/ApiHook";
import { motion } from "framer-motion";

function Podium() {
  const [topThree, setTopThree] = useState([]);
  const [champs, setChamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    const response = await fetchChamps();
    if (response) {
      setChamps(response.slice(3));
      setTopThree(response.splice(0, 3));
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  if (loading) return <h1 className="text-center">Loading....</h1>;

  return (
    <SafescreenLayout title={"Podium"}>
      <>
        <div className="relative flex flex-col ">
          <a href="" >
            <img
              className="mx-auto mb-3"
              src="https://see.fontimg.com/api/rf5/1Gvp2/ZWE5ZmUxMTJhMzBjNDM4ZmJlYzY1ZWViYzlhYjI0NTcudHRm/SGFsbCBvZiAgRmFtZQ/hello-cute.png?r=fs&h=64&w=1000&fg=EA6B12&bg=FBF5F1&tb=1&s=64"
              alt="Cute fonts"
            />
          </a>

          {topThree && (
            <motion.div
            initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
            animate={{ y: 0, opacity: 1 }} // Final position (normal)
            exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
            transition={{ duration: 1 }} 
            className="absolute bottom-32 left-4 flex flex-col items-center justify-center">
              <img src={topThree[1].photoUrl} className="w-24 " alt="" />
              <h1 className="text-sm font-semibold">{topThree[1].username}</h1>
            </motion.div>
          )}
          {topThree && (
            <motion.div
            initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
            animate={{ y: 0, opacity: 1 }} // Final position (normal)
            exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
            transition={{ duration: 0.6 }} 
            className="-mb-2 mx-auto text-center">
              <img src={topThree[0].photoUrl} className="w-28 " alt="" />
              <h1 className="text-sm font-semibold">{topThree[0].username}</h1>
            </motion.div>
          )}
          {topThree && (
            <motion.div 
            initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
            animate={{ y: 0, opacity: 1 }} // Final position (normal)
            exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
            transition={{ duration: 1.5 }} 
            className="absolute right-6 bottom-28 -mb-3 text-center  shadow-inherit">
              <img src={topThree[2].photoUrl} className="w-20 " alt="" />
              <h1 className="text-sm font-semibold">{topThree[2].username}</h1>
            </motion.div>
          )}
          <motion.div
            initial={{ y: -100, opacity: 0 }} // Initial position (above the screen)
            animate={{ y: 0, opacity: 1 }} // Final position (normal)
            exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
            transition={{ duration: 0.5 }} 
          >
          <img src="../images/hof.png" alt="" />
          </motion.div>
         
        </div>
        <motion.div
          initial={{ y: 200, opacity: 0 }} // Initial position (above the screen)
          animate={{ y: 0, opacity: 1 }} // Final position (normal)
          exit={{ y: -100, opacity: 0 }} // Exit animation (go back above the screen)
          transition={{ duration: 2 }} 
        className="flex flex-col gap-2">
          <h1>Low Ranks</h1>
          {champs &&
            champs.map((item, index) => (
              <div
                key={index}
                className="w-full rounded-lg bg-white shadow-inner py-1 px-3 flex items-center odd:bg-yellow-300 even:bg-orange-400 odd:text-amber-800 even:text-yellow-300"
              >
                <h1 className="text-xl font-extrabold ">
                  {index + 3} .
                </h1>
                <img src={item.photoUrl} className="w-16" alt="" />
                <h1 className="font-base ml-1 mt-1">{item.username}</h1>
              </div>
            ))}
        </motion.div>
      </>
    </SafescreenLayout>
  );
}

export default Podium;
