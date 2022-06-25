import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Redux
import { useDispatch} from 'react-redux';
import { userSession } from './redux/User/user.actions'
//Modules
import Authentication from './modules/Authentication';
//Outline
import MainOutline from './outline/MainOutline';
import HomepageOutline from './outline/HomePageOutline';
//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import RecoverAccount from './pages/RecoverAccount';
import Dashboard from './pages/Dashboard';
import './app.scss';

const App = props => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSession());
      
  }, []);
  
    return (
      <div className="App">
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
            <Route path="/dashboard" render={() => (
              <Authentication>
               <MainOutline>
                <Dashboard />
              </MainOutline> 
              </Authentication>
              
            )} />
          </Switch>
   
      </div>
    );
  }
 
export default App;
