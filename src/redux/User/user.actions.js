import userTypes from "./user.Types";
import { auth, handleUserProfile, GoogleProvider } from "../../firebase/utility";

export const startemailSignin = userCredentials => ({
    type: userTypes.START_EMAIL_SIGN_IN,
    payload: userCredentials
});

export const successSignin = userCredentials => ({
    type: userTypes.SUCCESS_SIGN_IN,
    payload: user
});










export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const authenticationReset =  () => ({
    type: userTypes.AUTHENTICATION_RESET
});
//export const userSignin = ({ email, password }) => async dispatch => {
    
//};

export const userSignup = ({ displayName, email, password, confirmPassword }) => async dispatch => {
    if(password !== confirmPassword){
        const e = ['Password and Confirm Password Don\'t match'];
        dispatch({
            type: userTypes.ERROR_SIGN_UP,
            payload: e
        });
        return;
    }
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await handleUserProfile(user, { displayName });
        dispatch({
            type: userTypes.SUCCESS_SIGN_UP,
            payload: true
        });

    } catch(e){
        //console.log(e);
    }

};

export const passwordReset = ({ email }) => async dispatch =>{
    const setup ={
        url:'http://localhost:3000/login'
    };

    try{

        await auth.sendPasswordResetEmail(email, setup)
        .then(() => {
            dispatch({
                type: userTypes.SUCCESS_PASSWORD_RESET,
                payload: true
            });
           
        })
        .catch (() => { 
            const e = ['Email does not exist from the registered account'];
            dispatch({
                type: userTypes.ERROR_PASSWORD_RESET,
                payload: e
            })
            //return;
        });

    } catch(e){
        //console.log(e);
    }
};

export const signInWithGoogle = () => async dispatch =>{
    try{
        await auth.signInWithPopup(GoogleProvider)
        .then(() => {
            dispatch({
                type: userTypes.SUCCESS_SIGN_IN,
                payload: true
            });
        });
    }catch (e){
        //console.log(e);
    }
    
};