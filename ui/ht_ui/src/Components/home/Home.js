import React, { useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Programs from "./Programs";
import Footer from "../Footer";
import HTeam from "./HTeam";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Navbar from "../Navbar";
import "../../assets/css/media-queries.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/layout.css";
import "../../assets/css/default.css";
import { useStore } from "../../store.js";

const Home = () => {
  const { reload, setReload } = useStore((state) => ({
    reload: state.reload,
    setReload: state.setReload,
  }));

  useEffect(() => {
    setReload(false);
  }, [reload, setReload]);

  return (
    <div className="text-center">
      <Navbar />
      <Header />
      <About />
      <Programs />
      <Testimonials />
      <HTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
