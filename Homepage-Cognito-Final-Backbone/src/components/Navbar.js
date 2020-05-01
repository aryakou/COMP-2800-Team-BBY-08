import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {
  logUserOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setLoginStatus(false);
      this.props.auth.setUser(null);
    }
    catch(error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="green-logo.png" width="112" height="28" alt="GreenNotes Logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isLoggedIn && this.props.auth.user && (
                <p>Hello, {this.props.auth.user.username}</p>
              )}
              <div className="buttons">
                {!this.props.auth.isLoggedIn && (
                  <div>
                  <a href="/login" className="button is-light">
                    Log in
                    </a>
                    </div>
                )}
                {this.props.auth.isLoggedIn && (
                <a href="/login" onClick={this.logUserOut} className="button is-light">
                  Log out
                </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
