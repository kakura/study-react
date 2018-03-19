import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';


export default class Header extends React.Component {

  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      toggle: 'show' // show OR hide
    }
  }

  toggleMenu() {
    let toggle = 'show';
    if (this.state.toggle == 'show') {
      console.log('hide');
      toggle = 'hide';
    }
    this.setState({ toggle: toggle });

  }

  render() {
    return (
      <header className="navbar bd-header  navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="/assets/img_logo-top.png" width="100" alt="" />
        </a>
        <button className="navbar-toggler" onClick={this.toggleMenu} data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars" aria-hidden="true"></span>
        </button>
        <Sidebar toggle={this.state.toggle} />
      </header>
    );
  }
}

