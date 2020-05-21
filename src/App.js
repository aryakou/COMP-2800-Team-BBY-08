import { LinkContainer } from "react-router-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  EmailIcon,
} from 'react-share';




function App() {
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);

    history.push("/login");
  }

  //background color
  document.body.style = 'background: #1A1E23;';

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">MML</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <NavItem>settings</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <NavItem>about us</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>logout</NavItem>
                  
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <NavItem>sign up</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>login</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <NavItem>about us</NavItem>
                  </LinkContainer>
                  <NavItem> <TwitterShareButton url={"https://master.dsznxcct79433.amplifyapp.com/"} title={'Check out this amazing note taking app! #MetaMolog'}>
                  <TwitterIcon size={20} round />
                  </TwitterShareButton>
                    
                  <WhatsappShareButton url={"https://master.dsznxcct79433.amplifyapp.com/"} title={'Check out this amazing note taking app! #MetaMolog '}>
                  <WhatsappIcon size={20} round />
                  </WhatsappShareButton>

                  <EmailShareButton url={"https://master.dsznxcct79433.amplifyapp.com/"}title={'Check out this amazing note taking app! #MetaMolog '} >
                  <EmailIcon size={20} round />
                  </EmailShareButton>
                 
                  </NavItem>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider
          value={{ isAuthenticated, userHasAuthenticated }}
        >
          <Routes />
        </AppContext.Provider>


      </div>
    )
  );
}

export default App;