import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador con Clase</h2>
        <p>Cuenta actual: {this.state.count}</p>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

export default CounterClass;
