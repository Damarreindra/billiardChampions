import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListPlayer } from '../../actions/playerAction';

function RandomRoll() {
  const [rolledNumber, setRolledNumber] = useState(null);
  const [secondRolledNumber, setSecondRolledNumber] = useState(null)
  const [thirdRolledNumber, setThirdRolledNumber] = useState(null)

  const [data, setData] = useState([])
  const [rolling, setRolling] = useState(false);
  const player1 = data.filter((e)=>+e.id === rolledNumber);
  const player2 = data.filter((e)=>+e.id === secondRolledNumber)
  const player3 = data.filter((e)=>+e.id === thirdRolledNumber)
  
  

  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  const {getListPlayerResult} =
    useSelector((state) => state.PlayerReducer);

    useEffect(()=>{
        if(getListPlayerResult){
            setData(getListPlayerResult)
        }
    },[getListPlayerResult])



  const rollNumber = () => {
    setRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      setRolledNumber(randomNumber);

      let secondRollNumber;
      do{
        secondRollNumber = Math.floor(Math.random() * 3) + 1;
      }while(randomNumber === secondRollNumber)

      let thirdRollNumber;
      do{
        thirdRollNumber = Math.floor(Math.random() * 3) + 1;
      }while(randomNumber === thirdRollNumber || secondRollNumber === thirdRollNumber
       
        )
      setSecondRolledNumber(secondRollNumber)
      setThirdRolledNumber(thirdRollNumber)
      setRolling(false);
    }, 2000); 
 };

 const matchups = [
   [player1, player2],
   [player1, player3],
   [player2, player3],
   [player2, player1],
   [player3, player1],
   [player3, player2]
 ];
 const [selectedMatchups, setSelectedMatchups] = useState([]);

  const handleNextMatchup = () => {
    setSelectedMatchups(prevSelectedMatchups => [
      ...prevSelectedMatchups,
      matchups[selectedMatchups.length % matchups.length]
    ]);
  };

 

  return (
    <>
   
   {rolledNumber === null && (
  <div className='random text-center d-flex justify-content-center flex-column'>
    <div className={`mb-3 mx-auto dice ${rolling ? 'rolling' : ''}`}>
      {rolledNumber !== null ? <p>{rolledNumber}</p> : <p>?</p>}
    </div>
    <button className='btn btn-light' onClick={rollNumber} disabled={rolling}>
      {rolling ? 'Rolling...' : 'Roll the Dice'}
    </button>
  </div>
)}
 <div className=''>
      {selectedMatchups.map((matchup, index) => (
        <div className='d-flex align-items-center justify-content-between' key={index}>
          <div className="text-center">
            <img src={matchup[0][0].avatar} width={100} alt="" />
            <h1 className="text-white">{matchup[0][0].name}</h1>
          </div>
       <div>
        <img src="/images/vs.png" width={50} alt="" />
       </div>
          <div className="text-center">
            <img src={matchup[1][0].avatar} width={100} alt="" />
            <h1 className="text-white">{matchup[1][0].name}</h1>
          </div>
        </div>
      ))}
      <button onClick={handleNextMatchup}>+</button>
    </div>
    </>
  );
}

export default RandomRoll;
