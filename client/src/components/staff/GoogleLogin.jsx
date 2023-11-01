import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

import useStore from "../../../store";
import Loader from "../loader";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  var searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const [success, setSuccess] = useState(false);
  const { setProfileName } = useStore((state) => ({
    setProfileName: state.setProfileName,
  }));
  const tokenUrl = `${import.meta.env.VITE_BACKEND_API}/staff/login/`;
  const googleLogin = async () => {
    await axios
      .post(
        tokenUrl,
        { code: code },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        sessionStorage.setItem("jobsArr", res?.data?.jobsArr);
        localStorage.setItem("accT", res?.data?.accType);
        localStorage?.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("longestStreak", res?.data?.longestStreak);
        localStorage.setItem("currentStreak", res?.data?.currentStreak);

        if (res?.data?.isStaff) {
          localStorage.setItem("me", "isS");
        }
        if (res?.data?.isAdmin) {
          localStorage.setItem("me", "isA");
        }
        localStorage.setItem(
          "username",
          res?.data?.username ? res?.data?.username : "Deligent"
        );
        setProfileName(res?.data?.username);
        setSuccess(true);
      })
      .catch((error) => {
        localStorage?.setItem("errorMessage", error.response.data.message);
        setSuccess(true);
      });
  };

  useEffect(() => {
    if (code === null || code === undefined) {
      navigate("/");
    } else {
      const TreeView = async () => {
        await googleLogin();
      };
      TreeView();
    }
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
        }}
      >
        <Loader />
      </div>
    );
  } else {
    const accessToken = localStorage.getItem("accessToken");
    const errorMessage = localStorage.getItem("errorMessage");
    if (accessToken) {
      window.location.href = "/dashboard";
    } else {
      return (
        <div className="flex flex-col justify-center h-screen items-center">
          <h2 className="text-red-600">{errorMessage}</h2>
          <br />
          <Link
            className="bg-sky-800 rounded-md py-1 px-3 text-white font-medium hover:bg-sky-700"
            to="/"
          >
            Go to homepage
          </Link>
        </div>
      );
    }
  }
};

export default GoogleLogin;
