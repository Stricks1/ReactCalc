import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display">{result}</div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
