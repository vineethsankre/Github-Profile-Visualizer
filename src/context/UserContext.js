import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null)

  return (
    <UserContext.Provider value={{profileData, setProfileData}}>
      {children}
    </UserContext.Provider>
  )
}
