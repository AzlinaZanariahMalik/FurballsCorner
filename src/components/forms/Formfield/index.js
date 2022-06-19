import React from "react";
import './styles.scss';

const Formfield = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="frow">
            {label &&(
                <label>
                    {label}
                </label>
            )}
            <input className="formField" onChange={handleChange} {...otherProps} />

        </div>
    );
}

export default Formfield;