import React, { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { userSignin } from "../../redux/User/user.actions";


import { Link, withRouter } from 'react-router-dom';
import './styles.scss';
import Buttons from './../forms/Button';
import { auth, signInWithGoogle } from '../../firebase/utility';
import GoogleLogo from './../../assets/google.png';
import Formfield from "../forms/Formfield";
import Button from  './../forms/Button';
import GoogleButton from "../forms/GoogleButton";
import HeadForm from "../HeadForm";

const mapState = ({ user }) => ({
    successSignin: user.successSignin
});

const SignIn = props => {
  //redux hooks 
  const { successSignin } = useSelector(mapState);
  const dispatch = useDispatch();

  //state variable component
  const [email, setEmail] =  useState('');
  const [ password, setPassword] = useState('');

  //dependency of successSignup
  useEffect(() => {
    //handle success case
    if(successSignin){
        resetForm();
        props.history.push('/');
    }
  }, [successSignin]);

  //dependency of errorSignup

  const resetForm = () => {
    setEmail('');
    setPassword('');

  }
  const handleSubmit = e =>{
        e.preventDefault();
        dispatch(userSignin({ email, password}));
        //resetForm();
        //   props.history.push('/');
        //try{
        //    await auth.signInWithEmailAndPassword(email, password);
        //   
        //} catch(e){
           //console.log(e);
        //}
    }
        const setupHeadForm = {
            title: 'login'
        };

    return (
        <div className="container">
                  <HeadForm {...setupHeadForm}>
                  <div className="formWrap">
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


export default withRouter(SignIn);