import React from "react";

const Game = (props) => {

  return (
    <div>
      {props.game.won_game ? "Win" : "Loss"}
    </div>
  );
};
export default Game;
