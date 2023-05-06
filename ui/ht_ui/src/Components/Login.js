import React from "react";

const Login = () => {
  return (
    <section
      id="login"
      className="flex flex-col gap-5 items-center justify-center h-screen bg-[rgb(202, 207, 210)]"
    >
      <div className="text-left text-3xl">
        {" "}
        <pre className="font-serif text-slate-800 m-5">
          If you are client?{" "}
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=${
              process.env.REACT_APP_REDIRECT_URI
            }/auth/google/callback&response_type=code&client_id=${
              process.env.REACT_APP_GOOGLE_CLIENT_ID
            }&scope=email profile&access_type=offline&flowName=GeneralOAuthFlow`}
            className="font-serif text-orange-600 underline hover:text-sky-500"
          >
            Login here
          </a>
        </pre>{" "}
        <pre className="font-serif text-slate-800 m-5">
          If you are mentor?{" "}
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=${
              process.env.REACT_APP_REDIRECT_URI
            }/auth/google/callback&response_type=code&client_id=${
              process.env.REACT_APP_GOOGLE_CLIENT_ID
            }&scope=email profile&access_type=offline&flowName=GeneralOAuthFlow`}
            className="font-serif text-orange-600 underline hover:text-sky-500"
          >
            Login here
          </a>
        </pre>{" "}
        <pre className="font-serif text-slate-800 m-5">
          If you are staff?{" "}
          <a
            href={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=${
              process.env.REACT_APP_REDIRECT_URI
            }/auth/google/callback&response_type=code&client_id=${
              process.env.REACT_APP_GOOGLE_CLIENT_ID
            }&scope=email profile&access_type=offline&flowName=GeneralOAuthFlow`}
            className="font-serif text-orange-600 underline hover:text-sky-500"
          >
            Login here
          </a>
        </pre>
      </div>
    </section>
  );
};

export default Login;
