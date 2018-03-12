import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.onEvent}>Login</button>
      </div>
    );
  }
}

Button.propTypes = {
  onEvent:PropTypes.func.isRequired
}
