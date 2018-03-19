import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route path="/product/:id" component={ProductDetail}/>
          <Route path="/product/" component={ProductList}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

