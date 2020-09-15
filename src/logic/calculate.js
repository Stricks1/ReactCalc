import Operate from './operate';

const Calculate = (calculator, btnName) => {
  const { total, next, operation } = calculator;

  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].some(v => btnName === v)) {
    if (operation) {
      return { total, next: next ? next + btnName : btnName, operation };
    }
    return { total: total ? total + btnName : btnName, next, operation };
  }
  if (btnName === '.') {
    if (operation) {
      if (next) {
        return { total, next: next + btnName, operation };
      }
      return { total, next: `0${btnName}`, operation };
    }
    return { total: total + btnName, next, operation };
  }
  if (operation) {
    return {
      total: Operate(total, next, operation),
      next: null,
      operation: Operate(total, next, operation) === 'Error Division by 0' ? null : btnName,
    };
  }
};

export default Calculate;
