import React, { Component } from "react";
import { Carousel } from "antd";

export default class Testimonials extends Component {
  render() {
    return (
      <>
        <section className="bg-neutral-900  h-auto">
          <div className="bg-neutral-900 h-10"></div>{" "}
          <h5 className="text-red-300">Here is what others say about us</h5>
          <div className="md:w-[40em] w-[22em] mx-auto mt-5">
            <Carousel autoplay>
              <div className=" h-[30em] md:h-[20em]">
                <div className="text-white">
                  <strong className="text-3xl">Iliyas</strong>
                  <br />
                  <strong>Backend Developer</strong>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/s-iliyas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-blue-500 underline font-serif"
                  >
                    LinkedIn
                  </a>
                  <p className="m-1 text-left  text-2xl">
                    There's a saying that says, Never Forget your First Company,
                    that gave you the chance to start your career. HiTalent
                    trained me and guided me to become a Backend Developer. So,
                    when I honed my skills, then I started to mentor talents
                    here, when I'm free from work.
                  </p>
                </div>
              </div>
              <div className=" h-[30em] md:h-[20em]">
                <div className="text-white">
                  <strong className="text-3xl">Himanshi</strong>
                  <br />
                  <strong>Python Developer</strong>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/himanshi-v-b35581225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-blue-500 underline font-serif"
                  >
                    LinkedIn
                  </a>
                  <p className="m-1 text-left  text-2xl">
                    I'm thankful to be part of HiTalent. It was a great pleasure
                    and learning to work here, I worked as an employee of the
                    first batch when this company started. This company has
                    given me strong motivation and support, as they hire me
                    based on skills and not experience. I had a great learning
                    on technical skills related to ongoing market demand like
                    Docker, GCP, Agile, DRF and many more. As a Fresher, I even
                    developed a great team bonding skill as we used to have
                    weekly update stand up where we had healthy interaction with
                    the entire team. As an Alumni I would love to stay connected
                    with team. I wish the organization grows well.
                  </p>
                </div>
              </div>
              <div className=" h-[30em] md:h-[20em]">
                <div className="text-white">
                  <strong className="text-3xl">Aman</strong>
                  <br />
                  <strong>Java Developer</strong>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/aman-kulhar-38205a1b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-blue-500 underline font-serif"
                  >
                    LinkedIn
                  </a>
                  <p className="m-1 text-left  text-2xl">
                    I had an incredible experience learning the fundamentals of
                    Java programming language. The hands-on training and
                    guidance from my mentors helped me develop a strong
                    foundation in Java syntax, object-oriented programming
                    concepts, and software development principles.
                  </p>
                </div>
              </div>
              <div className=" h-[30em] md:h-[20em]">
                <div className="text-white">
                  <strong className="text-3xl">Roma</strong>
                  <br />
                  <strong>Backend Developer</strong>
                  <br />
                  <a
                    href="https://linkedin.com/in/roma-patel-649792146"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 hover:text-blue-500 underline font-serif"
                  >
                    LinkedIn
                  </a>
                  <p className="m-1 text-left  text-2xl">
                    I enjoyed a very good work experience with HiTalent, This is
                    my first company where I started my career in the
                    programming field. Because of 'HiTalent', I'm able to become
                    a 'Backend Developer'. Every Talent is given a chance to
                    share problems and get help. I'm looking forward to being a
                    part of this organisation for a long term in my future
                    career.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </>
    );
  }
}
