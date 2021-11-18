import React from "react";

const DeleteUser = (userId) => {
  fetch("http://localhost:9292/users/" + userId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(console.log("DELETED " + userId));
  return <div></div>;
};
export default DeleteUser;
