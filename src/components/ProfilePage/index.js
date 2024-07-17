// src/components/ProfilePage/index.js
import React, {useContext} from 'react'
import {UserContext} from '../../context/UserContext'

const ProfilePage = () => {
  const {profileData} = useContext(UserContext)

  if (!profileData) {
    return <p>No Profile Data Available</p>
  }

  return (
    <div>
      <h1>{profileData.name}</h1>
      <p>{profileData.bio}</p>
      <img src={profileData.avatar_url} alt={profileData.name} />
      {/* Render other profile data as needed */}
    </div>
  )
}

export default ProfilePage
