import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { userIsAdmin } from "./../../moduleAdmin";
import './styles.scss';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})
const RedirectAdmin = props => {

    const { currentUser } = useSelector(mapState);

    const isAdmin = userIsAdmin(currentUser);
    if (!isAdmin) return null;
    return (
        <div className="adminbtn">
            <ul>
                <li>
                    <Link to="/admin">
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default RedirectAdmin;