import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addGames } from '../../actions/playerAction';

function Dice() {
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    dispatch(
      addGames({
        createdAt : Date.now()
      })
    );
  };
  
  return (

    <div onClick={()=>handleSubmit()} className='animate__animated animate__backInUp container rounded d-flex align-items-center card__menu'>
     <img src="/images/billiard.png" width={100} alt="" />           
 <h1 className='menu__name text-black'>Let's Play Some</h1>
    </div>
 
  )
}

export default Dice