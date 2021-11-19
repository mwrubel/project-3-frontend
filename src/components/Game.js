import React from "react";

const Game = ({ game }) => {
  console.log(game);
  return (
    <div>
      <h3>{game}</h3>
      {/* <h3>{game.games}</h3> */}
    </div>
  );
};
export default Game;
