import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loading = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  const codePost = async () => {
    const code = localStorage.getItem("parsingString");
    await axios
      .post(
        "http://localhost:8000/talent/login/",
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAuth((auth) => true);
        localStorage.setItem("accessToken", res?.data?.tokens?.accessToken);
        localStorage.setItem("username", res?.data?.tokens?.username);
        localStorage.setItem("userType", res?.data?.tokens?.userType);
        localStorage.setItem("authenticate", true);
        return 1;
      });
  };
  useEffect(() => {
    const redirect = codePost();
    if (redirect === 1) {
      navigate("/");
    } else {
      navigate("/");
    }
  });
  if (auth === false) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ReactLoading type="cylon" color="#fff" height={100} width={50} />
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Loading;
