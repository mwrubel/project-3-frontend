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
        <NavLink to="/GamePage" activestyle={{ background: "grey" }}>
          All Game's History
        </NavLink>
        <br></br>
        <NavLink to="/users" activestyle={{ background: "grey" }}>
          User Stats
        </NavLink>
      </ul>
    </div>
  );
};
export default Navigation;
