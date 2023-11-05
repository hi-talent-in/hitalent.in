import { useEffect } from "react";

import About from "./about";
import Header from "./header";
import Programs from "./programs";
import Team from "./team";
import Contact from "./contact";
import Testimonials from "./testimonials";
import useStore from "../../../store";

const Home = () => {
  const accessToken = localStorage.getItem("accessToken");

  const { setScrollViewAs } = useStore((state) => ({
    setScrollViewAs: state.setScrollViewAs,
  }));

  useEffect(() => {
    if (!accessToken) {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionId = section.getAttribute("id");
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setScrollViewAs(sectionId);
          }
        });
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="lg:px-36 md:px-24 px-12">
      <Header />
      <About />
      <Programs />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
