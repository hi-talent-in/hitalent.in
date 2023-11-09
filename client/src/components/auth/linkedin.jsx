import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader";
import useCustomMessage from "../../hooks/useCustomMessage";
import useStore from "../../../store";

const LinkedIn = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const code = searchParams.get("code");

  const [success, setSuccess] = useState(false);

  const { setUserData } = useStore((store) => ({
    setUserData: store.setUserData,
  }));

  const [apiCalled, setApiCalled] = useState(false);

  const tokenUrl = `${import.meta.env.VITE_BACKEND_BASE_URL}/talent/login/`;

  const { error, contextHolder } = useCustomMessage();

  const tokenApi = async () => {
    setApiCalled(true);
    try {
      const res = await axios.post(
        tokenUrl,
        { code: code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        sessionStorage.setItem("jobsArr", res?.data?.jobsArr);
        localStorage.setItem("accessToken", res?.data?.tokens?.accessToken);
        localStorage.setItem("username", res?.data?.tokens?.username);
        setUserData({
          email: res?.data?.tokens?.email,
          name: res?.data?.tokens?.username,
        });
        localStorage.setItem("longestStreak", res?.data?.tokens?.longestStreak);
        localStorage.setItem("currentStreak", res?.data?.tokens?.currentStreak);
        localStorage.setItem("accT", res?.data?.tokens?.accType);
        if (res?.data?.tokens?.isNew) {
          localStorage.setItem("isNew", res?.data?.tokens?.isNew);
        } else if (res?.data?.tokens?.isMentor) {
          localStorage.setItem("isMentor", res?.data?.tokens?.isMentor);
          localStorage.setItem("me", "isM");
        } else if (res?.data?.tokens?.isStaff) {
          localStorage.setItem("isStaff", res?.data?.tokens?.isStaff);
          localStorage.setItem("me", "isS");
        } else if (res?.data?.tokens?.isAdmin) {
          localStorage.setItem("isAdmin", res?.data?.tokens?.isAdmin);
          localStorage.setItem("me", "isA");
        } else if (res?.data?.tokens?.talentType) {
          localStorage.setItem("talentType", res?.data?.tokens?.talentType);
          localStorage.setItem(
            "me",
            res?.data?.tokens?.talentType ? "isT" : null
          );
        }
      } else {
        window.location.href = "/";
      }
      setSuccess(true);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        localStorage?.setItem("errorMessage", err.response.data.message);
        setSuccess(true);
      } else {
        error(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (code && !apiCalled) {
      tokenApi();
    } else {
      window.location.href = "/";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!success) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        {contextHolder}
        <Loader />
      </div>
    );
  }

  const isNew = localStorage.getItem("isNew");
  const accessToken = localStorage.getItem("accessToken");
  const errorMessage = localStorage.getItem("errorMessage");

  if (accessToken) {
    if (isNew) {
      window.location.href = "/new/join";
    } else {
      window.location.href = "/dashboard";
    }
    return null; // Return null while redirecting
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {contextHolder}
      <h2 className="text-red-600 text-2xl">{errorMessage}</h2>
    </div>
  );
};

export default LinkedIn;
