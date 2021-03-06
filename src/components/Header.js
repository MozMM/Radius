import React, { Component } from "react"
import { connect } from "react-redux"
import { Nav, Navbar } from "react-bootstrap";
import firebase, { auth } from "../config/firebase";

import { gotIsLoggedIn } from '../store/user'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    let signedInUser
    let setUserInRedux = this.props.setUserInRedux
  
    auth().onAuthStateChanged(() => {
    signedInUser = firebase.auth().currentUser;
    setUserInRedux(signedInUser)
    })

    return (
      <div className="headerFooterColor">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand className='frameLeft'>
            <a href="/">
              <img src="https://github.com/MozMM/Radius/blob/main/public/logo_radius.png?raw=true" alt='Radius'/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
              <div>
                {this.props.currentUser ?
                    <Nav>
                      <Nav.Link href="/search">Search</Nav.Link>
                      <Nav.Link href="/favorites">Favorites</Nav.Link>
                      <Nav.Link href="/" onClick={async ()=> await firebase.auth().signOut()}>Sign Out</Nav.Link>
                    </Nav>
                  :
                    <Nav>
                      <Nav.Link href="/search">Search</Nav.Link>
                      <Nav.Link href="/login">Log In</Nav.Link>
                      <Nav.Link eventKey={2} href="/signup">Sign Up</Nav.Link>
                    </Nav>
                }
              </div>
            </Navbar.Collapse>
        </Navbar>
      </div>
  )
  }
}

const mapState = state =>{
  return {
    currentUser: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    setUserInRedux: (currentUser) => {
      dispatch(gotIsLoggedIn(currentUser))
    }
  }
}

export default connect(mapState, mapDispatch)(Header);
