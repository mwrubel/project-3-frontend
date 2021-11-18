import React from "react";
import { Button } from "semantic-ui-react";
import GameResult from "../containers/GameResult";
const Home = () => {
  return (
    <div>
      Play Blackjack!!!
      <Button onClick={GameResult}> Game Result </Button>
      <button className="ui primary button">Post game loss</button>
    </div>
  );
};
export default Home;
