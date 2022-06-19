import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utility';
//Redux
import { connect } from 'react-redux/es/exports';
import { setCurrentUser} from './redux/User/user.actions'
//Outline
import MainOutline from './outline/MainOutline';
import HomepageOutline from './outline/HomePageOutline';
//Pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import RecoverAccount from './pages/RecoverAccount';
import './app.scss';



class App extends Component {
  

  authListener = null;
  componentDidMount(){
    const { setCurrentUser} = this.props;
    this.authListener = auth.onAuthStateChanged(async userAuth => {
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
  }

  
  componentWillUnmount(){
    this.authListener();
  }

  render (){
    const { currentUser } = this.props;
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <HomepageOutline >
                <Homepage />
              </HomepageOutline>
            )} />
            <Route path="/registration" render={() => currentUser ? <Redirect to="/"/> : (
              <MainOutline currentUser = {currentUser}>
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
          </Switch>
   
      </div>
    );
  }
 
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
