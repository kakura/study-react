import React from 'react';
import { observer, inject } from "mobx-react";
import PropTypes from 'prop-types'; 
import ProductStore from '../stores/ProductStore';

@observer
export default class ProductDetail extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    //item: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.store  = new ProductStore()
  }

  componentDidMount() {
    console.log(this.props);
    this.store.getData(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.store = void 0 // unmount時に削除
  }

  render() {
    console.log(this.store);
    const {id} = this.store;
    if(!id) {
      <div>Nothing data</div>
    }

    return (
        <div className="container items">
          <h3>{this.store.id}</h3>
        </div>
    );
  }
}
