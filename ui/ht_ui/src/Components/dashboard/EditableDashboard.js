import * as React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import Logout from "../Logout";
import TreeView from "../TreeView";
import { useStore } from "../../store";
import { Input, Select, Modal, Spin } from "antd";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const EditableDashboard = () => {
  const {
    talentId,
    selectedTaskName,
    setSelectedNewTaskName,
    selectedNewTaskName,
    skillSet,
    newSkill,
    setNewSkill,
    notAuthorised,
    setNotAuthorised,
    setGetPathBool,
    setGetSkillBool,
    selectedTaskKey,
    setSelectedTaskName,
    showTreeData,
    currentPoints,
    selectedTaskPoints,
    setCurrentPoints,
    setSelectedTaskPoints,
    skill,
    currentSkill,
    setCurrentSkill,
    setSkill,
    setGetPointBool,
    setGetTipBool,
    setGetResourceBool,
    tips,
    resources,
  } = useStore((state) => ({
    talentId: state.talentId,
    selectedTaskName: state.selectedTaskName,
    setSelectedNewTaskName: state.setSelectedNewTaskName,
    selectedNewTaskName: state.selectedNewTaskName,
    skillSet: state.skillSet,
    newSkill: state.newSkill,
    setNewSkill: state.setNewSkill,
    notAuthorised: state.notAuthorised,
    setNotAuthorised: state.setNotAuthorised,
    setGetPathBool: state.setGetPathBool,
    setGetSkillBool: state.setGetSkillBool,
    selectedTaskKey: state.selectedTaskKey,
    setSelectedTaskName: state.setSelectedTaskName,
    showTreeData: state.showTreeData,
    currentPoints: state.currentPoints,
    setPoints: state.setPoints,
    selectedTaskPoints: state.selectedTaskPoints,
    setCurrentPoints: state.setCurrentPoints,
    setSelectedTaskPoints: state.setSelectedTaskPoints,
    skill: state.skill,
    currentSkill: state.currentSkill,
    setCurrentSkill: state.setCurrentSkill,
    setSkill: state.setSkill,
    setTaskSkills: state.setTaskSkills,
    setGetPointBool: state.setGetPointBool,
    setGetTipBool: state.setGetTipBool,
    setGetResourceBool: state.setGetResourceBool,
    tips: state.tips,
    resources: state.resources,
  }));

  const accessToken = localStorage.getItem("accessToken");

  const [addedTip, setAddedTip] = React.useState("");
  const [addedResourceName, setAddedResourceName] = React.useState("");
  const [addedResourceLink, setAddedResourceLink] = React.useState("");
  const [editTipIndex, setEditTipIndex] = React.useState();
  const [editTip, setEditTip] = React.useState();
  const [editResourceIndex, setEditResourceIndex] = React.useState();
  const [editResourceName, setEditResourceName] = React.useState();
  const [editResourceLink, setEditResourceLink] = React.useState();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modal1Open, setModal1Open] = React.useState(false);
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modal3Open, setModal3Open] = React.useState(false);
  const [modal4Open, setModal4Open] = React.useState(false);
  const [modal5Open, setModal5Open] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const addPoints = async () => {
    const data = { talentId, key: selectedTaskKey, points: currentPoints };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/add/points/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setGetPointBool(true);
        setSelectedTaskPoints(currentPoints);
        setLoading(false);
        setCurrentPoints("");
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

  const editTaskNameApi = async (e) => {
    e.preventDefault();
    const data = {
      name: selectedNewTaskName,
      key: selectedTaskKey,
      talentId,
    };
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/talent/edit/taskName/`,
        data,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setSelectedTaskName(selectedNewTaskName);
        setGetPathBool(true);
        setModalOpen(false);
        setLoading(false);
        setSelectedNewTaskName("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setModalOpen(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  const editTaskName = () => (
    <form className="flex flex-col items-center space-y-5">
      <TextArea
        onChange={(e) => setSelectedNewTaskName(e.target.value)}
        className="text-xl font-serif block h-10 rounded-md "
        value={selectedNewTaskName || selectedTaskName}
        autoSize
      />
    </form>
  );

  const addSkillApi = async (event) => {
    event.preventDefault();
    const data = { name: newSkill };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/add/skills/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setModal1Open(false);
        setLoading(false);
        setGetSkillBool(true);
        setNewSkill("");
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

  const postSkill = () => (
    <form className="flex flex-col items-center space-y-5">
      <TextArea
        id="SKILL"
        onChange={(e) => setNewSkill(e.target.value)}
        className="text-xl font-serif block h-10 rounded-md "
        placeholder="Skill Name"
        autoSize
        value={newSkill || ""}
      />
    </form>
  );

  const addTaskSkill = async () => {
    const data = { talentId, key: selectedTaskKey, skill: currentSkill };
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/talent/add/taskSkill/`,
        data,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setGetSkillBool(true);
        setSkill(currentSkill);
        setCurrentSkill("");
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

  const postTipApi = async (type, index) => {
    const data = {
      tip: addedTip || editTip,
      key: selectedTaskKey,
      talentId,
      index,
    };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/${type}/tips/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setGetTipBool(true);
        setModal2Open(false);
        setModal4Open(false);
        setAddedTip("");
        setLoading(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setModal2Open(false);
        setModal4Open(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  const addTip = () => (
    <form className="flex flex-col items-center space-y-5">
      <TextArea
        onChange={(e) => setAddedTip(e.target.value)}
        placeholder="Detailted Instructions or Tips"
        className="text-xl font-serif w-[30em] rounded-md "
        autoSize
        value={addedTip || ""}
      />
    </form>
  );

  const editTipRenderer = () => {
    return (
      <form id="feedbackForm">
        <TextArea
          onChange={(e) => setEditTip(e.target.value)}
          className="text-xl font-serif w-[30em] rounded-md "
          autoSize
          value={editTip || ""}
        />
      </form>
    );
  };

  const postResourceApi = async (type, index) => {
    const data = {
      name: addedResourceName || editResourceName,
      link: addedResourceLink || editResourceLink,
      key: selectedTaskKey,
      talentId,
      index,
    };
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/talent/${type}/resources/`,
        data,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setGetResourceBool(true);
        setLoading(false);
        setModal3Open(false);
        setModal5Open(false);
        setAddedResourceLink("");
        setAddedResourceName("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setModal3Open(false);
        setModal5Open(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  const addResource = () => (
    <form className="flex flex-col items-center space-y-5">
      <TextArea
        onChange={(e) => setAddedResourceName(e.target.value)}
        placeholder="Resource Name"
        className="text-xl font-serif w-[30em] rounded-md text-black"
        autoSize
        value={addedResourceName || ""}
      />
      <TextArea
        onChange={(e) => setAddedResourceLink(e.target.value)}
        placeholder="Resource Link"
        className="text-xl font-serif w-[30em] rounded-md text-black"
        autoSize
        value={addedResourceLink || ""}
      />
    </form>
  );

  const editResourceRenderer = () => {
    return (
      <form id="feedbackForm" className="flex flex-col items-center space-y-5">
        <TextArea
          onChange={(e) => setEditResourceName(e.target.value)}
          className="text-xl font-serif w-[30em] rounded-md "
          autoSize
          value={editResourceName || ""}
        />
        <TextArea
          onChange={(e) => setEditResourceLink(e.target.value)}
          className="text-xl font-serif w-[30em] rounded-md "
          autoSize
          value={editResourceLink}
        />
      </form>
    );
  };

  if (accessToken) {
    return (
      <>
        {notAuthorised ? <Logout /> : null}
        <section className="mt-5 text-black">
          <Toaster
            containerStyle={{ zIndex: 99999 }}
            position="top-center"
            reverseOrder="false"
          ></Toaster>
          <div className="flex flex-col w-full md:w-[98%] mx-auto">
            <div className="w-full mx-auto ">
              <div className="bg-white  mt-0 rounded-lg ">
                <div className="flex flex-col  md:flex-row ">
                  <div className="md:w-[40%] h-[45em] overflow-auto">
                    <div className="flex flex-col justify-center space-y-5  mt-3">
                      <h3 className="font-serif mx-auto text-center font-medium text-2xl">
                        Learning Path
                      </h3>
                      <hr />
                      <small className="text-2xl text-center">
                        If you are adding or making any changes please select
                        talent, by default it will be for all talents.
                      </small>
                    </div>
                    <div className="md:w-[95%] mx-auto mt-5 text-left  overflow-auto">
                      <TreeView talentId={talentId} />
                    </div>
                    <div className="h-10"></div>
                  </div>
                  <div className="mx-auto w-full md:w-[60%] p-5 bg-stone-200 h-[45em] overflow-auto">
                    <div>
                      {showTreeData ? (
                        <div className=" md:w-[80%]  md:h-[80%] m-auto space-y-10">
                          <div className="flex flex-col items-start space-y-10">
                            <small className=" grid grid-cols-2 justify-items-start ">
                              <div className=" flex flex-row items-center ">
                                <small className="text-left text-2xl font-serif">
                                  Task:{" "}
                                  <strong className="text-2xl font-sans">
                                    {selectedTaskName}
                                  </strong>
                                </small>
                                <Modal
                                  mask={false}
                                  title="Edit Task Name"
                                  okButtonProps={{
                                    className: "text-white bg-black",
                                  }}
                                  cancelButtonProps={{
                                    className: "hover:bg-transparent",
                                  }}
                                  closable={false}
                                  centered
                                  open={modalOpen}
                                  onCancel={() => {
                                    setModalOpen(false);
                                    setSelectedNewTaskName("");
                                  }}
                                  width={320}
                                  maskClosable={false}
                                  onOk={(event) => {
                                    setLoading(true);
                                    editTaskNameApi(event);
                                  }}
                                  okText={
                                    loading ? (
                                      <Spin indicator={antIcon} />
                                    ) : (
                                      "Submit"
                                    )
                                  }
                                >
                                  {editTaskName()}
                                </Modal>
                                <Link
                                  onClick={() => setModalOpen(true)}
                                  className="text-2xl text-sky-600 font-serif text-center hover:text-orange-600 underline"
                                >
                                  <AiOutlineEdit />
                                </Link>
                              </div>
                            </small>
                            <small className=" grid grid-cols-3 gap-10 justify-items-start items-center">
                              <div className="text-2xl font-serif flex flex-row items-center">
                                <Modal
                                  mask={false}
                                  title="Add Skill"
                                  okButtonProps={{
                                    className: "text-white bg-black",
                                  }}
                                  cancelButtonProps={{
                                    className: "hover:bg-transparent",
                                  }}
                                  closable={false}
                                  centered
                                  open={modal1Open}
                                  onCancel={() => {
                                    setModal1Open(false);
                                  }}
                                  width={320}
                                  maskClosable={false}
                                  onOk={(event) => {
                                    setLoading(true);
                                    addSkillApi(event);
                                  }}
                                  okText={
                                    loading ? (
                                      <Spin indicator={antIcon} />
                                    ) : (
                                      "Submit"
                                    )
                                  }
                                >
                                  {postSkill()}
                                </Modal>
                                <Link
                                  onClick={() => setModal1Open(true)}
                                  className="font-serif text-2xl text-sky-600 hover:text-orange-600 underline"
                                >
                                  <AiOutlinePlus />
                                </Link>
                                Skill:
                              </div>
                              {skillSet ? (
                                <Select
                                  className="w-[10em]"
                                  onChange={(e) => {
                                    setCurrentSkill(e);
                                  }}
                                  value={currentSkill || skill || null}
                                  style={{ textAlign: "center" }}
                                >
                                  {skillSet.map((skill, index) => (
                                    <Select.Option
                                      value={`${skill.toLowerCase()}`}
                                      key={index}
                                    >
                                      <small className="font-serif text-2xl">
                                        {skill}
                                      </small>
                                    </Select.Option>
                                  ))}
                                </Select>
                              ) : (
                                ""
                              )}
                              {currentSkill && skill !== currentSkill ? (
                                <div className="flex flex-row items-center justify-end">
                                  <button
                                    className="text-sky-600 bg-transparent hover:bg-transparent p-0 m-0 font-serif font-medium text-2xl text-right  hover:text-orange-600 underline "
                                    onClick={() => {
                                      setLoading(true);
                                      addTaskSkill();
                                    }}
                                  >
                                    {loading ? (
                                      <Spin indicator={antIcon} />
                                    ) : (
                                      "Save"
                                    )}
                                  </button>
                                </div>
                              ) : (
                                ""
                              )}
                            </small>
                            <small className="grid grid-cols-3 gap-10 justify-items-start items-center">
                              <small className="text-2xl font-serif ">
                                Points:
                              </small>{" "}
                              <Select
                                value={
                                  currentPoints || selectedTaskPoints || "1"
                                }
                                className="w-[10em]"
                                onChange={(e) => setCurrentPoints(e)}
                                style={{ textAlign: "center" }}
                                options={[
                                  {
                                    value: "1",
                                    label: "1",
                                  },
                                  {
                                    value: "3",
                                    label: "3",
                                  },
                                  {
                                    value: "5",
                                    label: "5",
                                  },
                                  {
                                    value: "10",
                                    label: "10",
                                  },
                                  {
                                    value: "15",
                                    label: "15",
                                  },
                                  {
                                    value: "20",
                                    label: "20",
                                  },
                                ]}
                              />
                              {currentPoints &&
                              selectedTaskPoints !== currentPoints ? (
                                <div className="flex flex-row items-center justify-end">
                                  <button
                                    className="text-sky-600 bg-transparent hover:bg-transparent p-0 m-0 font-serif font-medium text-2xl text-right  hover:text-orange-600 underline "
                                    onClick={() => {
                                      setLoading(true);
                                      addPoints();
                                    }}
                                  >
                                    {loading ? (
                                      <Spin indicator={antIcon} />
                                    ) : (
                                      "Save"
                                    )}
                                  </button>
                                </div>
                              ) : (
                                ""
                              )}
                            </small>
                          </div>
                          <div className="font-serif text-left">
                            <div className="text-2xl font-serif flex flex-row items-center">
                              <Modal
                                mask={false}
                                title="Add Tip/Instructions"
                                okButtonProps={{
                                  className: "text-white bg-black",
                                }}
                                cancelButtonProps={{
                                  className: "hover:bg-transparent",
                                }}
                                closable={false}
                                centered
                                open={modal2Open}
                                onCancel={() => {
                                  setModal2Open(false);
                                }}
                                width={320}
                                maskClosable={false}
                                onOk={(event) => {
                                  setLoading(true);
                                  event.preventDefault();
                                  postTipApi("add");
                                }}
                                okText={
                                  loading ? (
                                    <Spin indicator={antIcon} />
                                  ) : (
                                    "Submit"
                                  )
                                }
                              >
                                {addTip("add")}
                              </Modal>
                              <Link
                                onClick={() => {
                                  setModal2Open(true);
                                }}
                                className="font-serif text-2xl text-sky-600 hover:text-orange-600 underline"
                              >
                                <AiOutlinePlus />
                              </Link>
                              Tips/Instructions:
                            </div>
                            <div>
                              <ol>
                                {tips?.[selectedTaskKey] &&
                                  tips?.[selectedTaskKey]?.map((tip, index) => (
                                    <li
                                      key={index}
                                      className="font-serif text-left "
                                    >
                                      <div className="font-serif text-left flex flex-row items-center space-x-2">
                                        <Modal
                                          mask={false}
                                          title="Edit Tip/Instructions"
                                          okButtonProps={{
                                            className: "text-white bg-black",
                                          }}
                                          cancelButtonProps={{
                                            className: "hover:bg-transparent",
                                          }}
                                          closable={false}
                                          centered
                                          open={modal4Open}
                                          onCancel={() => {
                                            setModal4Open(false);
                                          }}
                                          width={320}
                                          maskClosable={false}
                                          onOk={(event) => {
                                            setLoading(true);
                                            event.preventDefault();
                                            postTipApi("edit", editTipIndex);
                                          }}
                                          okText={
                                            loading ? (
                                              <Spin indicator={antIcon} />
                                            ) : (
                                              "Submit"
                                            )
                                          }
                                        >
                                          {editTipRenderer()}
                                        </Modal>
                                        <Link
                                          className="text-2xl text-sky-600 font-serif text-center hover:text-orange-600 underline"
                                          onClick={() => {
                                            setModal4Open(true);
                                            setEditTip(tip);
                                            setEditTipIndex(index);
                                          }}
                                        >
                                          <AiOutlineEdit />
                                        </Link>{" "}
                                        <small className="font-serif text-left text-2xl">
                                          {" "}
                                          {tip}{" "}
                                        </small>
                                      </div>
                                    </li>
                                  ))}
                              </ol>
                            </div>{" "}
                          </div>
                          <div className="font-serif text-left">
                            <div className="text-2xl font-serif flex flex-row items-center">
                              <Modal
                                mask={false}
                                title="Add Resources"
                                okButtonProps={{
                                  className: "text-white bg-black",
                                }}
                                cancelButtonProps={{
                                  className: "hover:bg-transparent",
                                }}
                                closable={false}
                                centered
                                open={modal3Open}
                                onCancel={() => {
                                  setModal3Open(false);
                                }}
                                width={320}
                                maskClosable={false}
                                onOk={(event) => {
                                  setLoading(true);
                                  event.preventDefault();
                                  postResourceApi("add");
                                }}
                                okText={
                                  loading ? (
                                    <Spin indicator={antIcon} />
                                  ) : (
                                    "Submit"
                                  )
                                }
                              >
                                {addResource()}
                              </Modal>
                              <Link
                                onClick={() => {
                                  setModal3Open(true);
                                }}
                                className="font-serif text-2xl text-sky-600 hover:text-orange-600 underline"
                              >
                                <AiOutlinePlus />
                              </Link>
                              Resources:
                            </div>
                            <div>
                              <ol>
                                {resources?.[selectedTaskKey] &&
                                  resources?.[selectedTaskKey]?.map(
                                    (resource, index) => (
                                      <li
                                        key={index}
                                        className="font-serif text-left"
                                      >
                                        <div className="font-serif text-left flex flex-row items-center space-x-2">
                                          <Modal
                                            mask={false}
                                            title="Edit Tip/Instructions"
                                            okButtonProps={{
                                              className: "text-white bg-black",
                                            }}
                                            cancelButtonProps={{
                                              className: "hover:bg-transparent",
                                            }}
                                            closable={false}
                                            centered
                                            open={modal5Open}
                                            onCancel={() => {
                                              setModal5Open(false);
                                            }}
                                            width={320}
                                            maskClosable={false}
                                            onOk={(event) => {
                                              setLoading(true);
                                              event.preventDefault();
                                              postResourceApi(
                                                "edit",
                                                editResourceIndex
                                              );
                                            }}
                                            okText={
                                              loading ? (
                                                <Spin indicator={antIcon} />
                                              ) : (
                                                "Submit"
                                              )
                                            }
                                          >
                                            {editResourceRenderer()}
                                          </Modal>
                                          <Link
                                            className="text-2xl text-sky-600 font-serif text-center hover:text-orange-600 underline"
                                            onClick={() => {
                                              setModal5Open(true);
                                              setEditResourceLink(
                                                resource.link
                                              );
                                              setEditResourceName(
                                                resource.name
                                              );
                                              setEditResourceIndex(index);
                                            }}
                                          >
                                            <AiOutlineEdit />
                                          </Link>
                                          <Link
                                            to={resource.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-serif text-2xl text-sky-600 hover:text-orange-600 underline"
                                          >
                                            {resource.name}
                                          </Link>
                                        </div>
                                      </li>
                                    )
                                  )}
                              </ol>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default EditableDashboard;
