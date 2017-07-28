import React, { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1, 2, 3],
    };
    this.renderNumbers = this.renderNumbers.bind(this);
  }

  componentDidMount() {

  }

  renderNumbers() {
    return _.map(this.state.numbers, number => (
      <div key={number}>{number}</div>
    ));
  }

  render() {
    return (
      <div>
        Boilerplate by YU-AN CHAN
        {this.renderNumbers()}
      </div>
    );
  }
}

export default App;
