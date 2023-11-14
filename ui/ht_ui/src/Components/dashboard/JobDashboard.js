import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import { Button, Input, Select, Tooltip, Spin, Table } from "antd";
import { useStore } from "../../store";
import { toast } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";
import Logout from "../Logout";

const JobDashboard = () => {

  const columns = [
    {
      title: "Role",
      dataIndex: "jobTitle",
      render: (text) => (
        <small className="font-medium text-xl">
          {text?.trim().length > 55 ? (
            <Tooltip title={text?.trim()}>
              <span>{text?.trim().slice(0, 55) + "..."}</span>
            </Tooltip>
          ) : (
            text?.trim()
          )}
        </small>
      ),
    },
    {
      title: "Company",
      dataIndex: "jobCompany",
      render: (text) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 hover:text-sky-500"
          href={text.link}
        >
          {text.name?.trim().length > 55 ? (
            <Tooltip title={text.name?.trim()}>
              <small className="font-medium text-xl">
                {text.name?.trim().slice(0, 55) + "..."}
              </small>
            </Tooltip>
          ) : (
            <small className="font-medium text-lg md:text-xl">
              {text.name?.trim()}
            </small>
          )}
        </a>
      ),
    },
    {
      title: "Location",
      dataIndex: "jobLocation",
      render: (text) => <small className="font-medium text-xl">{text}</small>,
    },
    {
      title: "Action",
      dataIndex: "jobApplyLink",
      width: 60,
      render: (text) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 text-xl hover:text-orange-600"
          href={text}
        >
          Apply
        </a>
      ),
    },
  ];

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-700 hover:text-sky-500 ">{symbol}</small>
  );

  const { setNotAuthorised, notAuthorised } = useStore((state) => ({
    notAuthorised: state.notAuthorised,
    setNotAuthorised: state.setNotAuthorised,
  }));

  const [skillValue, setSkillValue] = useState("");
  const [sourceValue, setSourceValue] = useState();
  const [getJ, setGetJ] = useState(false);
  const [loading, setLoading] = useState(false);

  const jobsArr = JSON.parse(sessionStorage.getItem("jobsArr"));

  const sources = ["LinkedIn", "Naukri.com", "Indeed.com"];

  const handleSkillChange = (e) => {
    setSkillValue(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSourceValue(e);
  };

  const getJobs = async () => {
    setLoading(true);
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
    setSkillValue("");
    setSourceValue(null);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getJ]);

  if (localStorage.getItem("accessToken")) {
    return (
      <section>
        <Navbar />
        {notAuthorised ? <Logout /> : null}
        {localStorage.getItem("accessToken") ? (
          <div className="flex flex-col mt-24 m-2 text-black bg-white md:w-[95%] md:mx-auto rounded-lg space-y-3">
            <strong className="text-center">Job Board</strong>
            <div className="flex md:flex-row flex-col ">
              <div className="md:w-[25%] ">
                <div className="items-center md:space-y-10 space-y-3 flex flex-col">
                  <div></div>
                  <div className="flex flex-col">
                    <small>Source:</small>
                    <Select
                      className="w-[11em]"
                      onChange={handleSourceChange}
                      style={{ textAlign: "center" }}
                      value={sourceValue}
                    >
                      {sources.map((source, index) => (
                        <Select.Option value={source.toLowerCase()} key={index}>
                          <small className="font-serif text-xl">{source}</small>
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <div className="flex flex-col">
                    <small>Skill:</small>
                    <Input.TextArea
                      onChange={handleSkillChange}
                      className="text-xl font-serif block h-10 rounded-md w-[12.5em]"
                      value={skillValue}
                      autoSize
                    />
                  </div>
                  <Button
                    onClick={getJobs}
                    className="w-[5em] hover:!bg-transparent"
                  >
                    {loading ? <Spin indicator={antIcon} /> : "Submit"}
                  </Button>
                </div>
              </div>
              <div className="md:w-[70%] m-2 rounded-lg  overflow-auto">
                <Table
                  columns={columns}
                  dataSource={jobsArr}
                  pagination={{
                    pageSize: 10,
                    showSizeChanger: false,
                    nextIcon: nextPrevIcon(">"),
                    prevIcon: nextPrevIcon("<"),
                    jumpPrevIcon: nextPrevIcon("<<"),
                    jumpNextIcon: nextPrevIcon(">>"),
                  }}
                  scroll={{
                    y: 350,
                  }}
                  size="middle"
                />
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
  }
};

export default JobDashboard;
