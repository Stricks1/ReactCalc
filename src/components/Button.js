import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  const styleButton = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return (
    <button type="button" style={styleButton}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

export default Button;
