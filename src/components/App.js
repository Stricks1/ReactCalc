import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 1,
      next: null,
      operation: '+',
    };
  }

  test() {
    console.log('start');
    let res = Calculate(this.state, '8');
    res = Calculate(res, '.');
    res = Calculate(res, '8');
    res = Calculate(res, '-');
    res = Calculate(res, '2');
    res = Calculate(res, '+');
    res = Calculate(res, '.');
    res = Calculate(res, '2');
    res = Calculate(res, '÷');
    res = Calculate(res, '2');
    res = Calculate(res, '+');
    console.log(res);
  }

  render() {
    this.test();
    return (
      <div className="app m-auto">
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}

export default App;
