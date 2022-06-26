import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { userIsAdmin } from "./../moduleAdmin"; 

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});
const useAdminAuth = props => {
    const { currentUser } = useSelector(mapState);
    const history = useHistory();

    //checkuser admin
    useEffect(() => {
        if (!userIsAdmin(currentUser)){
            history.push('/');
        }
    }, [currentUser]);

    return currentUser;

}

export default useAdminAuth;