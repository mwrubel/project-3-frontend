import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Game from "../components/Game";
import { Button } from "semantic-ui-react";

const User = () => {
  const [user, setUser] = useState({ games: [] });
  const params = useParams();
  const navigate = useNavigate();

  //fetch (GET) users on change
  useEffect(() => {
    fetch("http://localhost:9292/users/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  //select user to play blackjack
  const selectUser = (e) => {
    console.log("selected " + e.target.id)

  // <Home>{user};</Home>
    //go back to users page
    navigate("/");
  }
  //fetch (DELETE) user
  const deleteUser = (e) => {
    fetch("http://localhost:9292/users/" + e.target.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(()=>{
      console.log("DELETED " + e.target.id)
      //go back to users page
      navigate("/users");
    }) 
  };

  console.log("PARAMS" + params)

  //map games, send to Game
  const games = user.games.map((g) => <Game key={g.id} game={g} />);

  console.log("GAMES: " + games)
  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Games:{games}</h3>
      <Button onClick={selectUser} id={params.id}>Select user</Button>
      <br></br>
      <Button onClick={deleteUser} id={params.id}>
        Delete user
      </Button>

    </div>
  );
};
export default User;
