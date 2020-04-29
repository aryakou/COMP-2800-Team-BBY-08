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

//import { library } from '@fortawesome/fontawesome-svg-core'; USE TO CHANGE FONTS
//import { faEdit } from '@fortawesome/free-solid-svg-icons';
//library.add(faEdit); ALSO UNCOMMENT THIS TO MAKE IT WORK

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Register} /> 
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <Route exact path="/forgotpasswordverification" component={ForgotPasswordVerification} />
              <Route exact path="/welcome" component={Welcome} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
