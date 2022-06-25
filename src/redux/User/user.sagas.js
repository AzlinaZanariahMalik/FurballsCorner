import { takeLatest, call, all, put } from 'redux-saga/effects';
import userTypes from "./user.Types";
import { successSignin, userSignoutSuccess, userError, successPasswordReset} from './user.actions';
import { handlePasswordResetAPI } from './user.helpers';
//Firebase
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from "../../firebase/utility";

export function* getSnapshotFromUserAuth(user, additionalData={}){
    try{
         
              const userRef = yield call(handleUserProfile, { userAuth: user, additionalData});
              const snapshot = yield userRef.get();

              yield put(
                successSignin({
                    id: snapshot.id,
                    ...snapshot.data()
                })
              );

                   
    } catch(e){
        //console.log(e);
    }
}
export function* signinEmail ({payload: { email, password } }){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

        //dispatch({
        //    type: userTypes.SUCCESS_SIGN_IN,
        //    payload: true
        //});
           
        } catch(e){
           //console.log(e);
        }
}
export function* onStartEmailSignin() {
    yield takeLatest(userTypes.START_EMAIL_SIGN_IN, signinEmail);
}

export function* userAuthentication(){
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(e){
        //console.log(e)
    }
}
export function* onUserSession() {
    yield takeLatest(userTypes.USER_SESSION, userAuthentication);
}

export function* userSignout(){
    try{
        yield auth.signOut();
        yield put(
            userSignoutSuccess()
        )
    } catch(e){
        //console.log(e)
    }
}
export function* onUserSignoutStart(){
    yield takeLatest(userTypes.USER_SIGN_OUT_START, userSignout) 
}

export function* userSignup({payload: {
    displayName,
    email,
    password,
    confirmPassword
}}) {
    if(password !== confirmPassword){
        const e = ['Password and Confirm Password Don\'t match'];
        yield put(
            userError(e)
        );
        return;
    }
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        const additionalData =  { displayName };
        yield getSnapshotFromUserAuth(user, additionalData );
        //yield call(handleUserProfile, { userAuth: user, });
        

    } catch(e){
        //console.log(e);
    }
}

export function* onUserSignupStart (){
    yield takeLatest(userTypes.USER_SIGN_UP_START, userSignup);

}
export function* passwordReset({ payload: {email}}){
    

    try{ 

        yield call(handlePasswordResetAPI, email);
        yield put(
            successPasswordReset()
        );

    } catch(e){
        yield put(
            userError(e)
            )
    }

}

export function* onPasswordResetStart() {
    yield takeLatest(userTypes.PASSWORD_RESET_START, passwordReset);
}

export function* signinGoogle(){
    try{
       const { user } = yield auth.signInWithPopup(GoogleProvider);
       yield getSnapshotFromUserAuth(user);
       
    }catch (e){
        //console.log(e);
    }

}

export function* onStartGoogleSignin(){
    yield takeLatest(userTypes.START_GOOGLE_SIGN_IN, signinGoogle)
}

export default function* userSagas() {
    yield all([
        call(onStartEmailSignin), 
        call (onUserSession), 
        call(onUserSignoutStart), 
        call(onUserSignupStart),
        call(onPasswordResetStart),
        call(onStartGoogleSignin),
    ])
}