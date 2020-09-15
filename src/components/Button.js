import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Button({ name, color, size }) {
  return (
    <button type="button" className={`${color} ${size}`}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Button;
