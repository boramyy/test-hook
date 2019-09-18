import React, { Fragment, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import Profile from '../profile/Profile'
import FormChange from '../form/FormChange'

const Mypage = () => {
  const { user, setUser } = useContext(UserContext)

  const [ name, setName ] = useState(user.name)
  const [ age, setAge ] = useState(user.age)
  const [ address, setAddress ] = useState(user.address)

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeAge = e => {
    setAge(e.target.value)
  }

  const onChangeAddress = e => {
    setAddress(e.target.value)
  }

  const onClickSubmit = e => {
    e.preventDefault()

    setUser({
      ...user,
      name,
      age,
      address
    })
  }

  return (
    <Fragment>
      <h2>마이페이지!!</h2>
      <Profile />
      <FormChange
        address={address}
        onChangeName={onChangeName}
        onChangeAge={onChangeAge}
        onChangeAddress={onChangeAddress}
        onClick={onClickSubmit}
      />
    </Fragment>
  )
}

export default Mypage