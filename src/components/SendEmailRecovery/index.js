import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import Formfield from '../forms/Formfield';
import Button from '../forms/Button';
import HeadForm from "../HeadForm";
import { auth } from '../../firebase/utility';
const initialState = {
    email: '',
    errorm: []
};

class SendEmailRecovery extends Component {
    constructor (props){
        super(props);
        this.state = {
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value } = e.target;
        this.setState({
            [name]: value
        })

    }

    handleSubmit = async e =>{
        e.preventDefault();
        

        try{

            const {email } = this.state;

            const setup ={
                url:'http://localhost:3000/login'
            };

            await auth.sendPasswordResetEmail(email, setup)
            .then(() => {
                this.props.history.push('/login');
            })
            .catch (() => {
                const e = ['Email Does not not exist from the registered account'];
                this.setState({
                    errorm:e
                });
            });

        } catch(e){
            //console.log(e);
        }
    }
    render() {
        const {email, errorm } = this.state;
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
                                <form onSubmit={this.handleSubmit}>
                                    <Formfield
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter Email"
                                        handleChange={this.handleChange}
                                        />

                                    <Button type="submit">
                                        Send
                                    </Button> 
                                    
                                </form>

                            </div>
            </HeadForm>
                               
        )
    }
}

export default withRouter (SendEmailRecovery);