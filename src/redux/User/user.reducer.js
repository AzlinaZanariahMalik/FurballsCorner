import { actionChannel } from "redux-saga/effects";
import userTypes from "./user.Types";

const START_STATE ={
    currentUser: null,
    successPasswordReset: false,
    userErr: []
    
};

const userReducer = (state=START_STATE, act) => {
    switch(act.type) {
       case userTypes.SUCCESS_SIGN_IN:
        return {
            ...state,
            currentUser: act.payload,
            userErr: []
        }
       
        case userTypes.SUCCESS_PASSWORD_RESET:
        return {
            ...state,
            successPasswordReset: act.payload
        }
        case userTypes.USER_ERROR:
        return{
            ...state,
            userErr: act.payload
        }
        case userTypes.USER_RESET_STATE:
        case userTypes.USER_SIGN_OUT_SUCCESS:
        return {
            ...state,
            ...START_STATE
        
        }
        default:
            return state;

    }
}; 

export default userReducer;