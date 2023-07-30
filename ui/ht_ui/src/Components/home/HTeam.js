import React from "react";
import { Carousel } from "antd";

const HTeam = () => {
  return (
    <section id="hteam">
      <div className="bg-neutral-900 h-auto">
        <h2 className="text-4xl text-red-300">Team</h2>
        <div className="md:w-[40em] w-[22em] mx-auto mt-5">
          <Carousel autoplay>
            <div className="h-[12em]">
              <div className="text-white flex flex-row items-center justify-center space-x-5">
                <img
                  src={"/hteam/madan.jpg"}
                  alt="ceo"
                  className="h-32 rounded-full"
                />
                <div>
                  <strong className="text-3xl">Madan Meena</strong>
                  <br />
                  <small>Acting CEO</small>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/mmmiitr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-blue-500 underline font-serif"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[12em]">
              <div className="text-white flex flex-row items-center justify-center space-x-5">
                <img
                  src={"/hteam/iliyas.jpg"}
                  alt="iliyas"
                  className="h-32 rounded-full"
                />
                <div>
                  <strong className="text-3xl">Iliyas Shaik</strong>
                  <br />
                  <small>Mentor</small>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/s-iliyas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-blue-500 underline font-serif"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HTeam;
