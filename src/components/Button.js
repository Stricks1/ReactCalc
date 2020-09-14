import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    const { name, color, size } = this.props;
    return <button type="button" className={`${color} ${size}`}>{ name }</button>;
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
