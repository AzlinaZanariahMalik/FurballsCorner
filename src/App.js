import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Redux
import { useDispatch} from 'react-redux';
import { userSession } from './redux/User/user.actions'
//Modules
import AdminAuthentication from './modules/AdminAuthentication';
import Authentication from './modules/Authentication';
//Outline
import MainOutline from './outline/MainOutline';
import HomepageOutline from './outline/HomePageOutline';
//Admin
import RedirectAdmin from './components/RedirectAdmin';
import Admin from './pages/Admin';
//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import RecoverAccount from './pages/RecoverAccount';
import Account from './pages/Account';

import './app.scss';

const App = props => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSession());
      
  }, []);
  
    return (
      <div className="App">
        <RedirectAdmin />
          <Switch>
            <Route exact path="/" render={() => (
              <HomepageOutline >
                <Homepage />
              </HomepageOutline>
            )} />
            <Route path="/registration" render={() => (
              <MainOutline >
                <Registration />
              </MainOutline>
            )} />
             <Route path="/login" 
              render={() => (
                <MainOutline >
                  <Login />
                </MainOutline>
              )} />
            <Route path="/recoveraccount" render={() => (
              <MainOutline>
                <RecoverAccount />
              </MainOutline>
            )} />
            <Route path="/account" render={() => (
              <Authentication>
               <MainOutline>
                <Account />
              </MainOutline> 
              </Authentication>
            )} />
            <Route path="/admin" render={() => (
              <AdminAuthentication>
                  <MainOutline>
                  <Admin />
                  </MainOutline>
              </AdminAuthentication>
            )} />
          </Switch>
   
      </div>
    );
  }
 
export default App;
