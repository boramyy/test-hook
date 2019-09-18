import React, { createContext, useState } from 'react';

const UserContext = createContext()

const UserProvider = props => {

  const [user, setUser] = useState({
    name: 'guest',
    age: 0,
    address: 'earth'
  })

  // const getUser = () => {
  //   return user
  // }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }