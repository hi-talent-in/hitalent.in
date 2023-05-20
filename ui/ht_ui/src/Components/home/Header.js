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
      className="md:flex md:flex-col grid grid-rows-2 h-screen bg-gradient-to-r from-slate-700 to-red-300"
    >
      <div className="md:m-36">
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
            <h4 className="text-2xl bg-black p-2 font-medium text-white font-mono w-[95%] md:w-[40%] mx-auto rounded-xl">
              We provide mentorship to individuals who aspire to become
              Developers.
            </h4>
          </>
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-black">
          Follow us on{" "}
          <a
            href={"https://www.linkedin.com/company/hitalent-in/"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif hover:text-sky-300 underline text-black"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-black">
          Contribute from{" "}
          <a
            href={"https://github.com/hi-talent-org/hitalent.in"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif hover:text-sky-300 underline text-black"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
