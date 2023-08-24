import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMatches, getListPlayer, getMatches } from "../../actions/playerAction";
import { useParams } from "react-router-dom";

function RandomRoll() {
  const id = useParams();
  const dispatch = useDispatch();

  const [rolledNumber, setRolledNumber] = useState(null);
  const [secondRolledNumber, setSecondRolledNumber] = useState(null);
  const [thirdRolledNumber, setThirdRolledNumber] = useState(null);
  const [match, setMatch] = useState();
  const [winner, setWinner] = useState();
  const [disabled, setDisabled] = useState(true);

  const [data, setData] = useState([]);
  const [rolling, setRolling] = useState(false);
  const player1 = data.filter((e) => +e.id === rolledNumber);
  const player2 = data.filter((e) => +e.id === secondRolledNumber);
  const player3 = data.filter((e) => +e.id === thirdRolledNumber);

  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getMatches({id:id}))
  },[dispatch])


  const { getListPlayerResult, getMatchesResult } = useSelector((state) => state.PlayerReducer);

  useEffect(() => {
    if (getListPlayerResult) {
      setData(getListPlayerResult);
    }
  }, [getListPlayerResult]);

  const handleSubmit = () => {
    dispatch(
      addMatches({
        createdAt: Date.now(),
        id: id,
        match: match,
        winner: winner,
      })
    );
  };

  const rollNumber = () => {
    setRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      setRolledNumber(randomNumber);

      let secondRollNumber;
      do {
        secondRollNumber = Math.floor(Math.random() * 3) + 1;
      } while (randomNumber === secondRollNumber);

      let thirdRollNumber;
      do {
        thirdRollNumber = Math.floor(Math.random() * 3) + 1;
      } while (
        randomNumber === thirdRollNumber ||
        secondRollNumber === thirdRollNumber
      );
      setSecondRolledNumber(secondRollNumber);
      setThirdRolledNumber(thirdRollNumber);
      setRolling(false);
      setDisabled(false);
    }, 2000);
  };

  const matchups = [
    [player1, player2],
    [player1, player3],
    [player2, player3],
    [player2, player1],
    [player3, player1],
    [player3, player2],
  ];
  const [selectedMatchups, setSelectedMatchups] = useState([]);

  const handleNextMatchup = () => {
    setSelectedMatchups((prevSelectedMatchups) => [
      ...prevSelectedMatchups,
      matchups[selectedMatchups.length % matchups.length],
    ]);
  };

  return (
    <>
  
      {rolledNumber === null && (
        <div className="random text-center d-flex justify-content-center flex-column">
          <div className={`mb-3 mx-auto dice ${rolling ? "rolling" : ""}`}>
            {rolledNumber !== null ? <p>{rolledNumber}</p> : <p>?</p>}
          </div>
          <button
            className="btn btn-light"
            onClick={rollNumber}
            disabled={rolling}
          >
            {rolling ? "Rolling..." : "Roll the Dice"}
          </button>
        </div>
      )}
      <div className="">
        {selectedMatchups.map((matchup, index) => (
          <div
            className="text-center bg-white mt-3 rounded p-1 h-50 align-items-center justify-content-between"
            key={index}
          >
            <h1 className="card__name">Match {index + 1}</h1>
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-center">
                <img src={matchup[0][0].avatar} width={100} alt="" />
                <h1 className="card__name__500">{matchup[0][0].name}</h1>
                <small>{matchup[0][0].wins} Wins</small>
              </div>
              <div>
                <img src="/images/vs.png" width={50} alt="" />
              </div>
              <div className="text-center">
                <img src={matchup[1][0].avatar} width={100} alt="" />
                <h1 className="card__name__500">{matchup[1][0].name}</h1>
                <small>{matchup[1][0].wins} Wins</small>
              </div>
            </div>
            <div className="d-flex p-2 flex-column w-50 mx-auto">
              <input type="hidden" name="match" defaultValue={index + 1} />
              <label htmlFor="winner">Winner</label>
              <select
                onChange={(e) => {
                  setWinner(e.target.value);
                  setMatch(index + 1); // Set match to index + 1 when select changes
                }}
                className="form-select"
                name="winner"
                id=""
                required
                defaultValue={matchup[1][0].name}
                value={winner}
              >
               
                <option value={matchup[1][0].name}>{winner}</option>
                <option value={matchup[1][0].name}>{matchup[1][0].name}</option>
                <option value={matchup[0][0].name}>{matchup[0][0].name}</option>
              </select>
              <button
                onClick={() => handleSubmit()}
                className="btn btn-primary mt-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn btn-danger position-fixed"
        style={{
          right: "10%",
          bottom: "30px",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
        }}
        disabled={disabled}
        onClick={handleNextMatchup}
      >
        {" "}
        <span className="fw-bold">+</span>{" "}
      </button>
     
    </>
  );
}

export default RandomRoll;
