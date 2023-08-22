import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { getListPlayer } from '../../actions/playerAction';

function Carousel() {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([])
  const { getListPlayerResult, getListPlayerLoading, getListPlayerError } =
    useSelector((state) => state.PlayerReducer);
 

  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  useEffect(() => {
    if (getListPlayerResult) {
      setPlayers(getListPlayerResult);
    }
  }, [getListPlayerResult]);

      const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust opacity as needed
      };
      const imageStyle = {
        width: '100%',
        height: '100%',
      };
      const contentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        zIndex: 1,
        textAlign: 'center',
        width: '80%',
      };
      const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '250px', 
        backgroundColor:'white'// Set the desired height
      };

    const options = {
        items: 1,
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
        },
        autoplay :true
      };

      
  return (
    <div className='carousel-wrapper mb-5 animate__animated animate__fadeInDown'>
    <OwlCarousel className='owl-theme' {...options}>
      {
      
        players ? 
        players.map((x)=>{
          return(
            <div style={containerStyle} className='rounded'>
            <div style={overlayStyle}></div>
            <img
              src={x.avatar} // Replace with your image URL
              alt="Background"
              style={imageStyle}
            />
            <div style={contentStyle}>
              <h2 className='card__name'>{x.name}</h2>
              <p className='card__wins'>{x.wins} Wins</p>
              {
                x.wins <= 0  ?  <p className='card__wins'>WKWK AYAM</p> : ''
              }
            </div>
          </div>
          )
        })
       
      : ""
      }
   
   
</OwlCarousel>
</div>
  )
}

export default Carousel