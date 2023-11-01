import { Link } from "react-router-dom";

const Header = () => {
  const username = localStorage.getItem("username");
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="flex flex-col md:flex-row gap-7 pt-16 w-full items-center justify-around min-h-screen md:text-center">
      <div className="md:hidden block pt-3"></div>
      <div className="grid grid-cols-2 gap-2 ">
        <img
          src="/images/header/01.jpeg"
          alt="header img 1"
          width={200}
          className="rounded-md shadow-sky-200 shadow-2xl hover:-translate-x-1 hover:-translate-y-1"
        />
        <img
          src="/images/header/02.jpeg"
          alt="header img 1"
          width={200}
          className="rounded-md shadow-sky-200 shadow-2xl hover:translate-x-1 hover:-translate-y-1"
        />
        <img
          src="/images/header/03.jpeg"
          alt="header img 1"
          width={180}
          className="rounded-md shadow-sky-200 shadow-2xl hover:-translate-x-1 hover:translate-y-1"
        />
        <img
          src="/images/header/04.jpeg"
          alt="header img 1"
          width={200}
          className="rounded-md shadow-sky-200 shadow-2xl hover:translate-x-1 hover:translate-y-1"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl  font-semibold">
          Create The Career And Life You <br /> Want With{" "}
          <strong className="text-sky-900 text-5xl">HiTalent</strong>
        </h1>
        <br />
        <h4 className="text-lg font-medium mx-auto rounded-xl">
          We provide mentorship to individuals who aspire to become Developers.
        </h4>
        <small className="text-sm text-center">
          We keep your information private and secure. <br />
          We are Open Source.
        </small>
        <br />
        {accessToken ? (
          <p className="text-center">
            Hello,{" "}
            <strong className="text-sky-700">{username || "Deligent!"}</strong>
          </p>
        ) : (
          <Link
            to={"/join"}
            className="hover:bg-sky-700 mt-1 mx-auto px-6 py-1 bg-sky-900 text-white rounded-md font-semibold text-lg"
          >
            Enroll
          </Link>
        )}
        <br />
        <div className="flex flex-col justify-center w-full items-center text-sm">
          <div className="text-black">
            Follow us on{" "}
            <a
              href={"https://www.linkedin.com/company/hitalent-in/"}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif hover:text-sky-800 underline text-black"
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
              className="font-serif hover:text-sky-800 underline text-black"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
