import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../page/Main";
import Mypage from "../page/Mypage";
import Signup from "../page/Signup";

const Content = () => {
  return (
    <div className="wrap_content">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default Content;
