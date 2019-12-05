import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const userContext = useContext(UserContext);
  const { name, age, address } = userContext.user;

  return (
    <header>
      <h1>Practice of Hooks and Context API</h1>
      <h2>안뇽하세요 {name} 님</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">main</NavLink>
          </li>
          <li>
            <NavLink to="/mypage">mypage</NavLink>
          </li>
          <li>
            <NavLink to="/signup">signup</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
