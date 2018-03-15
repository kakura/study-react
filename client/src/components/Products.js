import React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import PropTypes from 'prop-types';
import Product from './Product';

@inject('items')
@observer
export default class Products extends React.Component {

  static propTypes = {
    items: PropTypes.object.isRequired,
  };

  render() {
    const {items} = this.props;
    if(!items) {
      <div>Nothing data</div>
    }
    return (
      <div className="row">
        {items.items.map((item) => 
          <Product item={item} />
        )}
      </div>
    );
  }
}