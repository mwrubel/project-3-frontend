import React from "react";
import { Link} from "react-router-dom";

const UserLink = ({ user }) => {

  return (
    <div>
      <Link to={"/users/" + user.id}>
        <h3>{user.name}</h3>
      </Link>
      <br></br>
      Bankroll: {user.money}
      <br></br>
      User's total games: 
      {user.games?.length}
      <br></br>
      User win %: {(user.games?.filter(g => g.won_game)?.length / user.games?.length) * 100}
      {/* Round to 2 decimals */}
    </div>
  );
};

export default UserLink;
