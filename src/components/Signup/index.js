import React, { useState, useEffect } from "react"; 
//redux
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../../redux/User/user.actions";


import { Link, withRouter } from "react-router-dom";
import './styles.scss';
import { signInWithGoogle } from '../../firebase/utility';
import Formfield from "../forms/Formfield";
import GoogleLogo from './../../assets/google.png';
import Button from  './../forms/Button';
import GoogleButton from "../forms/GoogleButton";
import HeadForm from "../HeadForm";


const mapState = ({ user }) => ({
    successSignup: user.successSignup,
    errorSignup: user.errorSignup
});

const Signup = props => {
    //redux hooks
    const { successSignup, errorSignup} = useSelector(mapState);
    const dispatch = useDispatch();

    //state variable component
    const [displayName, placeDisplayName] = useState('');
    const [email, placeEmail] =  useState('');
    const [ password, placePassword] = useState('');
    const [ confirmPassword, placeConfirmPassword ] = useState('');
    const [errorm, placeErrorm ] = useState('');

    //dependency of successSignup
    useEffect(() => {
        //handle success case
        if(successSignup){
            reset();
            props.history.push('/');
        }
    }, [successSignup]);

    //dependency of errorSignup
    useEffect(() => {
        //handle error case
        if(Array.isArray(errorSignup) && errorSignup.length > 0 ){
            placeErrorm(errorSignup);
        }

    }, [errorSignup]);

    const reset = () => {
        placeDisplayName('');
        placeEmail('');
        placePassword('');
        placeConfirmPassword('');
        placeErrorm([]);
    }
    const handleFormSubmit =  event => {
        event.preventDefault();
        dispatch(userSignup({
        displayName,
        email,
        password,
        confirmPassword,
       }));
    }
    
       
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
                        <form onSubmit={handleFormSubmit}>
                        
                            <Formfield
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Enter Full name"
                            handleChange={e => placeDisplayName(e.target.value)}
                            />

                        <Formfield
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter Email"
                            handleChange={e => placeEmail(e.target.value)}
                            />

                        <Formfield
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter Password"
                            handleChange={e => placePassword(e.target.value)}
                            />

                        <Formfield
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            handleChange={e => placeConfirmPassword(e.target.value)}
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


export default withRouter(Signup);