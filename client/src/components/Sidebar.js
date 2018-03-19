import React from 'react';
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className={`collapse navbar-collapse ${this.props.toggle}`} id="sidebar">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">設定</Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link">レビュー</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">ログイン</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="キーワード" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">検索</button>
        </form>
      </div>
    );
  }
}

