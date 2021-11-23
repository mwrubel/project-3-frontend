import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Users from "./containers/Users";
import User from "./containers/User";
import Game from "./components/Game";

function App() {
  return (
    <Router>
      {<Navigation />}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/games" element={<Game />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
