import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useStore } from "../store";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LinkedInCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const [success, setSuccess] = useState(false);
  const tokenUrl = `${process.env.REACT_APP_BACKEND_API}/talent/login/`;
  const { setProfileName } = useStore((state) => ({
    setProfileName: state.setProfileName,
  }));

  const tokenApi = async () => {
    await axios
      .post(
        tokenUrl,
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res) {
          localStorage.setItem("accessToken", res?.data?.tokens?.accessToken);
          localStorage.setItem("username", res?.data?.tokens?.username);
          setProfileName(res?.data?.tokens?.username);
          localStorage.setItem(
            "longestStreak",
            res?.data?.tokens?.longestStreak
          );
          localStorage.setItem(
            "currentStreak",
            res?.data?.tokens?.currentStreak
          );
          localStorage.setItem("accT", res?.data?.tokens?.accType);
          if (res?.data?.tokens?.isNew) {
            localStorage.setItem("isNew", res?.data?.tokens?.isNew);
          } else if (res?.data?.tokens?.isMentor) {
            localStorage.setItem("isMentor", res?.data?.tokens?.isMentor);
            localStorage.setItem("me", "isM");
          } else if (res?.data?.tokens?.talentType) {
            localStorage.setItem("talentType", res?.data?.tokens?.talentType);
            localStorage.setItem(
              "me",
              res?.data?.tokens?.talentType ? "isT" : null
            );
          }
        } else {
          navigate("/");
        }
      })
      .then(() => setSuccess(true))
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage?.setItem("errorMessage", err.response.data.message);
          setSuccess(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  useEffect(() => {
    code ? tokenApi() : (window.location.href = "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (success === false) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          }
        />
      </div>
    );
  } else {
    const isNew = localStorage.getItem("isNew");
    const accessToken = localStorage.getItem("accessToken");
    const errorMessage = localStorage.getItem("errorMessage");
    if (accessToken) {
      if (isNew) {
        window.location.href = "/new/join";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      return (
        <div className="flex text-3xl flex-col justify-center h-screen items-center">
          <h2 className="text-gray-900">{errorMessage}</h2>
          <br />
          <Link
            className="text-black hover:text-white underline font-serif"
            to="/"
          >
            Go to homepage
          </Link>
        </div>
      );
    }
  }
};

export default LinkedInCallback;
