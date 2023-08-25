import React from 'react';
import { useDispatch } from 'react-redux';
import { addGames } from '../../actions/playerAction';

const BottomNavbar = () => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(
      addGames({
        createdAt : Date.now()
      })
    );
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom half-height-navbar">
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="icons-container w-100 d-flex justify-content-between px-5">
        <button className="btn btn-icon btn-circle">
          <i className="fas fa-ranking-star"></i>
        </button>
        <button onClick={()=>handleSubmit()} className="btn btn-circle">
          <i className="fas fa-plus"></i>
        </button>
        <button className="disabled btn btn-icon btn-circle">
          <i className="fas fa-cog"></i>
        </button>
      </div>
    </div>
  </nav>
  
  );
};

export default BottomNavbar;
