import userTypes from "./user.Types";

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});