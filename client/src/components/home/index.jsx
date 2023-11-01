import { useEffect } from "react";

import About from "./about";
import Header from "./header";
import Programs from "./programs";
import Team from "./team";
import Contact from "./contact";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute("id");
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          console.log(`Section ${sectionId} is in the viewport`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:px-36 md:px-24 px-12">
      <Header />
      <About />
      <Programs />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
