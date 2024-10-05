import React, { Component } from 'react';
import '../styles/StatefulClass.css';

class StatefulClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="stateful-class">
        <h2>Estado con Clases</h2>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}

export default StatefulClass;
