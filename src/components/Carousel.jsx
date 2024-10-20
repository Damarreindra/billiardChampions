import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { fetchPlayer } from "../Hooks/ApiHook";

export default function Carousel() {
  const [players, setPlayers] = useState([]);

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

  return (
    <div 
    className="w-72 mt-5"
    >
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      cardsEffect={{
        perSlideOffset: 10,
        perSlideRotate: 3,
        rotate: true,
     
      }}
      style={{
        width: "100%",
        height: "150px",
      }}
    >
      {players?.sort((a,b)=>b.wins - a.wins).map((user) => (
       <SwiperSlide
       className="bg-gradient-to-r from-yellow-200 to-orange-600 shadow-xl rounded-lg "
       >
           <div className="flex">
           <img src={user.photoUrl} width={150} height={150}/>
           <div className="flex flex-col items-center justify-center">
           <h1 className="text-xl font-bold">
               {user.username}
           </h1>
           <h1>
               {user.wins} Wins
           </h1>
           </div>
           </div>
         
       </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}




