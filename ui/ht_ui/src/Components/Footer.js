import React, { Component } from "react";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

class Footer extends Component {
  render() {
    const main = {
      linkedin: {
        url: "https://www.linkedin.com/company/hitalent-in/",
        className: "fa fa-linkedin hover:text-orange-600 mx-4",
      },
      github: {
        name: "github",
        url: "https://github.com/hi-talent-org/hitalent.in",
        className: "fa fa-github hover:text-orange-600 mx-4",
      },
    };

    return (
      <footer className="mt-9">
        <div className="flex flex-row items-center justify-center mx-4">
          <a
            href={main.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-orange-600 mx-4"
          >
            <AiOutlineLinkedin
              style={{
                color: "black",
                fontSize: "1.5em",
              }}
            />
          </a>
          <a
            href={main.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-orange-600 mx-4"
          >
            <AiFillGithub
              style={{
                color: "black",
                fontSize: "1.5em",
              }}
            />
          </a>
        </div>
        <div className=" text-2xl font-sans mt-4">
          &copy; <small className="text-2xl text-black">Copyright 2022-2023</small>
          <strong className="text-black"> . HiTalent . </strong>
        </div>
      </footer>
    );
  }
}

export default Footer;
