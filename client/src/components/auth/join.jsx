import { Link } from "react-router-dom";

const Join = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "/";
  }
  
  return (
    <div className="min-h-screen">
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center lg:px-36 md:px-24 px-12">
        <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
          Join Us
        </h1>
        <br />
        <p className="text-center rounded-md shadow-lg text-sm p-3 shadow-sky-200">
          <strong className="text-xl">Welcome to HiTalent!</strong> <br /> Dive
          into our free, immersive programming journey through internship and
          apprenticeship programs, and emerge as a skilled software developer.
          Join us today, unlock your potential, and pave the way to a rewarding
          tech career! As a professional platform, we highly encourage you to
          log in using your LinkedIn account. By doing so, it will you to
          connect with like-minded professionals and establish a professional
          identity online.
        </p>
        <br />
        <br />
        <Link
          to={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
            import.meta.env.VITE_LINKEDIN_CLIENT_ID
          }&redirect_uri=${
            import.meta.env.VITE_REDIRECT_URI
          }/auth/linkedin/callback&state=RandomString&scope=email,openid,profile`}
          className="hover:bg-sky-700 mt-1 mx-auto px-6 py-1 bg-sky-900 text-white rounded-md font-medium text-lg"
        >
          Continue with LinkedIn
        </Link>
        <br />
        <small>
          Already Joined?{" "}
          <Link
            to={"/login"}
            className="hover:text-sky-300 font-semibold underline"
          >
            Login
          </Link>
        </small>
        <small>
          If you are staff?{" "}
          <Link
            to={`https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=${
              import.meta.env.VITE_REDIRECT_URI
            }/auth/google/callback&response_type=code&client_id=${
              import.meta.env.VITE_GOOGLE_CLIENT_ID
            }&scope=email profile&access_type=offline&flowName=GeneralOAuthFlow`}
            className="hover:text-sky-300 font-semibold underline"
          >
            Join here
          </Link>
        </small>
      </div>
    </div>
  );
};
export default Join;
