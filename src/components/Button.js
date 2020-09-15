import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

function Button({ name, color, wide, onClickFunct }) {
  const styleButton = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return (
    <button type="button" style={styleButton} onClick={() => onClickFunct(name)}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClickFunct: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#f5913e',
  wide: false,
};

export default Button;
