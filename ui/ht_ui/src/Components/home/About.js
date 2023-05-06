import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about" className=" bg-neutral-900">
        <div className="w-[95%] md:max-w-[50em]  p-3 mx-auto">
          <h2>About Us</h2>
          <p className="text-left  text-3xl text-white">
            HiTalent is an online programming training platform that is on a
            mission to help students learn programming
            <strong className="text-3xl text-red-300"> free of cost</strong>
            .<br /> We deliver our training through an
            <a href="/#:~:text=a%20suitable%20company.-,Internship%20Program,-(3%2D6%20Months">
              {" "}
              <strong className="text-3xl text-orange-600 underline">
                internship
              </strong>{" "}
            </a>
            program of 3-6 months and an
            <a href="/#:~:text=Apprenticeship%20Program">
              {" "}
              <strong className="text-3xl text-orange-600 underline">
                apprenticeship
              </strong>{" "}
            </a>
            program of 6-9 months , which equips the talents with the necessary
            programming skills to become a programmer. <br />
            Our end goal is that after the internship or apprenticeship, the
            talent will be able to get a job as a software developer and we will
            help them to get placed in a suitable company.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
