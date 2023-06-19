import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import NonHomeFooter from "./NonHomeFooter";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useStore } from "../store";

const Profile = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [freeCodeCampId, setFreeCodeCampId] = useState();
  const [linkedinId, setLinkedinId] = useState();
  const [notAuthorised, setNotAuthorised] = React.useState(false);
  const { setProfileName, profileName, profileEmail } = useStore((state) => ({
    setProfileName: state.setProfileName,
    profileName: state.profileName,
    profileEmail: state.profileEmail,
  }));

  const initialData = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/profile/`, {
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
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  useEffect(() => {
    initialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitButton = async (event) => {
    event.preventDefault();
    await axios({
      url: `${process.env.REACT_APP_BACKEND_API}/profile/`,
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
      .then(async (response) => toast.success(response.data.message))
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  if (accessToken) {
    return (
      <>
        {notAuthorised ? <Logout /> : null}
        <Navbar />
        <Toaster
          containerStyle={{ zIndex: 99999 }}
          position="top-center"
          reverseOrder="false"
        ></Toaster>
        <div className="flex justify-center items-center flex-col">
          <div className="w-full mx-auto">
            <div className="mt-24 text-center text-4xl font-serif text-zinc-800 mb-6 mx-auto">
              You can update profile here.
            </div>
            <div className="bg-white  rounded-xl shadow-md overflow-hidden h-auto m-5">
              <form onSubmit={submitButton}>
                <div className="gap-5 m-5 grid md:grid-cols-2 grid-cols-1">
                  <div className="flex flex-col mx-auto w-[98%]   ">
                    <label className=" text-xl m-0 text-left font-medium text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      defaultValue={profileName || name || ""}
                      onChange={(e) => {
                        setName(e.target.value);
                        setProfileName(e.target.value);
                      }}
                      className="text-xl font-serif block h-10 rounded-md mx-auto"
                      style={{
                        backgroundColor: "rgb(107, 114, 128)",
                        color: "black",
                      }}
                    ></input>
                  </div>
                  <div className="flex flex-col mx-auto w-[98%]   ">
                    <label className=" text-xl m-0 text-left font-medium text-black">
                      Email
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      defaultValue={profileEmail || email || ""}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="text-xl font-serif block h-10 rounded-md mx-auto"
                      style={{
                        backgroundColor: "rgb(107, 114, 128)",
                        color: "black",
                      }}
                    ></input>
                  </div>
                  <div className="flex flex-col mx-auto w-[98%]   ">
                    <label className=" text-xl m-0 text-left font-medium text-black">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      defaultValue={phoneNumber || ""}
                      id="last-name"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      className="text-xl font-serif block h-10 rounded-md mx-auto"
                      style={{
                        backgroundColor: "rgb(107, 114, 128)",
                        color: "black",
                      }}
                    ></input>
                  </div>
                  <div className="flex flex-col mx-auto w-[98%]   ">
                    <label className=" text-xl m-0 text-left font-medium text-black">
                      LinkedIn Profile Url
                    </label>
                    <input
                      type="text"
                      defaultValue={linkedinId || ""}
                      id="last-name"
                      onChange={(e) => {
                        setLinkedinId(e.target.value);
                      }}
                      className="text-xl font-serif block h-10 rounded-md mx-auto"
                      style={{
                        backgroundColor: "rgb(107, 114, 128)",
                        color: "black",
                      }}
                    ></input>
                  </div>
                  {me === "isT" ? (
                    <>
                      <div className="flex flex-col mx-auto w-[98%]   ">
                        <label className=" text-xl m-0 text-left font-medium text-black">
                          Freecodecamp Username
                        </label>
                        <input
                          type="text"
                          defaultValue={freeCodeCampId || ""}
                          onChange={(e) => {
                            setFreeCodeCampId(e.target.value);
                          }}
                          id="last-name"
                          className="text-xl font-serif block h-10 rounded-md mx-auto"
                          style={{
                            backgroundColor: "rgb(107, 114, 128)",
                            color: "black",
                          }}
                        ></input>
                      </div>
                      {freeCodeCampId ? null : (
                        <div className="flex flex-col mx-auto w-[98%]  text-2xl m-0 text-left font-medium text-black  ">
                          Click below link
                          <Link
                            to={`${process.env.REACT_APP_REDIRECT_URI}/freecodecamp/guide`}
                            className="text-orange-700 w-auto hover:text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >{`${process.env.REACT_APP_REDIRECT_URI}/freecodecamp/guide`}</Link>
                          To get Freecodecamp account username and configure
                          account{"."}
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
                <div className="flex flex-row justify-evenly">
                  <button
                    type="submit"
                    className="text-green-600 bg-transparent hover:!bg-transparent p-0 m-0 font-serif font-medium text-3xl text-right  hover:text-orange-600 underline "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <NonHomeFooter />
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default Profile;
