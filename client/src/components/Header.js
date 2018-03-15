import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Header extends React.Component {

  render() {
    return (
      <header className="navbar bd-header">
        <a className="navbar-brand" href="#">
          <img src="/assets/img_logo-top.png" width="100" alt="" />
        </a>
        <button className="btn ml-3" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars" aria-hidden="true"></span>
        </button>
      </header>
    );
  }
}

