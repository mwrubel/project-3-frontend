import React from "react";
import { Button } from "semantic-ui-react";
import GameResult from "../containers/GameResult";
// import User from "../containers/User";
// const Home = ({selectedUser}) => {
  const Home = () => {
  return (
    <div>
      Play Blackjack!!!
      <Button onClick={GameResult}> Win Game Result </Button>
      <Button onClick={GameResult}> Lose Game Result </Button>
      {/* {selectedUser.name} */}
    </div>
  );
};
export default Home;
