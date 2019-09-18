import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>헤더입니당</h1>
      <NavLink to="/">main</NavLink>
      <NavLink to="/mypage">mypage</NavLink>
    </header>
  )
}

export default Header