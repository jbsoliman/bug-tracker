import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">BugTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/add-user" className="nav-link">Users</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add-project" className="nav-link">Projects</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add-ticket" className="nav-link">Tickets</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}