import React from 'react';
import './podium.css'; // You can create this CSS file for styling

const PodiumRank = ({ rank, name, wins, avatar }) => {
  let podiumClassName = 'podium-rank';
  if (rank === 1) {
    podiumClassName += ' first-place';
  } else if (rank === 2) {
    podiumClassName += ' second-place';
  } else if (rank === 3) {
    podiumClassName += ' third-place';
  }

  return (
    <div className={podiumClassName}>
      <div className="podium-rank__number">{rank}</div>
      <div className="podium-rank__details">
        <h2 className="podium-rank__name">{name}</h2>
        <p className="podium-rank__score">{wins} wins</p>
      </div>
      <img src={avatar} width={50} alt="" />
    </div>
  );
};

export default PodiumRank;
