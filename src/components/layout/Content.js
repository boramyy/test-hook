import React, { useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Main from "../page/Main";
import Mypage from "../page/Mypage";
import Signup from "../page/Signup";

const Content = () => {
  const {} = useEffect();

  useEffect(() => {
    console.log("hoho~ 2 2 ");
    console.dir(window.location.search.split("&")[0].replace("?code=", ""));
    getForm();
  }, []);

  const getToken = async () => {
    const CLIENT_ID = "DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC";
    const CLIENT_SECRET = "EM8gc2SCDjqpWZNvMdhwoaETZtFNLjmjWBKRAob4zoNc";
    const url = `https://api.typeform.com/oauth/authorize?state=xyz789&client_id=${CLIENT_ID}&redirect_uri=https://boramyy.github.io/test-hook&scope=forms:read`;
    const token = await axios.get(url);
    console.log(token, token);
    // https://api.typeform.com/oauth/authorize?state=xyz789&client_id=DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC&redirect_uri=https://boramyy.github.io/test-hook&scope=forms:read
  };

  const getForm = async () => {
    // 1. 토큰을 받아온다
    // 2. 받아온 토큰을 헤더에 심어서 api 요청을 날린다
    // 우선 해볼것 forms:read

    const CLIENT_ID = "DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC";
    const CLIENT_SECRET = "EM8gc2SCDjqpWZNvMdhwoaETZtFNLjmjWBKRAob4zoNc";
    const redirectUri = "https://boramyy.github.io/test-hook";
    const scope = ["forms:read"];

    const TEMPORARY_TOKEN = "CQQbDeM4uXMc6xrMVmZuEuUPgyCUY56YpEKgtDN1WwdB";

    const hoho2 = {
      grant_type: "authorization_code",
      code: TEMPORARY_TOKEN,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: redirectUri
    };

    const data = await axios.get("https://api.typeform.com/forms/m7RdrN", {
      data: hoho2
    });

    console.dir(data.json());
  };

  return (
    <div className="wrap_content">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/test-hook/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default Content;
