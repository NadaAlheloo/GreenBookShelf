import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="brandMark">♻</span>
        <div>
          <div className="brandTitle">Green Bookshelf</div>
          <div className="brandSub">Books • Filter • Sort</div>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
          Home
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
          Login
        </NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
          Register
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "navLink active" : "navLink")}>
          About
        </NavLink>
      </nav>
    </header>
  );
}
