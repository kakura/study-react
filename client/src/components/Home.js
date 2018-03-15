import React from 'react';
import { observer, Provider } from "mobx-react";
import ProductsStore from '../stores/ProductsStore';
import Products from './Products';

const stores = {
  items: new ProductsStore(),
};

export default class Home extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    stores.items.getData();
  }

  render() {
    return (
        <div className="container items">
          <h3>これはサブサブタイトルだよ</h3>
            <Provider {...stores}>
              <Products />
            </Provider>
        </div>
    );
  }
}
