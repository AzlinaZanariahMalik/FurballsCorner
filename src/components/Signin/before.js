import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { startEmailSignin, startGoogleSignin } from "../../redux/User/user.actions";
 

import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import Buttons from './../forms/Button';

import GoogleLogo from './../../assets/google.png';
import Formfield from "../forms/Formfield";
import Button from  './../forms/Button';
import GoogleButton from "../forms/GoogleButton";
import HeadForm from "../HeadForm";

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    errorSignin: user.errorSignin
});

const SignIn = props => {
  const history = useHistory();
  //redux hooks 
  const { currentUser, errorSignin } = useSelector(mapState);
  const dispatch = useDispatch();

  //state variable component
  const [email, setEmail] =  useState('');
  const [ password, setPassword] = useState('');
  const [errorm, placeErrorm ] = useState('');

 
  //dependency of successSignin 
  useEffect(() => {
    //handle success case
    if(currentUser){
        resetForm();
        history.push('/');
    }
  }, [currentUser]);

  //dependency of errorSignin
  useEffect(() => {
    //handle error case
    if(Array.isArray(errorSignin) && errorSignin.length > 0 ){
        placeErrorm(errorSignin);
    }

}, [errorSignin]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    placeErrorm([]);
  }
  const handleSubmit = e =>{
        e.preventDefault();
        dispatch(startEmailSignin({ email, password}));
        //resetForm();
        //   props.history.push('/');
        //try{
        //    await auth.signInWithEmailAndPassword(email, password);
        //   
        //} catch(e){
           //console.log(e);
        //}
    }
 
    const handleGoogleSignin = () => {
        dispatch(startGoogleSignin());
    }
        const setupHeadForm = {
            title: 'login'
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
                                <form onSubmit={handleSubmit}>
                                    <Formfield
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter Email"
                                        handleChange={e => setEmail(e.target.value)}
                                        />

                                    <Formfield
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="Enter Password"
                                        handleChange={e => setPassword(e.target.value)}
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
                                            <GoogleButton onClick={handleGoogleSignin}>
                                                
                                                <div className="column">
                                                    
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


export default SignIn;