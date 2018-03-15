import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

export default class Product extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    console.log(item);
    if (!item) {
      return (
        <div>Nothing data</div>
      )
    }
    return (
      <div className="col-lg-4 product">
        <a href="#">
          <div className="card">
            <img className="card-img-top" src="/assets/sample.jpeg" alt="Card image cap" />
            <div className="card-body">
              <h5>{item.name}</h5>
              <p className="card-text">
                <span className="badge badge-secondary">New</span>
                <span className="badge badge-secondary">New</span>
                <span className="badge badge-secondary">New</span>
                <span className="badge badge-secondary">New</span>
                <span className="badge badge-secondary">New</span>
                <span className="badge badge-secondary">New</span>
                <span className="badge badge-secondary">New</span>
              </p>
              <div className="price">￥5,000</div>
              <div className="farmer">
                <div className="row">
                  <div className="col-2">
                    <img src="/assets/sample.jpeg" alt="農家" className="rounded-circle" width="55" height="55" />
                  </div>
                  <div className="col-9 offset-sm-1">
                    <p>
                      {item.descript}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

    );
  }
}

