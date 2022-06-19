import React from "react";
import './styles.scss';

const GoogleButton = ({ children, ...otherProps}) => {
    return (
        <button className="gbtn" {...otherProps}>
            {children}
        </button>
    );
}

export default GoogleButton;