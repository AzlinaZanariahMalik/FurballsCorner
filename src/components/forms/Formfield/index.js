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
            <div className="form">
                <input className="formField" onChange={handleChange} {...otherProps} />
            </div>
            

        </div>
    );
}

export default Formfield;