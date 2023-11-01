import { useEffect, useState } from "react";
import axios from "axios";
import { Input, Select, Tooltip, Table } from "antd";
import Loader from "../loader";
import useStore from "../../../store";
import useCustomMessage from "../../hooks/useCustomMessage";

const JobDashboard = () => {
  const columns = [
    {
      title: "Role",
      dataIndex: "jobTitle",
      render: (text) => (
        <small>
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
              <small>{text.name?.trim().slice(0, 55) + "..."}</small>
            </Tooltip>
          ) : (
            <small>{text.name?.trim()}</small>
          )}
        </a>
      ),
    },
    {
      title: "Location",
      dataIndex: "jobLocation",
      render: (text) => <small>{text}</small>,
    },
    {
      title: "Action",
      dataIndex: "jobApplyLink",
      width: 60,
      render: (text) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-700 underline text-xs"
          href={text}
        >
          Apply
        </a>
      ),
    },
  ];

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-600 hover:text-sky-500">{symbol}</small>
  );

  const { error, contextHolder } = useCustomMessage();

  const { setNotAuthorised } = useStore((state) => ({
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
      .get(`${import.meta.env.VITE_BACKEND_API}/jobs`, {
        params: data,
      })
      .then((res) => {
        sessionStorage.setItem("jobsArr", JSON.stringify(res.data));
        setGetJ(true);
        setSkillValue("");
        setSourceValue(null);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : error(err.response.data.message || err.response.data.error)
      );
    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getJ]);

  if (localStorage.getItem("accessToken")) {
    return (
      <section className="min-h-screen">
        <div className="pt-16"></div>
        {contextHolder}
        {localStorage.getItem("accessToken") && (
          <div className="flex flex-col m-2 text-black bg-white md:w-[95%] md:mx-auto rounded-lg space-y-3">
            <strong className="text-center text-2xl text-sky-700">
              Job Board
            </strong>
            <div className="flex md:flex-row flex-col gap-2">
              <div className="md:w-[25%] rounded-md border-2">
                <div className="items-center gap-2 py-10 flex flex-col p-2">
                  <div></div>
                  <div className="flex flex-col w-full">
                    <small>Source:</small>
                    <Select
                      className=""
                      onChange={handleSourceChange}
                      style={{ textAlign: "center" }}
                      value={sourceValue}
                    >
                      {sources.map((source, index) => (
                        <Select.Option value={source.toLowerCase()} key={index}>
                          <p className="text-sm">{source}</p>
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <br />
                  <div className="flex flex-col w-full">
                    <small>Skill:</small>
                    <Input.TextArea
                      onChange={handleSkillChange}
                      value={skillValue}
                      autoSize
                    />
                  </div>
                  <button
                    onClick={getJobs}
                    className="hover:cursor-pointer hover:bg-sky-700 mt-1 mx-auto px-6 py-1 bg-sky-900 text-white rounded-md font-medium"
                  >
                    {loading ? <Loader /> : "Submit"}
                  </button>
                </div>
              </div>
              <div className="md:w-[75%] rounded-md border-2 overflow-auto">
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
                    y: 500,
                  }}
                  size="small"
                />
              </div>
            </div>
            <div></div>
          </div>
        )}
      </section>
    );
  }
};

export default JobDashboard;
