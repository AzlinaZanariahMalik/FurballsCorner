import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignoutStart } from './../redux/User/user.actions';

import Header from './../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from './../components/Footer';

const DashboardOutline = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(userSignoutStart());
  };

  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <Sidebar>
            <ul>
              <li>
                <Link to="/account">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </Sidebar>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardOutline;