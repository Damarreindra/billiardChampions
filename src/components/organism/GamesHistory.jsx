import React, { useEffect } from 'react'
import { getGames } from '../../actions/playerAction';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from "lottie-react";
import Loading from "../lottiefiles/loading.json"
import { Link } from 'react-router-dom';


function GamesHistory() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGames());
      }, [dispatch]);
    
      const { getGameResult } = useSelector((state) => state.PlayerReducer);

  
    
  return (
<div className='container mt-5'>
<h1 className='card__name text-center text-white'>Games History</h1>
    {
        
        getGameResult ? getGameResult.map((e)=>{
            return(
              <Link style={{ textDecoration:'none' }} className='text-black' to={`/game/${e.id}`}>
                <div className='container'>
                   
                <div  className='games__history p-3 mt-3 rounded bg-white'>
                    <h1 className='card__name'>Game {e.id}</h1>
                    <p className='card__name__600'>Winner : {e.winner.map((e)=>e.name)} | {e.winner.map((e)=>e.points)} Poin </p>               
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