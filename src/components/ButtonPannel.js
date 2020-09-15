import React from 'react';
import '../index.css';
import Button from './Button';

function ButtonPannel() {
  const grayColor = '#e0e0e0';
  const doubleSize = true;
  const propsBtns = [{ name: 'AC', color: grayColor },
    { name: '+/-', color: grayColor },
    { name: '%', color: grayColor },
    { name: '÷' },
    { name: '7', color: grayColor },
    { name: '8', color: grayColor },
    { name: '9', color: grayColor },
    { name: 'X' },
    { name: '4', color: grayColor },
    { name: '5', color: grayColor },
    { name: '6', color: grayColor },
    { name: '-' },
    { name: '1', color: grayColor },
    { name: '2', color: grayColor },
    { name: '3', color: grayColor },
    { name: '+' },
    { name: '0', color: grayColor, wide: doubleSize },
    { name: '.', color: grayColor },
    { name: '=' }];

  const createPannelLine = (propsBtns, line) => {
    const result = [];
    let i = 0;
    let index = line * 4;
    while (i < 4 && index < (propsBtns.length)) {
      result.push(<Button
        key={index + 1}
        name={propsBtns[index].name}
        color={propsBtns[index].color}
        wide={propsBtns[index].wide}
      />);
      i += 1;
      index += 1;
    }

    return (
      <div className="d-flex calc-line">
        { result.map(btn => btn) }
      </div>
    );
  };

  return (
    <div className="d-flex flex-column">
      { createPannelLine(propsBtns, 0) }
      { createPannelLine(propsBtns, 1) }
      { createPannelLine(propsBtns, 2) }
      { createPannelLine(propsBtns, 3) }
      { createPannelLine(propsBtns, 4) }
    </div>
  );
}

export default ButtonPannel;
