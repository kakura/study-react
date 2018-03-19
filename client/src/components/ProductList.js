import React from 'react';
import { observer, Provider } from "mobx-react";
import ProductsStore from '../stores/ProductsStore';
import Products from './Products';

const stores = {
  items: new ProductsStore(),
};

export default class ProductList extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
        <div className="container items">
          <h3>これは商品検索一覧だよ</h3>
            <Provider {...stores}>
              <Products />
            </Provider>
        </div>
    );
  }
}
