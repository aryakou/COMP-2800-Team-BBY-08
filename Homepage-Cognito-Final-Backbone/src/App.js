import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer';
import Home from './components/Home';
import HomeContent from './components/HomeContent';

//import { library } from '@fortawesome/fontawesome-svg-core'; USE TO CHANGE FONTS
//import { faEdit } from '@fortawesome/free-solid-svg-icons';
//library.add(faEdit); ALSO UNCOMMENT THIS TO MAKE IT WORK

class App extends Component {

  state = {
    isLoggedIn: false,
    user: null
  }

  setLoginStatus = authenticated => { 
    this.setState({isLoggedIn: authenticated });
  }

  setUser = user => {
    this.setState({user: user});
  }

  render() {
    const authProps = {
      isLoggedIn: this.state.isLoggedIn,
      user: this.state.user,
      setLoginStatus: this.setLoginStatus,
      setUser: this.setUser
    }
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              <Route exact path="/" render={(props) => <Register {...props} auth={authProps} /> } />
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} /> } />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} /> } />
              <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} /> } />
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} /> } />
              <Route exact path="/home" render={(props) => <Home {...props} auth={authProps} /> } />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
