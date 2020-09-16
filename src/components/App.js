import React, { Component } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operation) {
    const stateCalc = calculate(this.state, operation);
    this.setState(stateCalc);
  }

  render() {
    const { total, next, operation } = this.state;
    let display = '0';
    if (next) {
      display = next;
    } else if ((operation && operation !== '=') && total) {
      display = operation;
    } else {
      display = total || '0';
    }
    return (
      <div className="app m-auto">
        <Display result={display} />
        <ButtonPannel onClick={nameBtn => this.handleClick(nameBtn)} />
      </div>
    );
  }
}

export default App;
