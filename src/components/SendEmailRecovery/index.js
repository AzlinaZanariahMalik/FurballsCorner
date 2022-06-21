import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import Formfield from '../forms/Formfield';
import Button from '../forms/Button';
import HeadForm from "../HeadForm";
import { auth } from '../../firebase/utility';
//const initialState = {
//    email: '',
//    errorm: []
//};

const SendEmailRecovery = props => {
    const [ email, placeEmail ] = useState('');
    const  [errorm, placeErrorm ] = useState([]);

    const handleSubmit = async e =>{
        e.preventDefault();
    
        try{

            const setup ={
                url:'http://localhost:3000/login'
            };

            await auth.sendPasswordResetEmail(email, setup)
            .then(() => {
                props.history.push('/login');
            })
            .catch (() => {
                const e = ['Email Does not not exist from the registered account'];
                placeErrorm(e);
            });

        } catch(e){
            //console.log(e);
        }
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


export default withRouter (SendEmailRecovery);