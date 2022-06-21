import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utility';
//Redux
import { connect } from 'react-redux/es/exports';
import { setCurrentUser} from './redux/User/user.actions'
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
  
  const { setCurrentUser, currentUser} = props;
  useEffect(()=> {

      const authListener = auth.onAuthStateChanged(async userAuth => {
        if (userAuth){
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot =>{
            this.props.setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
             
            });
          })
        }  
          setCurrentUser(userAuth);
      });

    return () => {
      authListener();
    };
  }, []);
  
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <HomepageOutline >
                <Homepage />
              </HomepageOutline>
            )} />
            <Route path="/registration" render={() => currentUser ? <Redirect to="/"/> : (
              <MainOutline >
                <Registration />
              </MainOutline>
            )} />
             <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
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
 


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
