import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

const UserLink = ({ user }) => {
  

  return (
    <div>
      <Link to={"/users/" + user.id}>
        <h3>{user.name}</h3>
      </Link>
      <br></br>
      Bankroll: {user.money}
      <br></br>
      User's wins: {user.wins}
      <br></br>
      User's total games: {user.total_games}
      <br></br>
      User win %: {(user.wins / user.total_games) * 100}
    </div>
  );
};

export default UserLink;
