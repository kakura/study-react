import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    console.log();
    this.setState(() => {
      return {name: 'wwworld'}
    });
  }

  render() {
    return (
      <div>
        Hello, {this.state.name}.
        <Button onEvent={this.changeText}></Button>
      </div>
    );
  }
}

Greet.propTypes = {
  name: PropTypes.string
};