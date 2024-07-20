import {useContext} from 'react'
import {BsSearch} from 'react-icons/bs'
import UserContext from '../../context/UserContext'
import Header from '../Header'
import './index.css'
const ProfilePage = () => {
  const {profileDetails, username, changeUsername, addProfileDetails} =
    useContext(UserContext)

  const onSubmitSearch = async event => {
    event.preventDefault()
    try {
      const url = `https://apis2.ccbp.in/gpv/profile-details/${username}`
      const response = await fetch(url)
      if (response.ok) {
        const userData = await response.json()
        changeUsername(userData.login)
        addProfileDetails(userData)
      } else {
        console.error('Profile not found')
      }
    } catch (error) {
      console.error('Something went wrong', error)
    }
  }

  if (!profileDetails) {
    return <p>No Profile Data Available</p>
  }

  return (
    <div className="profilepage-container">
      <Header />
      <div className="centered-content">
        <div className="search-container">
          <form className="text-input-container" onSubmit={onSubmitSearch}>
            <input
              type="text"
              className="text-input"
              value={username}
              placeholder="Enter GitHub username"
              onChange={e => changeUsername(e.target.value)}
            />
            <button className="search-icon-button" type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
        <img
          className="avatar-image"
          src={profileDetails.avatar_url}
          alt={profileDetails.name}
        />
        <h1 className="user-name">{profileDetails.name}</h1>
        <p className="bio">{profileDetails.bio}</p>
        <div className="user-info-container">
          <div className="userstats-container">
            <p className="stat-number">{profileDetails.followers}</p>
            <p className="stat">Followers</p>
          </div>
          <hr className="divider" />
          <div className="userstats-container">
            <p className="stat-number">{profileDetails.following}</p>
            <p className="stat">Following</p>
          </div>
          <hr className="divider" />
          <div className="userstats-container">
            <p className="stat-number">{profileDetails.public_repos}</p>
            <p className="stat">PUBLIC REPOS</p>
          </div>
        </div>
        <div className="user-info-container">
          <div className="userstats-container">
            <p className="stat-number">Company</p>
            <p className="stat">{profileDetails.company}</p>
          </div>
          <div className="userstats-container">
            <p className="stat-number">Company Url</p>
            <p className="stat">{profileDetails.company}</p>
          </div>
          <div className="userstats-container">
            <p className="stat-number">Location</p>
            <p className="stat">{profileDetails.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
