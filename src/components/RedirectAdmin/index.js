import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { userIsAdmin } from "./../../moduleAdmin";
import './styles.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Tooltip from '@mui/material/Tooltip';

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
                    <Tooltip title="Admin Dashboard" placement="top-start">
                         <DashboardIcon style={{ fill: '#4169e1' }}> Admin </DashboardIcon>
                    </Tooltip>
                        
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default RedirectAdmin;