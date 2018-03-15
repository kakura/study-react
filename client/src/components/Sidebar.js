import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className="navbar navbar-light">
        <div className="collapse navbar-collapse bd-sidebar show" id="sidebar">
          <a className="navbar-brand" href="#">Hidden brand</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

