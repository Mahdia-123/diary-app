import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Students
        </NavLink>
        <NavLink
          to="/studentsdetails"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Students Details
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Teachers
        </NavLink>
        <NavLink
          to="/teachersDetails"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Teachers Detalis
        </NavLink>
        <div style={{ flex: 1 }} />
        <a href="#" className="nav-link">
          Login
        </a>
        <a href="#" className="nav-link">
          Sign Up
        </a>
      </nav>
    </div>
  );
}
