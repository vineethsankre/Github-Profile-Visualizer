import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import cookie from 'js-cookie'
import Header from '../Header'
import {
  HomePageContainer,
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

  onSubmitSearch = async () => {
    const {username} = this.state
    const url = `https://api.github.com/users/${username}`

    const response = await fetch(url)

    if (response.ok) {
      const userData = await response.json()
      console.log(userData)
    }
  }

  render() {
    const {username, isUsernameInvalid} = this.state
    return (
      <HomePageContainer onSubmit={this.onSubmitSearch}>
        <Header />
        <TextInputContainer>
          <TextInput
            type="text"
            value={username}
            placeholder="Enter github username"
            onChange={this.onChangeUsername}
          />
          <SearchIconButton type="submit">
            <BsSearch />
          </SearchIconButton>
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

export default Home
