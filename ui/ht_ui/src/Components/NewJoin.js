import React from "react";
import axios from "axios";

const NewJoin = () => {
  const accessToken = localStorage.getItem("accessToken");
  const isNew = localStorage.getItem("isNew");
  const postUrl = `${process.env.REACT_APP_BACKEND_API}/talent/select/program/`;
  const selection = (program) => {
    if (program) {
      axios
        .post(
          postUrl,
          { selectedProgram: program },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
            },
          }
        )
        .then((res) => {
          localStorage.setItem("talentType", res.data.talentType);
          localStorage.setItem("me", "isT");
          localStorage.removeItem("isNew");
          window.location.href = "/dashboard";
        })
        .catch(() => {
          window.location.href = "/";
        });
    } else {
      window.location.href = "/";
    }
  };

  if (accessToken && isNew === "true") {
    return (
      <section id="newjoin" className="mt-44 text-center">
        <div className="flex flex-col w-[98%]   m-auto">
          <h3 className="text-4xl text-black font-serif">
            Yay! You made it. We are happy to join you.
          </h3>
          <p className="text-3xl text-sky-300 font-serif">
            Now choose a program suitable to you.
          </p>
          <br />
          <div className="justify-center">
            <button
              type="button"
              className="mt-5 font-serif rounded-md bg-gray-800 w-[10em] py-4 px-5 text-3xl font-medium text-white shadow-sm
           hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                selection("intern");
              }}
            >
              Internship
            </button>
          </div>
          <strong className="text-black">( or )</strong>
          <div className="justify-center">
            {" "}
            <button
              type="button"
              className="mt-5 font-serif rounded-md bg-gray-800 w-[10em] py-4 px-5 text-3xl font-medium text-white shadow-sm
           hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                selection("apprentice");
              }}
            >
              Apprenticeship
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    window.location.href = "/";
  }
};

export default NewJoin;
