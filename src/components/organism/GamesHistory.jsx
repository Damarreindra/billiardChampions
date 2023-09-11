import React, { useEffect, useState } from "react";
import { getGames, getListPlayer } from "../../actions/playerAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton, Stack } from "@chakra-ui/react";

function GamesHistory() {
  const dispatch = useDispatch();
  const { getGameResult, getListPlayerResult } = useSelector(
    (state) => state.PlayerReducer
  );

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListPlayer());
  }, [dispatch]);

  return (
    <div className="container p-3">
      {getGameResult && getListPlayerResult ? (
        getGameResult.map((e, index) => {
          let podiumClassName = "";
          if (e.id % 2 === 0) {
            podiumClassName +=
              "even container shadow rounded  animate__animated animate__fadeIn ";
          } else {
            podiumClassName +=
              "odd container shadow rounded  animate__animated animate__fadeIn ";
          }
          const winnerPlayers = getListPlayerResult.filter((player) =>
            e.winner.map((item) => item.id).includes(player.id)
          );
          return (
            <Link
              style={{ textDecoration: "none" }}
              className="text-white "
              to={`/game/${e.id}`}
            >
              <div className={podiumClassName}>
                <div
                  key={e.id}
                  className="games__history align-items-center p-3 mt-3 rounded"
                >
                  <h1 className="history__card__title text-center">
                    Game {e.id}
                  </h1>
                  <p className="card__name text-center">
                    Winner is {e.winner.map((e) => e.name)} (
                    {e.winner.map((e) => e.points)} Poin){" "}
                  </p>

                  <div className="d-flex align-items-center">
                    <div className="w-100">
                      <p className="card__name__600"> Losers : </p>
                      <p>
                        {e.losers.map((e) => e.name)[0]} (
                        {e.losers.map((e) => e.points)[0]} Poin)
                      </p>
                      <p>
                        {" "}
                        {e.losers.map((e) => e.name)[1]} (
                        {e.losers.map((e) => e.points)[1]} Poin)
                      </p>
                    </div>
                    <div className="winner-image-container">
                      <img
                        className="grayed__image"
                        srcSet={winnerPlayers.map((e) => e.avatar)}
                        width={250}
                        alt=""
                      />
                      <div className="winner-stamp">
                        <img
                          src="/images/medal.png"
                          width={70}
                          alt=""
                          srcset=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="animate__animated animate__fadeOut">
          <Stack>
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
          </Stack>
        </div>
      )}
    </div>
  );
}

export default GamesHistory;
