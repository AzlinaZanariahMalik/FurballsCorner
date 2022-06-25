import React, { useState, useEffect } from "react"; 
//redux
import { useDispatch, useSelector } from "react-redux";
import { userSignupStart, startGoogleSignin} from "../../redux/User/user.actions";


import { Link, useHistory } from "react-router-dom";
import './styles.scss';

import Formfield from "../forms/Formfield";
import GoogleLogo from './../../assets/google.png';
import Button from  './../forms/Button';
import GoogleButton from "../forms/GoogleButton";
import HeadForm from "../HeadForm";

 
const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr 
   
});
 
const Signup = props => {
    const history = useHistory();
    //redux hooks
    const { currentUser, userErr} = useSelector(mapState);
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
        if(currentUser){
            reset();
            history.push('/');
        }
    }, [currentUser]);

    //dependency of errorSignup
    useEffect(() => {
        //handle error case
        if(Array.isArray(userErr) && userErr.length > 0 ){
            placeErrorm(userErr);
        }

    }, [userErr]);

    const reset = () => {
        placeDisplayName('');
        placeEmail('');
        placePassword('');
        placeConfirmPassword('');
        placeErrorm([]);
    }
    const handleFormSubmit =  event => {
        event.preventDefault();
        dispatch(userSignupStart({
        displayName,
        email,
        password,
        confirmPassword,
       }));
    }
    
    const handleGoogleSignin = () => {
        dispatch(startGoogleSignin());
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
                                            <GoogleButton onClick={handleGoogleSignin}>
                                                
                                                <div className="column">
                                                   
                                                </div>
                                                <div className="column">Sign in with Google</div> 
                                            </GoogleButton>
                                        </div>
                                    </div>
                                    <div className="linking">
                                        <p>Already Have an account? <Link to="/login">Login here</Link></p>
                                    </div>
                        </form>
                    </div>
            </HeadForm>
                   
             
            </div>
        );
    }


export default Signup;