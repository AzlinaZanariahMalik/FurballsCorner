import React from "react";
import './styles.scss';
import {Input} from 'antd';
const Formfield = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="frow">
            {label &&(
                <label>
                    {label}
                </label>
            )}
            <div className="form">
                <Input className="formField" onChange={handleChange} {...otherProps} required/>
            </div>
            

        </div>
    );
}

export default Formfield;