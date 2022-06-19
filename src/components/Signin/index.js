import React, { Component } from "react";
import './styles.scss';
import Buttons from './../forms/Button';
import { auth, signInWithGoogle } from '../../firebase/utility';
import GoogleLogo from './../../assets/google.png';
import Formfield from "../forms/Formfield";
import Button from  './../forms/Button';
import GoogleButton from "../forms/GoogleButton";
import HeadForm from "../HeadForm";
import { Link } from 'react-router-dom';

const initialState = {
    email: '',
    password: ''
};
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = async e =>{
        e.preventDefault();
        const {email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch(e){
            //console.log(e);
        }
    }
    render(){
        const { email, password } = this.state;

        const setupHeadForm = {
            title: 'login'
        };

    return (
        <div className="container">
                  <HeadForm {...setupHeadForm}>
                  <div className="formWrap">
                                <form onSubmit={this.handleSubmit}>
                                    <Formfield
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter Email"
                                        handleChange={this.handleChange}
                                        />

                                    <Formfield
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="Enter Password"
                                        handleChange={this.handleChange}
                                        />
                                    <div className="forgotpass">
                                        <Link to="/recoveraccount">
                                            <p>Forgot Password?</p>
                                        </Link>
                                    </div>
                                    <Button type="submit">
                                        Login
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
                                        <p>Don't Have an account? <Link to="/registration">Register here</Link></p>
                                    </div>
                                </form>
                  </div>
                  </HeadForm>

                            
                       
        </div>
        
    );
    }
}

export default SignIn;