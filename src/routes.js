import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SearchMap from './components/SearchMap'
import SinglePropertyPage from './components/SinglePropertyPage'
import UserHome from './components/UserHome'
import { WelcomePage } from './components/WelcomePage'



class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/search" component={SearchMap} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/favorites" component={UserHome} />
        <Route exact path="/properties/:id" component={SinglePropertyPage} />
      </Switch>
    )
  }
}
export default Routes
