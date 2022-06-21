import userTypes from "./user.Types";

const START_STATE ={
    currentUser: null,
    successSignin: false,
    successSignup:false,
    errorSignup: []
    

};

const userReducer = (state=START_STATE, act) => {
    switch(act.type) {
        case userTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: act.payload
        }
        case userTypes.SUCCESS_SIGN_IN:
            return{
                ...state,
                successSignin: act.payload
            }
        case userTypes.SUCCESS_SIGN_UP:
            return{
                ...state,
                successSignup: act.payload
            }
        case userTypes.ERROR_SIGN_UP:
            return{
                ...state,
                errorSignup: act.payload
            }
      
        default:
            return state;

    }
};

export default userReducer;