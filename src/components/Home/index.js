import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import cookie from 'js-cookie'
import Header from '../Header'
import {
  HomePageContainer,
  CenteredContent,
  HomePageHeading,
  TextInputContainer,
  TextInput,
  SearchIconButton,
  HomePageImage,
  ErrorMessage,
} from './styledComponents'

class Home extends Component {
  state = {username: '', isUsernameInvalid: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSearch = async event => {
    event.preventDefault()
    const {username} = this.state
    const url = `https://api.github.com/users/${username}`

    const response = await fetch(url)

    if (response.ok) {
      const userData = await response.json()
      console.log(userData)
      this.setState({isUsernameInvalid: false})
    } else {
      this.setState({isUsernameInvalid: true})
    }
  }

  render() {
    const {username, isUsernameInvalid} = this.state
    return (
      <HomePageContainer>
        <Header />
        <CenteredContent>
          <TextInputContainer onSubmit={this.onSubmitSearch}>
            <TextInput
              type="text"
              value={username}
              placeholder="Enter github username"
              onChange={this.onChangeUsername}
              isinvalid={isUsernameInvalid.toString()} // Note: Change the prop name to isinvalid
            />
            <SearchIconButton type="submit">
              <BsSearch />
            </SearchIconButton>
          </TextInputContainer>
          <ErrorMessage>
            {isUsernameInvalid && 'Enter a valid GitHub username'}
          </ErrorMessage>
          <HomePageHeading>Github Profile Visualizer</HomePageHeading>
          <HomePageImage src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1721058054/Group_2_1x_y0vqqa.png" />
        </CenteredContent>
      </HomePageContainer>
    )
  }
}

export default Home
