import { useEffect } from "react";
import MentorDashboard from "./MentorDashboard";
import StaffDashboard from "./StaffDashboard";
import TalentDashboard from "./TalentDashboard";

const Dashboard = () => {
  const me = localStorage.getItem("me");
  const username = localStorage.getItem("username");

  useEffect(() => {
    document.title = `${username || "User"} Dashboard - HiTalent`;
    return () => {
      document.title = "HiTalent";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="min-h-screen">
      <div className="pt-16"></div>
      {me === "isS" ? (
        <StaffDashboard />
      ) : me === "isM" ? (
        <MentorDashboard />
      ) : me === "isA" ? (
        <StaffDashboard />
      ) : me === "isT" ? (
        <TalentDashboard />
      ) : null}
    </div>
  );
};

export default Dashboard;
