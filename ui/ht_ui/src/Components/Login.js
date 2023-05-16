import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";

const Login = () => {
  return (
    <section
      id="login"
      className="flex flex-col gap-5 items-center justify-center h-screen bg-[rgb(202, 207, 210)]"
    >
      <strong className="text-5xl text-black">Login</strong>
      <Link
        to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}/auth/linkedin/callback&state=RandomString&scope=email,openid,profile`}
        className="mt-5 rounded-md flex flex-row items-center justify-center bg-gray-800 w-[10em] py-4 px-5 text-3xl font-medium text-white shadow-sm
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <AiOutlineLinkedin
          style={{
            color: "yellow",
            fontSize: "1.5em",
          }}
        />{" "}
        LinkedIn
      </Link>
      <pre className="font-serif text-black">
        If you are staff with domain email?{" "}
        <Link
          to={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=${process.env.REACT_APP_REDIRECT_URI}/auth/google/callback&response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&scope=email profile&access_type=offline&flowName=GeneralOAuthFlow`}
          className="font-serif hover:text-sky-300 underline text-black"
        >
          Google Login here
        </Link>
      </pre>
      <br />
      <Link className="text-black hover:text-white underline font-serif" to="/">
        Go to homepage
      </Link>
      <br />
      <Link className="text-black hover:text-white underline font-serif" to="/prelogin">
        Go back
      </Link>
    </section>
  );
};

export default Login;
