import React from 'react';

class Greet extends React.Component {
  render() {
    return (
      <div>Hello, {this.props.name}.</div>
    );
  }
}