import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/Game";

const User = () => {
  const [user, setUser] = useState({ games: [] });

  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:9292/users/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  const games = user.games.map((g) => <Game key={g.id} game={g} />);

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Games:{games}</h3>
    </div>
  );
};
export default User;
