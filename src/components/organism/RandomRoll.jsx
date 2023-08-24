import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPlayer} from "../../actions/playerAction";
import { useParams } from "react-router-dom";
import Loading from "../lottiefiles/loading.json"

import Lottie from "lottie-react";

function RandomRoll() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [poin_1, setPoin_1] = useState(0)
  const [poin_2, setPoin_2] = useState(0)
  const [poin_3, setPoin_3] = useState(0)
  const [inputValues, setInputValues] = useState([]);
  const [data, setData] = useState([]);
  

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = parseInt(value);
    setInputValues(updatedInputValues);
  };

  const findWinner = () => {
    const maxPoints = Math.max(...inputValues);
    return inputValues.reduce((winners, value, index) => {
      if (value === maxPoints) {
        winners.push(index);
      }
      return winners;
    }, []);
  };


  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  const { getListPlayerResult, getMatchesResult } = useSelector((state) => state.PlayerReducer);

  useEffect(() => {
    if (getListPlayerResult) {
      setData(getListPlayerResult);
      setInputValues(getListPlayerResult.map(() => 0));
    }
  }, [getListPlayerResult]);
return(
<>
<div className='game-title d-flex bg-white rounded justify-content-center p-3'>
    <h1 className="card__name ">Game {id}</h1>
    </div>

    { 
      <div>
      
      {data.map((player, index) => (
        <div key={player.id} className="container d-flex w-100 p-3 mt-3 rounded bg-white">
          <img src={player.avatar} width={100} alt="" />
          <div className="container">
            <h1 className="card__name">{player.name}</h1>
            <input
              className="form-control"
              type="number"
              value={inputValues[index]}
              onChange={e => handleInputChange(index, e.target.value)}
            />
          </div>
        </div>
      ))}
      <div className="container bg-white rounded p-3 text-center mt-3">
        <h2 className="card__name">Current Winner:</h2>
        {findWinner().map((winnerIndex, index) => (
          <p key={index}>{data[winnerIndex].name}</p>
        ))}
      </div>
    </div>
    }

  </>
)

}

export default RandomRoll;
