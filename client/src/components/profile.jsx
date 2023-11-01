import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCustomMessage from "../hooks/useCustomMessage";
import useStore from "../../store";
import { Input } from "antd";

const Profile = () => {
  const accessToken = localStorage.getItem("accessToken");

  const me = localStorage.getItem("me");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [freeCodeCampId, setFreeCodeCampId] = useState("");
  const [linkedinId, setLinkedinId] = useState("");

  const { error, success, contextHolder } = useCustomMessage();

  const { userData } = useStore((store) => ({
    userData: store.userData,
  }));

  const initialData = async () => {
    await axios
      .get(`${import.meta.env.VITE_BACKEND_API}/profile/`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phoneNumber);
        setFreeCodeCampId(response.data.freeCodeCampId);
        setLinkedinId(response.data.linkedinId);
      })
      .catch((err) =>
        err.response.status === 401
          ? error("Please Login!!")
          : error(err?.response?.data?.message || err?.response?.data?.error)
      );
  };

  useEffect(() => {
    initialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitButton = async (event) => {
    event.preventDefault();
    await axios({
      url: `${import.meta.env.VITE_BACKEND_API}/profile/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      method: "POST",
      data: {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        freeCodeCampId: freeCodeCampId,
        linkedinId: linkedinId,
      },
    })
      .then(async (response) => success(response.data.message))
      .catch((err) =>
        err.response.status === 401
          ? error("Please Login!!")
          : error(err.response.data.message)
      );
  };

  if (!accessToken) {
    window.location.href = "/";
  }

  return (
    <section id="profile" className="min-h-[40rem]">
      {contextHolder}
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
          Profile
        </h1>
        <form className="flex flex-col p-5 lg:w-[40%] mx-auto md:w-[60%] w-full space-y-5 justify-center items-center">
          <div className="flex flex-col w-full">
            <small>Name:</small>{" "}
            <Input
              placeholder="john"
              name="name"
              className="bg-transparent"
              value={name || userData.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <small>Email:</small>{" "}
            <Input
              placeholder="john@gmail.com"
              name="email"
              className="bg-transparent"
              value={email || userData.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <small>Phone Number:</small>{" "}
            <Input
              placeholder="+918989898989"
              name="phone number"
              className="bg-transparent"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <small>LinkedIn Profile URL:</small>{" "}
            <Input
              placeholder="https://linkedin.com/john-wick/"
              name="linkedin Profile"
              className="bg-transparent"
              value={linkedinId}
              onChange={(e) => {
                setLinkedinId(e.target.value);
              }}
            />
          </div>
          {me === "isT" && (
            <>
              <div className="flex flex-col w-full">
                <small>FreeCodeCamp Id:</small>{" "}
                <Input
                  placeholder="john007"
                  name="freecodecamp id"
                  className="bg-transparent"
                  value={freeCodeCampId}
                  onChange={(e) => {
                    setFreeCodeCampId(e.target.value);
                  }}
                />
              </div>
              <p className="flex flex-col text-sm  ">
                Click below link
                <Link
                  to={`${import.meta.env.VITE_REDIRECT_URI}/freecodecamp/guide`}
                  className="text-orange-700 w-auto hover:text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >{`${
                  import.meta.env.VITE_REDIRECT_URI
                }/freecodecamp/guide`}</Link>
                To get Freecodecamp account username and configure account
                {"."}
              </p>
            </>
          )}
          <strong
            onClick={submitButton}
            className="hover:cursor-pointer hover:bg-sky-700 mt-1 mx-auto px-6 py-1 bg-sky-900 text-white rounded-md font-medium"
          >
            Submit
          </strong>
        </form>
      </div>
    </section>
  );
};

export default Profile;
