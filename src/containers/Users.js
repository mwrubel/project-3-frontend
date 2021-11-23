import React, { useState, useEffect } from "react";
import UserLink from "../components/UserLink";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();
    //POST NEW USER TO BACKEND
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser,
        money: 1000
      }),
    }).then((r) => r.json())
    .then(data => {
      setUsers([
      ...users,
      data
    ])
    })
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
