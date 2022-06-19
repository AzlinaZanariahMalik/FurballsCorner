import React from "react";
import './styles.scss'; 
import Logo from './../../assets/fclogo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utility';
const Header = props => {
    const { currentUser } = props;
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
                                <NavLink exact to="/account" activeClassName="active-link">Account</NavLink>          
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

const mapStateToProps = ({ user }) =>({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null) (Header);

