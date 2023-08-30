import React, { useEffect, useState } from 'react'
import { getGames, getListPlayer } from '../../actions/playerAction';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from "lottie-react";
import Loading from "../lottiefiles/loading.json"
import { Link } from 'react-router-dom';


function GamesHistory() {
    const dispatch = useDispatch()
    const [player, setPlayer] = useState()
    const { getGameResult, getListPlayerResult } = useSelector((state) => state.PlayerReducer);

    useEffect(() => {
        dispatch(getGames());
      }, [dispatch]);

      useEffect(() => {
        dispatch(getListPlayer());
      }, [dispatch]);

      useEffect(() => {
        if(getListPlayerResult){
          setPlayer(getListPlayerResult)
        }
      }, [dispatch, getListPlayerResult]);
    

 
    
  return (
<div className='container mt-5'>
<h1 className='card__name text-center text-white'>Games History</h1>
    {
        
        getGameResult ? getGameResult.map((e)=>{
          const winnerPlayers = player.filter((player) => e.winner.map((item) => item.id).includes(player.id));
            return(
              <Link style={{ textDecoration:'none' }} className='text-black' to={`/game/${e.id}`}>
                <div className='container'>
                   
                <div  className='games__history  align-items-center p-3 mt-3 rounded bg-white'>
                <h1 className='card__name text-center'>Game {e.id}</h1>
                <div className='d-flex align-items-center'>
                    <div className=''>
                    <p className='card__name'>Winner : {e.winner.map((e)=>e.name)} | {e.winner.map((e)=>e.points)} Poin </p>               
                    <p className='card__name__600'> Losers : </p>
                    <p>{e.losers.map((e)=>e.name)[0]} | {e.losers.map((e)=>e.points)[0]} Poin</p>
                  <p> {e.losers.map((e)=>e.name)[1]} | {e.losers.map((e)=>e.points)[1]} Poin</p>
                  </div>
                  <div className='winner-image-container'>
                   <img className='grayed__image' src={winnerPlayers.map((e)=>e.avatar)} width={100} alt="" />
                   <div className="winner-stamp"><img src="/images/medal.png" width={50} alt="" srcset="" /></div>
                  </div>
                  </div>
                </div>
                </div>
                </Link>
            )
        }) 
        
        :
        
        <Lottie className="mt-auto" animationData={Loading} />

    }
</div>
)
}

export default GamesHistory