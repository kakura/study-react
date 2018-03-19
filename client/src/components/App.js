import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {MemberRegist} from './Member';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/member_regist" component={MemberRegist}/>
        <Switch>
          <Route path="/product/:id" component={ProductDetail}/>
          <Route path="/product/" component={ProductList}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

