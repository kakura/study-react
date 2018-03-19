import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Products from './Products';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path="/product" component={Products}/>
        <Footer />
      </div>
    );
  }
}

