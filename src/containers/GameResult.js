import React, { useState } from "react";
import { useParams } from "react-router";
import Game from "../components/Game";

const GameResult = () => {
  //false=lost game, true=win
  //const [result, setResult] = useState(false);
  //const params = useParams();
  console.log("GAME RESULT");
  /**USE EFFECT?? */

  //post game result to backend
  // const postGameResult = (game) => {
  //   fetch("http://localhost:9292/games", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       user_id: useParams.id,
  //       won_game: false,
  //     }),
  //   });
  // };

  return <div></div>;
};
export default GameResult;
