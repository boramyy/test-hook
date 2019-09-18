import React, { Fragment } from 'react';
import Profile from '../profile/Profile';

const Mypage = () => {
  console.log('마이페이지!!')
  return (
    <Fragment>
      <h2>마이페이지!!</h2>
      <Profile />
    </Fragment>
  )
}

export default Mypage