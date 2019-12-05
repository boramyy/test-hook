import React, { Fragment, useEffect } from "react";
import Profile from "../profile/Profile";
import axios from "axios";

const Main = () => {
  return (
    <Fragment>
      <h2>메인!!</h2>
      <Profile />
    </Fragment>
  );
};

export default Main;
