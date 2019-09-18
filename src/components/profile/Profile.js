import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../../assets/css/Profile.css';

const Profile = () => {
  const userContext = useContext(UserContext)
  const { name, age, address } = userContext.user

  return (
    <div className="card_profile">
      <h2>프로필</h2>
      <h3>{name}, {age}, {address}</h3>
    </div>
  )
}

export default Profile