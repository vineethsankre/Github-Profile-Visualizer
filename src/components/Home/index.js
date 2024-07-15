import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import cookie from 'js-cookie'
import {
  HomePageContainer,
  HomePageHeading,
  TextInputContainer,
  TextInput,
  SearchIconContainer,
  HomePageImage,
  ErrorMessage,
} from './styledComponents'

class LoginPage extends Component {
  state = {username: '', isUsernameInvalid: false}

  onChangeUsername = event => {
    if (event.key === 'Enter') {
      this.usernameAuthentication()
    } else {
      this.setState({username: event.target.value, isUsernameInvalid: false})
    }
  }

  onSuccessAuthenticate = userData => {
    const {username} = this.state
    const {history} = this.props
    console.log(history)
    const {id} = userData
    cookie.set('awt_token', id)
    history.replace(`/${username}/profile`)
  }

  onFailureAuthenticate = error => {
    this.setState({isUsernameInvalid: error, username: ''})
  }

  usernameAuthentication = async () => {
    const {username} = this.state
    const url = `https://api.github.com/users/${username}`

    const response = await fetch(url)

    if (response.ok) {
      const userData = await response.json()
      this.onSuccessAuthenticate(userData)
    } else {
      this.onFailureAuthenticate(true)
    }
  }

  render() {
    const {isUsernameInvalid} = this.state
    return (
      <HomePageContainer>
        <TextInputContainer>
          <TextInput
            placeholder="Enter github username"
            type="text"
            isUsernameInvalid={isUsernameInvalid}
            onKeyUp={this.onChangeUsername}
          />
          <SearchIconContainer>
            <BsSearch />
          </SearchIconContainer>
        </TextInputContainer>
        <ErrorMessage>
          {isUsernameInvalid && 'Enter the valid github username'}
        </ErrorMessage>
        <HomePageHeading>Github Profile Visualizer</HomePageHeading>
        <HomePageImage src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1721058054/Group_2_1x_y0vqqa.png" />
      </HomePageContainer>
    )
  }
}

export default LoginPage
