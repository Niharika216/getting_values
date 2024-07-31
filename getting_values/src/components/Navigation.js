import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/About">About</Link>
      <Link to="/Academics">Academics</Link>
      <Link to="/Application">Application</Link>
      <Link to="/SignOut">Sign out</Link>
    </nav>
  );
}

export default Navigation;
