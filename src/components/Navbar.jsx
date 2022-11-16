import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <a href="https://irfansutlu.github.io/mywebsite/">
        <img src="https://irfansutlu.github.io/mywebsite/img/irfanpp-removebg-preview.png" />
      </a>
      <nav>
        <NavLink className="nav-li" to="/">HOME</NavLink>
        <NavLink className="nav-li" to="about">ABOUT</NavLink>
        <NavLink className="nav-li" to="login" onClick={()=>sessionStorage.clear()}>{sessionStorage.getItem("user") ? "LOGOUT" : "LOGIN"}</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
