import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to="/" activestyle={{ background: "grey" }}>
          Home
        </NavLink>
        <br></br>
        <NavLink to="/users" activestyle={{ background: "grey" }}>
          Select User
        </NavLink>
      </ul>
    </div>
  );
};
export default Navigation;
