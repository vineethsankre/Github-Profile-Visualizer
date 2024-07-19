// src/App.js
import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import NotFound from './components/NotFound'
import UserContext from './context/UserContext'

import './App.css'

class App extends Component {
  state = {
    username: '',
    profileDetails: {},
  }

  changeUsername = username => {
    this.setState({username})
  }

  addProfileDetails = profileDetails => {
    this.setState({profileDetails})
  }

  render() {
    const {username, profileDetails} = this.state

    return (
      <UserContext.Provider
        value={{
          username,
          profileDetails,
          changeUsername: this.changeUsername,
          addProfileDetails: this.addProfileDetails,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:user/profile" component={ProfilePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    )
  }
}

export default App
