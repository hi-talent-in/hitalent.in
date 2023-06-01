import * as React from "react";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import { Select, Spin } from "antd";
import Logout from "../Logout";
import { useStore } from "../../store";
import TreeView from "../TreeView";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import SkillTable from "./SkillTable";
import StepProgress from "./StepProgress";
import { LoadingOutlined } from "@ant-design/icons";

const TalentDashboard = () => {
  const {
    showTreeData,
    selectedTaskName,
    skill,
    skillSet,
    tips,
    resources,
    notAuthorised,
    selectedTaskPoints,
    selectedTaskKey,
    currentProgress,
    setProgressChange,
    progressChange,
    talentId,
    setGetCompletedPathsBool,
    setNotAuthorised,
    setCurrentProgress,
    setSelectLang,
    selectLang,
    currentLang,
    setSelectTrack,
    selectTrack,
    currentTrack,
    setCurrentLang,
    setCurrentTrack,
    setGetPathBool,
    setTalentId,
    setGetProgressBool,
    getProgressBool,
    setLevelProgress,
    levelProgress,
    setPtiD,
  } = useStore((state) => ({
    showTreeData: state.showTreeData,
    selectedTaskName: state.selectedTaskName,
    skill: state.skill,
    skillSet: state.skillSet,
    tips: state.tips,
    resources: state.resources,
    notAuthorised: state.notAuthorised,
    selectedTaskPoints: state.selectedTaskPoints,
    selectedTaskKey: state.selectedTaskKey,
    currentProgress: state.currentProgress,
    setProgressChange: state.setProgressChange,
    progressChange: state.progressChange,
    talentId: state.talentId,
    setGetCompletedPathsBool: state.setGetCompletedPathsBool,
    setNotAuthorised: state.setNotAuthorised,
    setCurrentProgress: state.setCurrentProgress,
    setSelectLang: state.setSelectLang,
    selectLang: state.selectLang,
    currentLang: state.currentLang,
    setSelectTrack: state.setSelectTrack,
    selectTrack: state.selectTrack,
    currentTrack: state.currentTrack,
    setCurrentLang: state.setCurrentLang,
    setCurrentTrack: state.setCurrentTrack,
    setGetPathBool: state.setGetPathBool,
    setTalentId: state.setTalentId,
    setGetProgressBool: state.setGetProgressBool,
    getProgressBool: state.getProgressBool,
    setLevelProgress: state.setLevelProgress,
    levelProgress: state.levelProgress,
    setPtiD: state.setPtiD,
  }));

  const [loading, setLoading] = React.useState(false);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const getProgress = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/progress/?talentId=${talentId}`
      )
      .then((talentData) => {
        setLevelProgress(talentData.data.levelProgress);
        setGetProgressBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  React.useEffect(() => {
    if (talentId) {
      getProgress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProgressBool, talentId]);

  const accessToken = localStorage.getItem("accessToken");
  const tId = localStorage.getItem("tId");

  React.useEffect(() => {
    setTalentId(tId);
    setPtiD(tId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statsRenderer = () => {
    return (
      <div className="flex flex-col justify-center items-center md:w-[30em] md:m-0 m-2 rounded-r-lg bg-white max-h-[39em] md:h-[39em] ">
        <div className="text-justify w-[80%] mx-auto">
          <ol className="p-3 font-serif text-2xl">
            <li className="font-serif text-2xl m-0 p-0">
              <small className=" text-2xl">FreeCodeCamp - </small>
              <Link
                type="button"
                onClick={() => {
                  window.open("https://www.freecodecamp.org/", "_blank");
                }}
                className="font-serif text-2xl text-sky-600 hover:text-orange-600 p-0 m-0"
              >
                Visit Site
              </Link>
            </li>
            <li className="font-serif text-2xl p-0 m-0">
              Daily Login Streak
              <br />
              Longest : {`${localStorage.getItem("longestStreak")}`}, Current :{" "}
              {`${localStorage.getItem("currentStreak")}`}
            </li>
          </ol>
          <ol className="text-left p-3">
            <small className="font-bold  font-serif">Note:</small>
            <li className="font-serif m-0">
              Mark progress as Done, when completed the current task and have
              practiced with your own examples and learnt from many other
              resources(Youtube, Other Blogs....).
            </li>
            <li className="font-serif m-0">
              Ask current task topics in many ways in{" "}
              <small className="font-bold  font-serif">ChatGPT</small>, Learn
              from there and go through provided resources.
            </li>
            <li className="font-serif m-0">
              Login if you are logged out of FreeCodeCamp.
            </li>
          </ol>
        </div>
        <Link
          to={"/jobs"}
          className="mt-5 rounded-md flex flex-row items-center justify-center bg-gray-800 w-[5em] py-2 px-2 text-3xl font-medium text-white shadow-sm
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Job Board
        </Link>
      </div>
    );
  };

  const currentTips = () => {
    return (
      <>
        <small className="font-serif text-2xl text-center mx-auto">
          Tips:{" "}
        </small>
        <ol>
          {tips[selectedTaskKey]?.map((tip, tipIndex) => (
            <li className="font-serif text-left p-0 m-0" key={tipIndex}>
              {tip}
            </li>
          ))}
        </ol>
      </>
    );
  };

  const currentResources = () => {
    return (
      <>
        <small className="font-serif text-2xl text-center mx-auto">
          Resources:{" "}
        </small>
        <ol>
          {resources[selectedTaskKey]?.map((resource, rIndex) => {
            return (
              <li className="font-serif text-left p-0 m-0" key={rIndex}>
                {resource.name} -{" "}
                <a
                  href={resource.link}
                  className="text-orange-700 hover:text-blue-500 font-serif"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </li>
            );
          })}
        </ol>
      </>
    );
  };

  const editProgress = async () => {
    const data = {
      talentId,
      key: selectedTaskKey,
      progress: progressChange,
      skill,
      points: selectedTaskPoints,
    };
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/talent/progress/change/`,
        data,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setCurrentProgress(progressChange);
        setProgressChange("");
        setGetCompletedPathsBool(true);
        setGetProgressBool(true);
        setLoading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  const saveLang = async () => {
    const data = { talentId, lang: selectLang };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/save/choices/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCurrentLang(selectLang);
        setSelectLang("");
        setGetPathBool(true);
        setLoading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  const saveTrack = async () => {
    const data = { talentId, track: selectTrack };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/save/choices/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setCurrentTrack(selectTrack);
        setSelectTrack("");
        setGetPathBool(true);
        setLoading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  const chooseFunc = () => {
    if (selectedTaskKey === "32") {
      return (
        <div className="flex flex-row space-x-2 items-center">
          <Select
            value={selectLang || currentLang}
            className="w-[10em]"
            onChange={(e) => {
              setSelectLang(e);
            }}
            style={{ textAlign: "center" }}
          >
            <Select.Option value="javascript">
              <small className="font-serif text-2xl text-center mx-auto">
                JavaScript
              </small>
            </Select.Option>
            <Select.Option value="python">
              <small className="font-serif text-2xl text-center mx-auto">
                Python
              </small>
            </Select.Option>
            <Select.Option value="java">
              <small className="font-serif text-2xl text-center mx-auto">
                Java
              </small>
            </Select.Option>
          </Select>
          {selectLang && selectLang !== currentLang ? (
            <div className="flex flex-row items-center justify-end">
              {loading ? (
                <Spin indicator={antIcon} />
              ) : (
                <button
                  className="text-sky-600 bg-transparent hover:bg-transparent p-0 m-0 font-serif font-medium text-2xl text-right  hover:text-orange-600 underline "
                  onClick={() => {
                    setLoading(true);
                    saveLang();
                  }}
                >
                  Save
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else if (selectedTaskKey === "84") {
      return (
        <div className="flex flex-row space-x-2 items-center">
          <Select
            value={selectTrack || currentTrack}
            className="w-[10em]"
            onChange={(e) => {
              setSelectTrack(e);
            }}
            style={{ textAlign: "center" }}
          >
            <Select.Option value="frontend">
              <small className="font-serif text-2xl text-center mx-auto">
                Frontend
              </small>
            </Select.Option>
            <Select.Option value="backend">
              <small className="font-serif text-2xl text-center mx-auto">
                Backend
              </small>
            </Select.Option>
            <Select.Option value="fullstack">
              <small className="font-serif text-2xl text-center mx-auto">
                FullStack
              </small>
            </Select.Option>
          </Select>
          {selectTrack && selectTrack !== currentTrack ? (
            <div className="flex flex-row items-center justify-end">
              {loading ? (
                <Spin indicator={antIcon} />
              ) : (
                <button
                  className="text-sky-600 bg-transparent hover:bg-transparent p-0 m-0 font-serif font-medium text-2xl text-right  hover:text-orange-600 underline "
                  onClick={() => {
                    setLoading(true);
                    saveTrack();
                  }}
                >
                  Save
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return;
    }
  };

  if (accessToken) {
    return (
      <>
        {notAuthorised ? <Logout /> : null}
        <Navbar />
        <Toaster
          containerStyle={{ zIndex: 99999 }}
          position="top-center"
          reverseOrder="false"
        ></Toaster>
        <section className="mt-24  text-black flex flex-col">
          <div className="flex  md:flex-row md:h-[39em] flex-col m-2 w-full md:w-[98%] mx-auto">
            <div className="w-[98%] mx-auto ">
              <div className="bg-white rounded-lg">
                <div className="flex flex-col md:flex-row ">
                  <div className="md:w-[40%] max-h-[39em] md:h-[39em] overflow-auto">
                    <div className="flex flex-row justify-center space-x-10  mt-3">
                      <strong className="font-sans text-2xl">
                        Learning Path
                      </strong>
                    </div>
                    <hr className="w-[70%] mx-auto m-3" />
                    <div className="md:w-[90%] mx-auto mt-5 text-left  overflow-auto">
                      <TreeView talentId={tId} />
                    </div>
                    <div className="h-10"></div>
                  </div>
                  <div className="mx-auto w-full md:w-[60%] p-5 bg-stone-200 max-h-[39em] md:h-[39em] overflow-auto">
                    <div>
                      {showTreeData && selectedTaskName ? (
                        <div className=" md:w-[80%]  md:h-[80%] m-auto space-y-10 ">
                          <div className="flex flex-col items-start space-y-10">
                            <small className=" grid grid-cols-2 justify-items-start ">
                              <small className="text-left text-2xl font-serif">
                                Task:{" "}
                                <strong className="font-sans">
                                  {selectedTaskName}
                                </strong>
                              </small>
                            </small>
                            <div className="flex flex-row space-x-2 items-start">
                              <div className="flex flex-col space-y-10">
                                <div className="text-left">
                                  <Link className="font-serif text-2xl p-0 m-0">
                                    Progress:
                                  </Link>
                                </div>
                                <div className="text-left">
                                  <Link className="font-serif text-2xl p-0 m-0">
                                    Skill:
                                  </Link>
                                </div>
                                <div className="text-left">
                                  <Link className="font-serif text-2xl p-0 m-0">
                                    Points:
                                  </Link>
                                </div>
                                {selectedTaskKey === "32" ||
                                  selectedTaskKey === "84" ? (
                                  <div className="text-left">
                                    <Link className="font-serif text-2xl p-0 m-0">
                                      Choose:
                                    </Link>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="flex flex-col space-y-10 w-[15em]">
                                <div className="flex flex-row space-x-2 items-center">
                                  <Select
                                    value={progressChange || currentProgress}
                                    className="w-[10em]"
                                    onChange={(e) => {
                                      setProgressChange(e);
                                    }}
                                    style={{ textAlign: "center" }}
                                  >
                                    <Select.Option value={"todo"}>
                                      <small className="font-serif text-2xl text-center mx-auto">
                                        TODO
                                      </small>
                                    </Select.Option>
                                    <Select.Option value={"done"}>
                                      <small className="font-serif text-2xl text-center mx-auto">
                                        DONE
                                      </small>
                                    </Select.Option>
                                  </Select>
                                  {progressChange &&
                                    progressChange !== currentProgress ? (
                                    <div>
                                      {loading ? (
                                        <Spin indicator={antIcon} />
                                      ) : (
                                        <Link
                                          className="font-serif text-2xl text-sky-600 hover:text-orange-600 underline p-0 m-0"
                                          onClick={() => {
                                            setLoading(true);
                                            editProgress();
                                          }}
                                        >
                                          Save
                                        </Link>
                                      )}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="flex flex-row space-x-2 items-center">
                                  {skill && skillSet ? (
                                    <Select
                                      className="w-[10em]"
                                      value={skill}
                                      style={{ textAlign: "center" }}
                                    >
                                      <Select.Option value={skill}>
                                        <small className="font-serif text-2xl text-center mx-auto">
                                          {skillSet.filter(
                                            (item) =>
                                              item.toLowerCase() === skill
                                          )}
                                        </small>
                                      </Select.Option>
                                    </Select>
                                  ) : (
                                    <Select className="w-[10em]" value={skill}>
                                      <Select.Option
                                        value={skill}
                                      ></Select.Option>
                                    </Select>
                                  )}
                                  <div></div>
                                </div>
                                <div className="flex flex-row space-x-2 items-center">
                                  {selectedTaskPoints ? (
                                    <Select
                                      className="w-[10em]"
                                      value={selectedTaskPoints}
                                      style={{ textAlign: "center" }}
                                    >
                                      <Select.Option value={selectedTaskPoints}>
                                        <small className="font-serif text-2xl text-center mx-auto">
                                          {selectedTaskPoints}
                                        </small>
                                      </Select.Option>
                                    </Select>
                                  ) : (
                                    ""
                                  )}
                                  <div></div>
                                </div>
                                {chooseFunc()}
                              </div>
                            </div>
                          </div>
                          <pre className="font-serif text-left">
                            {currentTips()}
                          </pre>
                          <pre className="font-serif text-left">
                            {currentResources()}
                          </pre>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {statsRenderer()}
          </div>
          <div className="md:m-0 m-2">
            <div className="flex md:flex-row bg-white rounded-lg flex-col mx-auto w-full md:w-[98%]">
              <div className="md:w-[29%] rounded-l-lg bg-stone-200">
                <div className="flex flex-col space-y-3 p-2">
                  <strong className="text-center">Level</strong>
                  <SkillTable
                    currentLang={currentLang}
                    currentTrack={currentTrack}
                    levelProgress={levelProgress}
                  />
                </div>
              </div>
              <div className="w-[71%]">
                <div className="flex flex-col space-y-3 p-2">
                  <strong className="text-center">Progress</strong>
                  <StepProgress />
                </div>
              </div>
            </div>
          </div>
        </section>
        <NonHomeFooter />
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default TalentDashboard;
