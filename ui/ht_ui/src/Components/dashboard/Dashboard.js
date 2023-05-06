import React from "react";
import TalentDashboard from "./TalentDashboard";
import StaffDashboard from "./StaffDashboard";
import MentorDashboard from "./MentorDashboard";

const Dashboard = () => {
  const me = localStorage.getItem("me");
  if (me === "isS") {
    return <StaffDashboard />;
  } else if (me === "isM") {
    return <MentorDashboard />;
  } else if (me === "isA") {
    return <StaffDashboard />;
  } else if (me === "isAl") {
  } else if (me === "isT") {
    return <TalentDashboard />;
  }
};

export default Dashboard;
