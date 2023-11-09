import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorElement from "./components/errorElement";
import Dashboard from "./components/dashboard";
import Login from "./components/auth/login";
import Join from "./components/auth/join";
import Root from "./components/root";
import Home from "./components/home";
import NewJoin from "./components/auth/newJoin";
import LinkedIn from "./components/auth/linkedin";
import Profile from "./components/profile";
import FreeCodeCamp from "./components/blogs/guides/freecodecamp";
import JobDashboard from "./components/dashboard/JobDashboard";
import GoogleLogin from "./components/staff/GoogleLogin";
import Contacts from "./components/staff/Contacts";
import Feedbacks from "./components/staff/Feedbacks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "feedbacks",
        element: <Feedbacks />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "jobs",
        element: <JobDashboard />,
      },
      {
        path: "new/join",
        element: <NewJoin />,
      },
      {
        path: "freecodecamp/guide",
        element: <FreeCodeCamp />,
      },
      {
        path: "auth/linkedin/callback",
        element: <LinkedIn />,
      },
      {
        path: "auth/google/callback",
        element: <GoogleLogin />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

function App() {

  return <RouterProvider router={routes} />;
}

export default App;
