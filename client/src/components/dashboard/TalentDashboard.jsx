import { Select } from "antd";
import TreeView from "../treeView";
import axios from "axios";
import { Link } from "react-router-dom";
import SkillTable from "./SkillTable";
import StepProgress from "./StepProgress";
import Loader from "../loader";
import { useEffect, useState } from "react";
import useStore from "../../../store";
import useCustomMessage from "../../hooks/useCustomMessage";

const TalentDashboard = () => {
  const accessToken = localStorage.getItem("accessToken");
  const tId = localStorage.getItem("tId");

  if (!accessToken) {
    window.location.href = "/";
  }

  const {
    showTreeData,
    selectedTaskName,
    skill,
    skillSet,
    tips,
    resources,
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

  const [loading, setLoading] = useState(false);
  const { error, success, contextHolder } = useCustomMessage();

  const getProgress = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_API
        }/talent/get/progress/?talentId=${talentId}`
      )
      .then((talentData) => {
        setLevelProgress(talentData.data.levelProgress);
        setGetProgressBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : error(err.response.data.message)
      );
  };

  useEffect(() => {
    if (talentId) {
      getProgress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProgressBool, talentId]);

  useEffect(() => {
    setTalentId(tId);
    setPtiD(tId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentTips = () => {
    return (
      <>
        <strong className="text-sm">Tips: </strong>
        {tips[selectedTaskKey]?.map((tip, tipIndex) => (
          <p className="rounded-md border-2 m-1 p-1 text-sm" key={tipIndex}>
            * {tip}
          </p>
        ))}
      </>
    );
  };

  const currentResources = () => {
    return (
      <>
        <strong className="text-sm">Resources: </strong>
        {resources[selectedTaskKey]?.map((resource, rIndex) => {
          return (
            <p className="rounded-md border-2 m-1 p-1 text-sm" key={rIndex}>
              * {resource.name} -{" "}
              <a
                href={resource.link}
                aria-label={resource + "Link"}
                className="hover:text-sky-700 underline text-sm p-0 m-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </p>
          );
        })}
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
        `${import.meta.env.VITE_BACKEND_API}/talent/progress/change/`,
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
        success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          error(err.response.data.message);
        }
      });
  };

  const saveLang = async () => {
    const data = { talentId, lang: selectLang };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/save/choices/`, data, {
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
        success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          error(err.response.data.message);
        }
      });
  };

  const saveTrack = async () => {
    const data = { talentId, track: selectTrack };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/save/choices/`, data, {
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
        success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          error(err.response.data.message);
        }
      });
  };

  const chooseFunc = () => {
    if (selectedTaskKey === "32") {
      return (
        <div className="flex flex-col gap-2 items-center">
          <Select
            value={selectLang || currentLang}
            className="w-[10em]"
            onChange={(e) => {
              setSelectLang(e);
            }}
            style={{ textAlign: "center" }}
          >
            <Select.Option value="javascript">
              <small>JavaScript</small>
            </Select.Option>
            <Select.Option value="python">
              <small>Python</small>
            </Select.Option>
            <Select.Option value="java">
              <small>Java</small>
            </Select.Option>
          </Select>
          {selectLang && selectLang !== currentLang ? (
            <div className="flex flex-row items-center justify-end">
              {loading ? (
                <Loader />
              ) : (
                <button
                  className="hover:text-sky-700 underline text-sm p-0 m-0"
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
            <br />
          )}
        </div>
      );
    } else if (selectedTaskKey === "84") {
      return (
        <div className="flex flex-col gap-2 items-center">
          <Select
            value={selectTrack || currentTrack}
            className="w-[10em]"
            onChange={(e) => {
              setSelectTrack(e);
            }}
            style={{ textAlign: "center" }}
          >
            <Select.Option value="frontend">
              <small>Frontend</small>
            </Select.Option>
            <Select.Option value="backend">
              <small>Backend</small>
            </Select.Option>
            <Select.Option value="fullstack">
              <small>FullStack</small>
            </Select.Option>
          </Select>
          {selectTrack && selectTrack !== currentTrack ? (
            <div className="flex flex-row items-center justify-end">
              {loading ? (
                <Loader />
              ) : (
                <button
                  className="hover:text-sky-700 underline text-sm p-0 m-0"
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
            <br />
          )}
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      <section className="flex flex-col">
        {contextHolder}
        <p className="text-center text-sm p-3 mx-auto text-white bg-sky-800 w-full">
          <strong>Note: </strong>
          Mark progress as Done, when completed the current task and have
          practiced with your own examples and learnt from many other
          resources(Youtube, Other Blogs....). Ask current task topics in many
          ways in <strong>ChatGPT</strong>, Learn from there and go through
          provided resources. Login if you are logged out of FreeCodeCamp.
        </p>
        <div className="flex md:flex-row md:min-h-[39em] flex-col w-full">
          <div className="bg-white rounded-lg w-full">
            <div className="flex flex-col md:flex-row ">
              <div className="md:w-[30%] min-h-[39em] md:min-h-[39em] overflow-auto">
                <div className="flex flex-row justify-center space-x-10  mt-3">
                  <strong>Learning Path</strong>
                </div>
                <div className="mt-5 px-3">
                  <TreeView talentId={tId} />
                </div>
                <div className="h-10"></div>
              </div>
              <div className="mx-auto w-full md:w-[70%] p-5 min-h-[39em] md:min-h-[39em] overflow-auto">
                <div>
                  {showTreeData && selectedTaskName ? (
                    <div className="md:min-h-[80%]">
                      <div className="flex flex-col items-start gap-2">
                        <small className=" grid grid-cols-2 justify-items-start ">
                          <p className="text-left">
                            Task:{" "}
                            <strong className="font-sans">
                              {selectedTaskName}
                            </strong>
                          </p>
                        </small>
                        <div className="flex flex-row space-x-2 items-start">
                          <div className="flex flex-wrap gap-2 items-center justify-center">
                            <div className="flex-col">
                              <small>Progress:</small>
                              <div className="flex flex-col gap-2 items-center">
                                <Select
                                  value={progressChange || currentProgress}
                                  className="w-[10em]"
                                  onChange={(e) => {
                                    setProgressChange(e);
                                  }}
                                  style={{ textAlign: "center" }}
                                >
                                  <Select.Option value={"todo"}>
                                    <small className="text-center">TODO</small>
                                  </Select.Option>
                                  <Select.Option value={"done"}>
                                    <small className="text-center">DONE</small>
                                  </Select.Option>
                                </Select>
                                {progressChange &&
                                progressChange !== currentProgress ? (
                                  <div>
                                    {loading ? (
                                      <Loader />
                                    ) : (
                                      <Link
                                        className="hover:text-sky-700 underline text-sm p-0 m-0"
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
                                  <br />
                                )}
                              </div>
                            </div>
                            <div className="text-left">
                              <small>Skill:</small>
                              <div className="flex flex-col gap-2 items-center">
                                {skill && skillSet ? (
                                  <Select
                                    className="w-[10em]"
                                    value={skill}
                                    style={{ textAlign: "center" }}
                                  >
                                    <Select.Option value={skill}>
                                      <small className="text-center">
                                        {skillSet.filter(
                                          (item) => item.toLowerCase() === skill
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
                                <br />
                              </div>
                            </div>
                            <div className="text-left">
                              <small>Points:</small>
                              <div className="flex flex-col gap-2 items-center">
                                {selectedTaskPoints ? (
                                  <Select
                                    className="w-[10em]"
                                    value={selectedTaskPoints}
                                    style={{ textAlign: "center" }}
                                  >
                                    <Select.Option value={selectedTaskPoints}>
                                      <small className="text-center">
                                        {selectedTaskPoints}
                                      </small>
                                    </Select.Option>
                                  </Select>
                                ) : (
                                  ""
                                )}
                                <br />
                              </div>
                            </div>
                            {selectedTaskKey === "32" ||
                            selectedTaskKey === "84" ? (
                              <div className="text-left">
                                <small>Choose:</small>
                                {chooseFunc()}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div>{currentTips()}</div>
                      <div>{currentResources()}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-start items-center justify-center">
          <div className="flex flex-col md:w-[30%] w-full space-y-3 p-2 items-center justify-center">
            <strong className="text-center text-2xl text-sky-700">Level</strong>
            <div className="rounded-md border-2 w-full min-h-[25rem]">
              <SkillTable
                currentLang={currentLang}
                currentTrack={currentTrack}
                levelProgress={levelProgress}
              />
            </div>
          </div>
          <div className="flex flex-col md:w-[70%] space-y-3 p-2 h-full items-center justify-center">
            <strong className="text-center text-2xl text-sky-700">
              Progress
            </strong>
            <StepProgress />
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentDashboard;
