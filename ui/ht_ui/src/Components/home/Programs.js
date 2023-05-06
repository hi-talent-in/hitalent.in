import React, { Component } from "react";

class Programs extends Component {
  render() {
    return (
      <section id="program" className="mt-2">
        <div className=" flex flex-col items-center justify-center md:h-screen  bg-gradient-to-r from-slate-700 to-red-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-5 ">
            <div className="mx-auto w-full md:max-w-[30em]  text-black bg-[#fff]  rounded-xl">
              <div className="flex flex-col">
                <br />
                <strong>Internship Program</strong>
                <span>(3-6 Months)</span>
                <p className="text-justify p-10 text-black mb-0">
                  This program is for candidates who are from the computer
                  science discipline or who are from different backgrounds and
                  have exposure to the software side. The entire duration of the
                  program is 3 to 6 months, in which they are trained on our
                  curriculum and on live projects. Our industry-oriented
                  curriculum helps them to brush up their basic programming
                  skills and working on live projects gives them necessary
                  industry exposure.
                </p>
                <ol className="text-justify text-black p-10">
                  <strong className="text-left">Roadmap of talent:</strong>
                  <li>FreeCodeCamp Course </li>
                  <li>Practical Projects </li>
                  <li>Problem Solving </li>
                  <li>Interview Preparation </li>
                </ol>
              </div>
            </div>
            <div className="w-full md:max-w-[30em]  text-black mx-auto bg-[#fff] rounded-xl">
              <div className="flex flex-col">
                <br />
                <strong>Apprenticeship Program</strong>{" "}
                <span>(6-9 Months)</span>
                <p className="text-justify p-10 mx-auto">
                  This program is an extension of the Internship program and
                  this is for people who are not from the computer science
                  discipline or who do not have any prior knowledge of
                  programming. People who wish to switch to this field or have a
                  desire to learn computer programming can apply for this
                  program. The entire duration of the program is 6 to 9 months,
                  in which they are trained on basic as well as advanced
                  concepts in programming and also have the chance to work on
                  live projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Programs;
