import {Component} from 'react'
import './index.css'
import {BsSearch} from 'react-icons/bs'
import cookie from 'js-cookie'
import Header from '../Header'
import LoadingView from '../LoadingView'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    username: '',
    isinvalid: false,
    apiStatus: apiStatusConstants.initial,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSuccessAuthentication = data => {
    this.setState({isLoading: false, isinvalid: false})
    const {username} = this.state
    const {history} = this.props
    const {id} = data
    cookie.set('awt_token', id)
    history.replace(`/${username}/profile`)
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
    const {username} = this.state
    try {
      const url = `https://api.github.com/users/${username}`
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
    const {username, isinvalid, isLoading} = this.state
    return (
      <div className="home-page-container">
        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <>
            <Header />
            <div className="centered-content">
              <div className="search-container">
                <form
                  className="text-input-container"
                  onSubmit={this.onSubmitSearch}
                >
                  <input
                    type="text"
                    className="text-input"
                    value={username}
                    placeholder="Enter GitHub username"
                    onChange={this.onChangeUsername}
                    style={{borderColor: isinvalid ? 'red' : 'initial'}}
                  />
                  <button className="search-icon-button" type="submit">
                    <BsSearch />
                  </button>
                </form>
                {isinvalid && (
                  <p className="error-message">Enter a valid GitHub username</p>
                )}
              </div>
              <h1 className="home-page-heading">GitHub Profile Visualizer</h1>
              {isinvalid ? (
                this.renderFailureView()
              ) : (
                <>
                  <img
                    className="home-page-image"
                    src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1721058054/Group_2_1x_y0vqqa.png"
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
