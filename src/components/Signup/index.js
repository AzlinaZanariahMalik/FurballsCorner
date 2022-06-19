import React, { Component } from "react";
import './styles.scss';
import { auth, handleUserProfile, signInWithGoogle } from '../../firebase/utility';
import Formfield from "../forms/Formfield";
import GoogleLogo from './../../assets/google.png';
import Button from  './../forms/Button';
import GoogleButton from "../forms/GoogleButton";
import HeadForm from "../HeadForm";
import { Link } from 'react-router-dom';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorm: []
}
class Signup extends Component{

    constructor(props){
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
        });
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword, errorm } = this.state;

        if(password !== confirmPassword){
            const e = ['Password and Confirm Password Don\'t match'];
            this.setState({
                errorm: e
            });
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, { displayName });

            this.setState({
                ...initialState
            });
        } catch(e){
            //console.log(e);
        }
    }
    render(){

        const {displayName, email, password, confirmPassword, errorm} = this.state;
        const setupHeadForm = {
            title: 'register'
        };
        return (
            <div className="container">
            <HeadForm {...setupHeadForm}>
            <div className="formWrap">
            {errorm.length> 0 &&(
                        <ul>
                            {errorm.map((e, index) => {
                                return (
                                    <li key={index}>
                                        {e}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                        <form onSubmit={this.handleFormSubmit}>
                        
                            <Formfield
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Enter Full name"
                            onChange={this.handleChange}
                            />

                        <Formfield
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={this.handleChange}
                            />

                        <Formfield
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={this.handleChange}
                            />

                        <Formfield
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                            />  

                         <Button type="submit">
                            Register
                         </Button>

                             <div className="connect">
                                        <p>or</p>
                                    </div>
                                    <div className="googleSignin">
                                        <div className="row">
                                            <GoogleButton onClick={signInWithGoogle}>
                                                
                                                <div className="column">
                                                    <div className="gmage"><img src={GoogleLogo} /></div>
                                                </div>
                                                <div className="column">Sign in with Google</div> 
                                            </GoogleButton>
                                        </div>
                                    </div>
                                    <div className="linking">
                                        <p>Already Have an account? <Link to="/login">login here</Link></p>
                                    </div>
                        </form>
                    </div>
            </HeadForm>
                   
             
            </div>
        );
    }
}

export default Signup;