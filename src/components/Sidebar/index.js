import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './../Profile';
import './styles.scss';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Sidebar = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configProfile = {
    currentUser
  }

  return (
    <div className="sidebar">

      <Profile {...configProfile} />

      <div className="menu">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;