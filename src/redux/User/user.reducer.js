import userTypes from "./user.Types";

const START_STATE ={
    currentUser: null

};

const userReducer = (state=START_STATE, act) => {
    switch(act.type) {
        case userTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: act.payload
        }

        default:
            return state;

    }
};

export default userReducer;