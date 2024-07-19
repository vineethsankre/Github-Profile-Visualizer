// src/context/UserContext.js

import React from 'react'

const UserContext = React.createContext({
  username: '',
  profileDetails: {},
  changeUsername: () => {},
  addProfileDetails: () => {},
})

export default UserContext
