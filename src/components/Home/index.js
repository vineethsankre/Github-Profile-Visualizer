// src/components/Home/index.js

import React, {Component} from 'react'
import './index.css'
import {HiOutlineSearch} from 'react-icons/hi'
import cookie from 'js-cookie'
import Header from '../Header'
import LoadingView from '../LoadingView'
import UserContext from '../../context/UserContext'

class Home extends Component {
  static contextType = UserContext

  state = {
    isinvalid: false,
    isLoading: false,
  }

  onSuccessAuthentication = data => {
    this.setState({isLoading: false, isinvalid: false})
    const {history} = this.props
    const {changeUsername, addProfileDetails} = this.context
    changeUsername(data.login)
    addProfileDetails(data)
    cookie.set('auth_token', data.id)
    history.replace(`/${data.login}/profile`)
  }

  tryAgain = () => {
    this.onSubmitSearch({preventDefault: () => {}})
  }

  onFailureAuthentication = () => {
    this.setState({isLoading: false, isinvalid: true})
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        className="failure-image"
        src="https://rawcdn.githack.com/chennachandrika/Mini_Project_Task_Flow_Manager/aff08ba65374b593c22bf3b26e9894ec8f812112/src/Components/LoginPage/resources/SomthingWentWrong.png"
        alt="something went wrong"
      />
      <h1 className="failure-text">Something went wrong. Please try again</h1>
      <button className="try-again-button" onClick={this.tryAgain}>
        Try Again
      </button>
    </div>
  )

  renderLoadingView = () => <LoadingView />

  onSubmitSearch = async event => {
    event.preventDefault()
    this.setState({isLoading: true})
    const {username} = this.context
    try {
      const url = `https://apis2.ccbp.in/gpv/profile-details/${username}`
      const response = await fetch(url)
      if (response.ok) {
        const userData = await response.json()
        this.onSuccessAuthentication(userData)
      } else {
        this.onFailureAuthentication()
      }
    } catch (error) {
      this.onFailureAuthentication()
    }
  }

  render() {
    const {username, changeUsername} = this.context
    const {isinvalid, isLoading} = this.state

    return (
      <div className="home-page-container">
        <Header />
        <div className="centered-content">
          <div className="search-container">
            <form
              className="text-input-container"
              onSubmit={this.onSubmitSearch}
            >
              <input
                type="search"
                className="text-input"
                value={username}
                placeholder="Enter GitHub username"
                onChange={e => changeUsername(e.target.value)}
                style={{borderColor: isinvalid ? 'red' : 'initial'}}
              />
              <button
                data-testid="searchButton"
                className="search-icon-button"
                type="submit"
              >
                <HiOutlineSearch />
              </button>
            </form>
            {isinvalid && (
              <p className="error-message">Enter a valid GitHub username</p>
            )}
          </div>
          <h1 className="home-page-heading">GitHub Profile Visualizer</h1>
          {isLoading ? (
            this.renderLoadingView()
          ) : (
            <>
              {isinvalid ? (
                this.renderFailureView()
              ) : (
                <img
                  className="home-page-image"
                  src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1721058054/Group_2_1x_y0vqqa.png"
                  alt="github profile visualizer home page"
                />
              )}
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
