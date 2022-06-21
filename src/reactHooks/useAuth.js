import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useAuth = props => {
    const { currentUser } = useSelector(mapState);

    useEffect(() => {
        if (!currentUser){
            props.history.push('/login');
        }
    }, [currentUser]);

    return currentUser;
};

export default useAuth;