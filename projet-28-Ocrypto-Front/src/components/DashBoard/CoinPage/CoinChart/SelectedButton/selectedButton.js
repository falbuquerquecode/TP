import PropTypes from 'prop-types';
import React from 'react';
import './selectedButtonStyles.scss';

function SelectButton({ children, onClick }) {
  return (
    <span onClick={onClick} className="selected-button">
      {children}
    </span>
  );
}

SelectButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(SelectButton);
