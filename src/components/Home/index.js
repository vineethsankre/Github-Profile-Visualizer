import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import cookie from 'js-cookie'
import Header from '../Header'
import {
  HomePageContainer,
  CenteredContent,
  HomePageHeading,
  SearchContainer,
  TextInputContainer,
  TextInput,
  SearchIconButton,
  HomePageImage,
  ErrorMessage,
  LoadingViewContianer,
  FailureViewContainer,
  FailureViewLogo,
  FailureText,
  TryAgainButton,
} from './styledComponents'

class Home extends Component {
  state = {username: '', isinvalid: false, isLoading: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSuccessAuthentication = data => {
    this.setState({isLoading: false})
    const {username} = this.state
    const {history} = this.props
    const {id} = data
    cookie.set('awt_token', id)
    history.replace(`/${username}/profile`)
  }

  tryAgain = () => {
    this.onSubmitSearch()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureViewLogo
        src="https://rawcdn.githack.com/chennachandrika/Mini_Project_Task_Flow_Manager/aff08ba65374b593c22bf3b26e9894ec8f812112/src/Components/LoginPage/resources/SomthingWentWrong.png"
        alt="something went wrong"
      />
      <FailureText>Something went wrong. Please try again</FailureText>
      <TryAgainButton onClick={this.tryAgain}>Try Again</TryAgainButton>
    </FailureViewContainer>
  )

  renderLoadingView = () => (
    <LoadingViewContianer>
      <Loader type="TailSpin" color="#0b69ff" height="50" width="50" />
    </LoadingViewContianer>
  )

  onSubmitSearch = async event => {
    event.preventDefault()
    this.setState({isLoading: true})
    const {username} = this.state
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url)
    if (response.ok) {
      const userData = await response.json()
      console.log(userData)
      this.setState({isinvalid: false})
      this.onSuccessAuthentication(userData)
    } else {
      this.setState({isinvalid: true, username: ''})
      this.onFailureAuthentication()
    }
  }

  render() {
    const {username, isinvalid, isLoading} = this.state
    return (
      <HomePageContainer>
        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <>
            <Header />
            <CenteredContent>
              {isinvalid ? (
                this.renderFailureView()
              ) : (
                <>
                  <SearchContainer>
                    <TextInputContainer onSubmit={this.onSubmitSearch}>
                      <TextInput
                        type="text"
                        value={username}
                        placeholder="Enter github username"
                        onChange={this.onChangeUsername}
                        isinvalid={this.isinvalid}
                      />
                      <SearchIconButton type="submit">
                        <BsSearch />
                      </SearchIconButton>
                    </TextInputContainer>
                    <ErrorMessage>
                      {isinvalid && 'Enter a valid GitHub username'}
                    </ErrorMessage>
                  </SearchContainer>
                  <HomePageHeading>Github Profile Visualizer</HomePageHeading>
                  <HomePageImage src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1721058054/Group_2_1x_y0vqqa.png" />
                </>
              )}
            </CenteredContent>
          </>
        )}
      </HomePageContainer>
    )
  }
}

export default Home
