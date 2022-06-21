import userTypes from "./user.Types";
import { auth, handleUserProfile } from "../../firebase/utility";


export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const userSignin = ({ email, password }) => async dispatch => {
    try{
        await auth.signInWithEmailAndPassword(email, password);

        dispatch({
            type: userTypes.SUCCESS_SIGN_IN,
            payload: true
        });
           
        } catch(e){
           //console.log(e);
        }
};

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