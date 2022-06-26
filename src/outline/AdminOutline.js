import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignoutStart } from '../redux/User/user.actions';

import Header from './../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from './../components/Footer';

const AdminOutline = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(userSignoutStart());
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <Sidebar>
            <ul>
              <li>
                <Link to="/admin">
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

export default AdminOutline;