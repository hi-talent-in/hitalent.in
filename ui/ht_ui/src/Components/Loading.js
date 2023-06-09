import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loading = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

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
        <Spin indicator={antIcon} />{" "}
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Loading;
