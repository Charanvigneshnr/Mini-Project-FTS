import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Fitness Tracking System
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Add User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Add Exercise{" "}
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                View Exercises
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
