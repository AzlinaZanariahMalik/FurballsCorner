import React from "react";
import './styles.scss'; 
import Logo from './../../assets/fclogo.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase/utility';

const mapState = ({ user }) =>({
    currentUser: user.currentUser
});
const Header = props => {
    const { currentUser } = useSelector(mapState);
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Furballs Corner Logo" />
                    <h6>Furballs Corner</h6>
                </div>  
            </div>
            <div className="navigate">
            <input type="checkbox"  className="navbar-toggle"/>
            <div className="hamburger"></div>          
                    {currentUser &&  (
                            <div className="menu">
                                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                                <NavLink exact to="/dashboard" activeClassName="active-link">Account</NavLink>          
                                <span onClick={() => auth.signOut()}>
                                    Logout
                                </span>
                             </div>
                    )}
                    {!currentUser &&  (
                        <div className="menu">
                            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                            <NavLink exact to="/registration" activeClassName="active-link">Register</NavLink>   
                            <NavLink exact to="/login" activeClassName="active-link">Login</NavLink>
                        </div>
                    )}
                </div>     
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};


export default Header;

