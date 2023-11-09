import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import FabFeedback from "../fabFeedback";
import Logout from "../logout";
import { useEffect } from "react";
import ScrollToTop from "../scrollToTop";
import ViewAs from "../viewAs";

const Root = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <ViewAs />
      <Logout />
      <ScrollToTop />
      <FabFeedback />
      <Navbar />
      <div className="min-h-[40rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
