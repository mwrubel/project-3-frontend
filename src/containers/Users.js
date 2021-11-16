import React, { useState, useEffect } from "react";
import UserLink from "../components/UserLink";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const usersList = users.map((u) => <UserLink key={u.name} user={u} />);

  return (
    <div>
      <ul>{usersList}</ul>
    </div>
  );
};

export default Users;
