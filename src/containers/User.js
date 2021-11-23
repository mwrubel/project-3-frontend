import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Game from "../components/Game";
import { Button } from "semantic-ui-react";

const User = () => {
  const [user, setUser] = useState({ games: [] });
  const [selectedUserId, setSelectedUserId] = useState(0)
  const params = useParams();
  const navigate = useNavigate();

  //fetch (GET) users on change
  useEffect(() => {
    fetch("http://localhost:9292/users/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        //map data object to show games?
        setUser(data);
      });
  }, []);

  //fetch (DELETE) user
  const deleteUser = (e) => {
    fetch("http://localhost:9292/users/" + e.target.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(()=>{
      //go back to users page
      navigate("/users");
    }) 
  };

  const winGame = (e) => {
    fetch("http://localhost:9292/users/" + e.target.id + "/games", {
      method: "POST",
      headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*", },
      body: JSON.stringify({user_id: e.target.id, won_game: true, money: +5})
    })
    .then((r) => r.json())
    .then(data => {
      setUser({...user, games: [...user.games, data], money: user.money+5})
    })      
      }
  
  const loseGame = (e) => {
    fetch("http://localhost:9292/users/" + e.target.id + "/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user_id: e.target.id, won_game: false, money: -5})
    })
      .then((r) => r.json())
      .then(data => {
        setUser({...user, games: [...user.games, data], money: user.money-5})
    })
      }

  //map games, send to Game
  const userGames = user.games.map((g) => <Game game={g} />);

  return (
    <div>
      <h2>{user.name}</h2>      
      <Button onClick={deleteUser} id={params.id}>Delete user</Button>
      <Button onClick={loseGame} id={params.id}>Game lost</Button>
      <Button onClick={winGame} id={params.id}>Game won</Button>
      <h3>Games:{userGames}</h3>
      <br></br>
    </div>
  );
};
export default User;
