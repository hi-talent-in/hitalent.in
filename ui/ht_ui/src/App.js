import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Components/home/Home";
import Loading from "./Components/Loading";
import LinkedInCallback from "./Components/LinkedInCallback";
import Prelogin from "./Components/Prelogin";
import Profile from "./Components/Profile";
import LogoutFunc from "./Components/Logout";
import NewJoin from "./Components/NewJoin";
import GoogleLogin from "./Components/staff/GoogleLogin";
import FreeCodeCamp from "./Components/talent/guides/FreeCodeCamp";
import StaffDashboard from "./Components/dashboard/StaffDashboard";
import Contacts from "./Components/staff/Contacts";
import FloatingFeedback from "./Components/FloatingFeedback";
import Feedbacks from "./Components/staff/Feedbacks";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import EditableDashboard from "./Components/dashboard/EditableDashboard";
import Dummy from "./Components/Dummy";
import Dashboard from "./Components/dashboard/Dashboard";
import JobDashboard from "./Components/dashboard/JobDashboard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Logout />
        <FloatingFeedback />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="auth/linkedin/callback"
            element={<LinkedInCallback />}
          ></Route>
          <Route path="auth/google/callback" element={<GoogleLogin />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="loading" element={<Loading />}></Route>
          <Route path="prelogin" element={<Prelogin />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="logout" element={<LogoutFunc />}></Route>
          <Route path="new/join" element={<NewJoin />}></Route>
          <Route path="freecodecamp/guide" element={<FreeCodeCamp />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="staff/dashboard" element={<StaffDashboard />}></Route>
          <Route
            path="talent/dashboard"
            element={<EditableDashboard />}
          ></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="feedbacks" element={<Feedbacks />}></Route>
          <Route path="dummy" element={<Dummy />} />
          <Route path="jobs" element={<JobDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
