import React from 'react';
import P from 'prop-types';

const Button = ({ children, onButtonClick, disabled }) => {
    return (
        <button disabled={disabled} className="button" onClick={onButtonClick}>{children}</button>
    );
};

Button.propTypes = {
    children: P.node.isRequired,
    onButtonClick: P.func.isRequired,
    disabled: P.bool
}

export default Button; 