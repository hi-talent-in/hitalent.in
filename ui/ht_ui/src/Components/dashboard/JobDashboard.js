import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import { Button, Input, Select, Tooltip, Spin } from "antd";
import { useStore } from "../../store";
import { toast } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";
import Logout from "../Logout";
import { useNavigate } from "react-router-dom";

const JobDashboard = () => {
  const navigate = useNavigate();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const { setNotAuthorised, notAuthorised } = useStore((state) => ({
    notAuthorised: state.notAuthorised,
    setNotAuthorised: state.setNotAuthorised,
  }));

  const [skillValue, setSkillValue] = useState("");
  const [sourceValue, setSourceValue] = useState();
  const [getJ, setGetJ] = useState(false);
  const [loading, setLoading] = useState(false);

  const jobsArr = sessionStorage.getItem("jobsArr")
    ? JSON.parse(sessionStorage.getItem("jobsArr"))
    : [];

  const sources = ["LinkedIn", "Naukri.com", "Indeed.com"];

  const handleSkillChange = (e) => {
    setSkillValue(e.target.value);
    sessionStorage.setItem("skillValue", e.target.value);
  };

  const handleSourceChange = (e) => {
    setSourceValue(e);
    sessionStorage.setItem("sourceValue", e);
  };

  const getJobs = async () => {
    setLoading(true);
    sessionStorage.removeItem("jobsArr");
    const data = {
      skill: skillValue,
      source: sourceValue,
    };
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/jobs`, {
        params: data,
      })
      .then((res) => {
        sessionStorage.setItem("jobsArr", JSON.stringify(res.data));
        setGetJ(true);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getJ]);

  useEffect(() => {
    if (notAuthorised) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <Navbar />
      {notAuthorised ? <Logout /> : null}
      {localStorage.getItem("accessToken") ? (
        <div className="flex flex-col mt-24 m-2 text-black bg-white md:w-[80%] md:mx-auto h-[90vh] rounded-lg space-y-3">
          <strong className="text-center">Job Board</strong>
          <div className="flex md:flex-row flex-col ">
            <div className="md:w-[30%] ">
              <div className="items-center space-y-2 flex flex-col">
                <div></div>
                <Select
                  placeholder="Source"
                  className="w-[11em]"
                  onChange={handleSourceChange}
                  style={{ textAlign: "center" }}
                  value={sessionStorage.getItem("sourceValue") || sourceValue}
                >
                  {sources.map((source, index) => (
                    <Select.Option value={source.toLowerCase()} key={index}>
                      <small className="font-serif text-2xl">{source}</small>
                    </Select.Option>
                  ))}
                </Select>
                <Input.TextArea
                  placeholder="Skill"
                  onChange={handleSkillChange}
                  className="text-xl font-serif block h-10 rounded-md w-[12.5em]"
                  value={sessionStorage.getItem("skillValue") || skillValue}
                  autoSize
                />
                <Button
                  onClick={getJobs}
                  className="w-[5em] hover:bg-transparent m-0"
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="md:w-[70%] bg-slate-200 m-2  rounded-lg  overflow-auto md:h-[83vh] h-[70vh]">
              <div className="flex flex-col space-y-2 m-2">
                {jobsArr && jobsArr?.length > 0 ? (
                  jobsArr?.map((job, index) => (
                    <div
                      className=" bg-white md:w-[80%] w-full mx-auto rounded-lg"
                      key={index}
                    >
                      <div className="flex flex-row space-x-2 m-2 md:p-2 items-center justify-between">
                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-2 items-center">
                            <small className="text-sm md:text-xl text-slate-600">
                              Job Title :{" "}
                            </small>{" "}
                            <small className="font-medium text-lg md:text-xl">
                              {job.jobTitle?.trim().length > 55 ? (
                                <Tooltip title={job.jobTitle?.trim()}>
                                  <span>
                                    {job.jobTitle?.trim().slice(0, 55) + "..."}
                                  </span>
                                </Tooltip>
                              ) : (
                                job.jobTitle?.trim()
                              )}
                            </small>
                          </div>
                          <div className="flex flex-row space-x-2 items-center">
                            <small className="text-sm md:text-xl text-slate-600">
                              Company:{" "}
                            </small>{" "}
                            <a
                              href={job.jobCompanyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-600 underline hover:text-orange-600 text-sm md:text-xl"
                            >
                              {job.jobCompanyName?.trim().length > 55 ? (
                                <Tooltip title={job.jobCompanyName?.trim()}>
                                  <span>
                                    {job.jobCompanyName?.trim().slice(0, 55) +
                                      "..."}
                                  </span>
                                </Tooltip>
                              ) : (
                                job.jobCompanyName?.trim()
                              )}
                            </a>{" "}
                          </div>
                        </div>
                        <div>
                          <a
                            href={job.jobApplyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="w-[5em] hover:bg-transparent m-0">
                              Apply
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : loading ? (
                  <div className="flex justify-center items-center flex-col space-y-5">
                    <small className="p-10">
                      Please wait, we are looking jobs for you...
                    </small>
                    <Spin indicator={antIcon}></Spin>
                  </div>
                ) : (
                  <div className="flex justify-center items-center flex-col space-y-5">
                    <small className="p-10">
                      Please select a source from dropdown to search jobs from
                      them, with your required skill.
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        ""
      )}
      <NonHomeFooter />
    </section>
  );
};

export default JobDashboard;
