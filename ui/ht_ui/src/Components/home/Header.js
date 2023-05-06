/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useStore } from "../../store";

const Header = () => {
  const accessToken = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const { profileName } = useStore((state) => ({
    profileName: state.profileName,
  }));
  return (
    <section
      id="home"
      className="flex h-screen bg-gradient-to-r from-slate-700 to-red-300"
    >
      <div className="flex-col m-auto">
        <div className="m-auto">
          {accessToken ? (
            <>
              <h1 className="text-9xl  md:text-[100px] mt-32 font-semibold w-full text-white hover:-translate-y-1 hover:-translate-x-1 hover:scale-110  duration-300">
                HiTalent
              </h1>
              <br />
              <h3 className="text-5xl font-medium text-white font-serif">
                Hello, {profileName || username ? username : "Diligent"}
              </h3>
            </>
          ) : (
            <>
              <h1 className="text-9xl  md:text-[100px] mt-32 font-semibold w-full text-white hover:-translate-y-1 hover:-translate-x-1 hover:scale-110  duration-300">
                HiTalent
              </h1>
              <br />
              <h4 className="text-2xl bg-black p-2 font-medium text-white font-mono w-[95%] md:w-full mx-auto rounded-xl">
                We provide mentorship to individuals who aspire to become web
                developers.
              </h4>
            </>
          )}
        </div>
        <p className="scrolldown  mt-32">
          <a className="smoothscroll text-8xl" href="#about">
            <i className="icon-down-circle hover:text-red-400"></i>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Header;
