import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { getListPlayer } from '../../actions/playerAction';
import { Skeleton,Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

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

     
      const imageStyle = {
        width: '70%',
        height: '90%',
        bottom:0,
        position:'absolute'
      };
      const contentStyle = {
        position: 'absolute',
        top: '50%',
        left: '75%',
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
            <div style={containerStyle} className='profile__card bg-light rounded'>
            <img
              src={x.avatar} 
              alt="Background"
              style={imageStyle}
              className=''
            />
            <div style={contentStyle}>
              <h2 className='text-dark card__name'>{x.name}</h2>
              <p className='text-dark card__wins'>{x.wins} Wins</p>
              {
                x.wins <= 0  ?  <p className='card__wins'>WKWK AYAM</p> : ''
              }
            </div>
          </div>
          )
        })
       
      : <Skeleton>
  
      <div>contents wrapped</div>
      <div>won't be visible</div>
    </Skeleton>
      }
   
   
</OwlCarousel>
</div>
  )
}

export default Carousel