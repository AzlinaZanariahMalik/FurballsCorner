import React from "react";
import './styles.scss';
import { useSelector } from 'react-redux';
import { userIsAdmin } from "../../moduleAdmin";
const mapState = ({ user }) => ({
    currentUser: user.currentUser
})
const Admin = props => {

    const { currentUser } = useSelector(mapState);

    const isAdmin = userIsAdmin(currentUser);
    if(!isAdmin) return null;
    return (
        <div className="container">
            <h1>
                Admin Page
            </h1>
        </div>
    );
}

export default Admin;