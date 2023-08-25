import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLoser, addWinner, addWins, getListPlayer } from "../../actions/playerAction";
import { useParams } from "react-router-dom";
import Loading from "../lottiefiles/loading.json";

import Lottie from "lottie-react";

function RandomRoll() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState([]);
  const [data, setData] = useState([]);
  const [winners, setWinners] = useState([]);
  const [losers, setLosers] = useState([]);
  const [oldData, setOldData] = useState([]);

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

  const findLoser = (winnerIndices) => {
    const losers = inputValues.reduce((losers, value, index) => {
      if (!winnerIndices.includes(index) && value < inputValues[winnerIndices[0]]) {
        losers.push(index);
      }
      return losers;
    }, []);

    return losers;
  };

  
  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  const { getListPlayerResult } = useSelector((state) => state.PlayerReducer);

  useEffect(() => {
    if (getListPlayerResult) {
      setData(getListPlayerResult);
      setInputValues(getListPlayerResult.map(() => 0));
    }
  }, [getListPlayerResult]);

  const handlePostWinnerAndLosers = async () => {
    const winnerIndices = findWinner();
    const winners = winnerIndices.map((index) => ({
      id: data[index].id,
      name: data[index].name,
      points: inputValues[index],
    }));
    dispatch(
      addWinner({
        winner: winners,
        id: id,
      })
    );

    winnerIndices.forEach((index) => {
    
    const winnerId = winners.map((e)=>e.id);
    const winnerWins = data.filter((e)=>e.id === winnerId.toString()).map((e)=>e.wins).toString()

      dispatch(
        addWins({
          wins: parseInt(winnerWins) +1 , // Increase wins by 1
          id: winnerId, // Use data[index].id
        })
      );
    });


    const loserIndices = findLoser(winnerIndices);
    const losers = loserIndices.map((index) => ({
      id: data[index].id,
      name: data[index].name,
      points: inputValues[index],
    }));
    dispatch(addLoser({ losers: losers, id: id }));

    // Update the winners and losers state for rendering
    setWinners(winners);
    setLosers(losers);
  };

  return (
    <>
      <div className="game-title d-flex bg-white rounded justify-content-center p-3">
        <h1 className="card__name ">Game {id}</h1>
      </div>

      {
        <div className="d-flex justify-content-center flex-column">
          {
          
          data.map((player, index) => (
            <div
              key={player.id}
              className="container d-flex w-100 p-3 mt-3 rounded bg-white"
            >
              <img src={player.avatar} width={100} alt="" />
              <div className="container">
                <h1 className="card__name">{player.name}</h1>
                <input
                  className="form-control"
                  type="number"
                  value={inputValues[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </div>
            </div>
          ))}
          <div className="container bg-white rounded p-3 text-center mt-3">
            <h2 className="card__name">Current Winner:</h2>
            {winners.map((winner, index) => (
            <p key={index}>{winner.name}</p>
          ))}
           
          </div>

          <div className="container bg-white rounded p-3 text-center mt-3">
            <h2 className="card__name">Current Losers:</h2>
            {losers.map((loser, index) => (
            <p key={index}>{loser.name}</p>
          ))}
           
           

          </div>
          <button className="mt-3 btn btn-block btn-success" onClick={handlePostWinnerAndLosers}>
              Post Winner
            </button>
        </div>
      }
    </>
  );
}

export default RandomRoll;
