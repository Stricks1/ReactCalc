import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

const App = () => (
  <div className="app m-auto">
    <Display />
    <ButtonPannel />
  </div>
);

export default App;
