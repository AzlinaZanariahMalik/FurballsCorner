import React, { useState, useEffect } from 'react';
//redux
import {useDispatch, useSelector} from 'react-redux';
import { passwordResetStart, userResetState } from '../../redux/User/user.actions';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import Formfield from '../forms/Formfield';
import Button from '../forms/Button';
import HeadForm from "../HeadForm";
import { auth } from '../../firebase/utility';

const mapState = ({ user }) => ({
    successPasswordReset: user.successPasswordReset,
    userErr: user.userErr 
});

const SendEmailRecovery = props => {
    const history = useHistory();
    //redux hooks
    const { successPasswordReset, userErr } = useSelector(mapState);
    const dispatch = useDispatch();

    //state variable component
    const [ email, placeEmail ] = useState('');
    const  [errorm, placeErrorm ] = useState([]);

   //dependency of successPasswordReset
    useEffect(() => {
        if (successPasswordReset){
           dispatch(userResetState());
            history.push('/login');
        }
    }, [successPasswordReset]);

    //dependency of errorPasswordReset
    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0){
            placeErrorm(userErr);
        }

    }, [userErr]);

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(passwordResetStart({ email }));
        
    }
   
       
        const setupHeadForm = {
            title: 'Enter Your Email'
        };
        return (
            <HeadForm {...setupHeadForm}>
                <div className="formWrap">
                                {errorm.length > 0 && (
                                    <ul>
                                        {errorm.map((e, index) => {
                                            return (
                                                <li key={index}>
                                                    {e}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <Formfield
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter Email"
                                        handleChange={e => placeEmail(e.target.value)}
                                        />

                                    <Button type="submit">
                                        Send
                                    </Button> 
                                    
                                </form>

                            </div>
            </HeadForm>
                               
        )
    }


export default SendEmailRecovery;