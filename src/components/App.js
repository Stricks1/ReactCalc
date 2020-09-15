import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btnName) {
    console.log('clicked');
    console.log(this.state);
    console.log(btnName);
  }

  render() {
    return (
      <div className="app m-auto">
        <Display />
        <ButtonPannel onClick={btnName => this.handleClick(btnName)} />
      </div>
    );
  }
}

export default App;
