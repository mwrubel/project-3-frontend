import React, { useState, useEffect } from "react";
import UserLink from "../components/UserLink";
import { Button } from "semantic-ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const handleSubmit = (e) => {
    console.log("setting name: " + newUser);
    //UPDATE USERES ARRAY WITH AN ADDED USER TO END
    

    e.preventDefault();
    //POST NEW USER TO BACKEND
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser,
        money: 1000,
        wins: 0,
        total_games: 0,
      }),
    }).then((r) => r.json())
    .then(data => {
      setUsers([
      ...users,
      data
    ])
    })
  };

  const handleRemoveUser = (e) => {
    //need to object remove from users array
    console.log("params: " + e);
    console.log("params id: " + e.id);
  };

  //USER LIST, SENT TO USERLINK (CREATES CLICKABLE LINK FOR EACH USER)
  const usersList = users.map((u) => <UserLink key={u.name} user={u} />);

  return (
    <div>
      <input
        type="text"
        placeholder="add user"
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit user</button>
      <ul>{usersList}</ul>
    </div>
  );
};

export default Users;
