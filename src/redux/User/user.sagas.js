import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from "./user.Types";
import { successSignin } from './user.actions';

export function signinEmail ({payload: { email, password } }){
    if(email !== password){
        const e = ['Email and Password Don\'t match'];
        dispatch({
            type: userTypes.ERROR_SIGN_IN,
            payload: e
        });
        return;
    }
    
    try{
        await auth.signInWithEmailAndPassword(email, password);

        dispatch({
            type: userTypes.SUCCESS_SIGN_IN,
            payload: true
        });
           
        } catch(e){
           //console.log(e);
        }
}
export function onStartEmailSignin() {
    yield takeLatest(userTypes.START_EMAIL_SIGN_IN, signinEmail);
}

export default function* userSagas() {
    yield all([call(onStartEmailSignin)])
}