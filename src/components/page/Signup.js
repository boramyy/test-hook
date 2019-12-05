import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Signup(props) {
  const CLIENT_ID = "DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC";
  const CLIENT_SECRET = "EM8gc2SCDjqpWZNvMdhwoaETZtFNLjmjWBKRAob4zoNc";

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const url = `https://api.typeform.com/oauth/authorize?state=xyz789&client_id=${CLIENT_ID}&redirect_uri=https://results-example.herokuapp.com/callback&scope=forms:read`;
    const token = await axios.get(url);
    console.dir(token);
  };

  const getForms = async () => {
    // 1. 토큰을 받아온다
    // 2. 받아온 토큰을 헤더에 심어서 api 요청을 날린다
    // 우선 해볼것 forms:read

    const CLIENT_ID = "DRGBZpiY2VN2hufCWaCo22TukY1QiDUwGVLqmzGsiFhC";
    const CLIENT_SECRET = "EM8gc2SCDjqpWZNvMdhwoaETZtFNLjmjWBKRAob4zoNc";
    const redirectUri = "https://localhost:3000";
    const urlAuthorize = "https://api.typeform.com/oauth/authorize";
    const urlAccessToken = "https://api.typeform.com/oauth/token";

    const data = await axios.get("https://api.typeform.com/forms/m7RdrN", {
      header: {
        token: "BGAt3VvkF5Wf9uxw1Nu9gcACwmXx7DXhY4DiLUzP3sXh"
      }
    });
    console.dir(data.json());
  };

  return <div></div>;
}

Signup.propTypes = {};

export default Signup;
