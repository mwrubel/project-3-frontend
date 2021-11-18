import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Game from "../components/Game";
import { Button } from "semantic-ui-react";
import Users from "./Users";

const User = () => {
  const [user, setUser] = useState({ games: [] });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292/users/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  const deleteUser = (userId) => {
    fetch("http://localhost:9292/users/" + userId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(()=>{
      console.log("DELETED " + userId)
      navigate("/users");
    })
    //use id from button to remove user from state
    //Users.handleRemoveUser(params);
    //go back to users page
    
  };

  const games = user.games.map((g) => <Game key={g.id} game={g} />);

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Games:{games}</h3>
      <Button onClick={() => deleteUser(params.id)} id="${params.id}">
        {" "}
        Delete user{" "}
      </Button>
    </div>
  );
};
export default User;
