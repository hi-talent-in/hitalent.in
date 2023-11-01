import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
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
    <div className="flex flex-col space-y-2 py-2 items-center justify-center border-t border-slate-100">
      <div className="flex flex-row items-center justify-center gap-4">
        <a href={main.linkedin.url} target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin
            style={{
              color: "black",
              fontSize: "1.5em",
            }}
          />
        </a>
        <a href={main.github.url} target="_blank" rel="noopener noreferrer">
          <AiFillGithub
            style={{
              color: "black",
              fontSize: "1.5em",
            }}
          />
        </a>
      </div>
      <small>
        &copy; <small>Copyright 2022-2023</small>
        <strong> . HiTalent . </strong>
      </small>
      <p className="text-xs">
        HiTalent, Johad Mohalla, Plot No1, Kharkhada, Rajgarh, Alwar, Rajasthan,
        301408.
      </p>
    </div>
  );
};

export default Footer;
