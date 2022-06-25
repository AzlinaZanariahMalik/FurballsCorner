import userTypes from "./user.Types";

export const startEmailSignin = userCredentials => ({
    type: userTypes.START_EMAIL_SIGN_IN,
    payload: userCredentials
});

export const successSignin = user => ({
    type: userTypes.SUCCESS_SIGN_IN,
    payload: user
});

export const userSession =  () => ({
    type: userTypes.USER_SESSION
})

export const userSignoutStart = () => ({
    type: userTypes.USER_SIGN_OUT_START
});

export const userSignoutSuccess = () => ({
    type:userTypes.USER_SIGN_OUT_SUCCESS
});

export const userSignupStart = userCredentials => ({
    type:userTypes.USER_SIGN_UP_START,
    payload: userCredentials
});

export const userError = e => ({
    type: userTypes.USER_ERROR,
    payload: e
});

export const passwordResetStart =  userCredentials => ({
    type:userTypes.PASSWORD_RESET_START,
    payload: userCredentials
}); 

export const successPasswordReset = () => ({
    type:userTypes.SUCCESS_PASSWORD_RESET,
    payload: true
});

export const userResetState = () => ({
    type: userTypes.USER_RESET_STATE

});

 export const startGoogleSignin = () => ({
    type: userTypes.START_GOOGLE_SIGN_IN
 });

