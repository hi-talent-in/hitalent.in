import axios from "axios";

import { Link } from "react-router-dom";
import TreeView from "../treeView";
import { Input, Select, Modal } from "antd";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";

import { useState } from "react";

import Loader from "../loader";
import useStore from "../../../store";
import useCustomMessage from "../../hooks/useCustomMessage";

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

  const { success, error, contextHolder } = useCustomMessage();

  const [addedTip, setAddedTip] = useState("");
  const [addedResourceName, setAddedResourceName] = useState("");
  const [addedResourceLink, setAddedResourceLink] = useState("");
  const [editTipIndex, setEditTipIndex] = useState();
  const [editTip, setEditTip] = useState();
  const [editResourceIndex, setEditResourceIndex] = useState();
  const [editResourceName, setEditResourceName] = useState();
  const [editResourceLink, setEditResourceLink] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);
  const [loading, setLoading] = useState(false);

  const addPoints = async () => {
    const data = { talentId, key: selectedTaskKey, points: currentPoints };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/add/points/`, data, {
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

  const editTaskNameApi = async (e) => {
    e.preventDefault();
    const data = {
      name: selectedNewTaskName,
      key: selectedTaskKey,
      talentId,
    };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/edit/taskName/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSelectedTaskName(selectedNewTaskName);
        setGetPathBool(true);
        setModalOpen(false);
        setLoading(false);
        setSelectedNewTaskName("");
        success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setModalOpen(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          error(err.response.data.message);
        }
      });
  };

  const editTaskName = () => (
    <TextArea
      onChange={(e) => setSelectedNewTaskName(e.target.value)}
      value={selectedNewTaskName || selectedTaskName}
      autoSize
    />
  );

  const addSkillApi = async (event) => {
    event.preventDefault();
    const data = { name: newSkill };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/add/skills/`, data, {
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

  const postSkill = () => (
    <TextArea placeholder="Skill Name" autoSize value={newSkill || ""} />
  );

  const addTaskSkill = async () => {
    const data = { talentId, key: selectedTaskKey, skill: currentSkill };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/add/taskSkill/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setGetSkillBool(true);
        setSkill(currentSkill);
        setCurrentSkill("");
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

  const postTipApi = async (type, index) => {
    const data = {
      tip: addedTip || editTip,
      key: selectedTaskKey,
      talentId,
      index,
    };
    await axios
      .post(`${import.meta.env.VITE_BACKEND_API}/talent/${type}/tips/`, data, {
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
        success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setModal2Open(false);
        setModal4Open(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          error(err.response.data.message);
        }
      });
  };

  const addTip = () => (
    <TextArea
      onChange={(e) => setAddedTip(e.target.value)}
      placeholder="Detailted Instructions or Tips"
      autoSize
      value={addedTip || ""}
    />
  );

  const editTipRenderer = () => {
    return (
      <TextArea
        onChange={(e) => setEditTip(e.target.value)}
        autoSize
        value={editTip || ""}
      />
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
        `${import.meta.env.VITE_BACKEND_API}/talent/${type}/resources/`,
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
        success(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        setModal3Open(false);
        setModal5Open(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          error(err.response.data.message);
        }
      });
  };

  const addResource = () => (
    <form className="flex flex-col items-center gap-2">
      <TextArea
        onChange={(e) => setAddedResourceName(e.target.value)}
        placeholder="Resource Name"
        autoSize
        value={addedResourceName || ""}
      />
      <TextArea
        onChange={(e) => setAddedResourceLink(e.target.value)}
        placeholder="Resource Link"
        autoSize
        value={addedResourceLink || ""}
      />
    </form>
  );

  const editResourceRenderer = () => {
    return (
      <form id="feedbackForm" className="flex flex-col items-center gap-2">
        <TextArea
          onChange={(e) => setEditResourceName(e.target.value)}
          autoSize
          value={editResourceName || ""}
        />
        <TextArea
          onChange={(e) => setEditResourceLink(e.target.value)}
          autoSize
          value={editResourceLink}
        />
      </form>
    );
  };

  if (!accessToken) {
    window.location.href = "/";
  }
  return (
    <section className="min-h-screen">
      {contextHolder}
      <div className="flex flex-col md:flex-row px-3">
        <div className="md:w-[25%] auto overflow-auto">
          <div className="flex flex-col justify-center gap-2 mt-3">
            <h3 className="mx-auto font-medium text-lg">Learning Path</h3>
            <small className="text-center">
              If you are adding or making any changes please select talent,
              <br /> by default it will be for all talents.
            </small>
          </div>
          <div className="px-3 mt-5">
            <TreeView talentId={talentId} />
          </div>
          <div className="h-10"></div>
        </div>
        <div className="mx-auto w-full md:w-[75%] p-5 h-auto">
          {showTreeData && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col items-start space-y-10">
                <div className=" flex flex-row items-center gap-2">
                  <p>
                    Task: <strong>{selectedTaskName}</strong>
                  </p>
                  <Modal
                    mask={false}
                    title="Edit Task Name"
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
                    okButtonProps={{
                      className:
                        "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
                    }}
                    okText={loading ? <Loader /> : "Submit"}
                  >
                    {editTaskName()}
                  </Modal>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-sky-600"
                  >
                    <AiOutlineEdit />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <div className="flex flex-col">
                    <p className="flex text-sm flex-row gap-1 items-center">
                      <Modal
                        mask={false}
                        title="Add Skill"
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
                        okButtonProps={{
                          className:
                            "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
                        }}
                        okText={loading ? <Loader /> : "Submit"}
                      >
                        {postSkill()}
                      </Modal>
                      <Link
                        onClick={() => setModal1Open(true)}
                        className="text-sky-600"
                      >
                        <AiOutlinePlus />
                      </Link>
                      Skill:
                    </p>
                    {skillSet && (
                      <Select
                        className="w-[10em]"
                        onChange={(e) => {
                          setCurrentSkill(e);
                        }}
                        value={currentSkill || skill || null}
                      >
                        {skillSet.map((skill, index) => (
                          <Select.Option
                            value={`${skill.toLowerCase()}`}
                            key={index}
                          >
                            <p>{skill}</p>
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                    {currentSkill && skill !== currentSkill ? (
                      <div className="flex flex-row items-center justify-end">
                        <button
                          className="hover:text-sky-700 underline h-5 text-sm"
                          onClick={() => {
                            setLoading(true);
                            addTaskSkill();
                          }}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="h-5"></div>
                    )}
                  </div>
                  <small className="flex flex-col">
                    <p className="flex text-sm flex-row gap-1 items-center">
                      Points:
                    </p>
                    <Select
                      value={currentPoints || selectedTaskPoints || "1"}
                      className="w-[10em]"
                      onChange={(e) => setCurrentPoints(e)}
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
                    {currentPoints && selectedTaskPoints !== currentPoints ? (
                      <div className="flex flex-row items-center justify-end">
                        <button
                          className="hover:text-sky-600 h-5 underline text-sm"
                          onClick={() => {
                            setLoading(true);
                            addPoints();
                          }}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="h-5"></div>
                    )}
                  </small>
                </div>
              </div>
              <br />
              <strong className="flex flex-row gap-2 items-center">
                <Modal
                  mask={false}
                  title="Add Tip/Instructions"
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
                  okButtonProps={{
                    className:
                      "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
                  }}
                  okText={loading ? <Loader /> : "Submit"}
                >
                  {addTip("add")}
                </Modal>
                <Link
                  onClick={() => {
                    setModal2Open(true);
                  }}
                  className="text-sky-600"
                >
                  <AiOutlinePlus />
                </Link>
                Tips/Instructions:
              </strong>
              <div>
                <ol>
                  {tips?.[selectedTaskKey] &&
                    tips?.[selectedTaskKey]?.map((tip, index) => (
                      <li
                        key={index}
                        className="rounded-md border-2 m-1 p-1 text-sm"
                      >
                        <div className=" flex flex-row items-center space-x-2">
                          <Modal
                            mask={false}
                            title="Edit Tip/Instructions"
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
                            okButtonProps={{
                              className:
                                "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
                            }}
                            okText={loading ? <Loader /> : "Submit"}
                          >
                            {editTipRenderer()}
                          </Modal>
                          <Link
                            className="text-sky-600"
                            onClick={() => {
                              setModal4Open(true);
                              setEditTip(tip);
                              setEditTipIndex(index);
                            }}
                          >
                            <AiOutlineEdit />
                          </Link>
                          <p> {tip} </p>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
              <strong className="flex flex-row items-center gap-2">
                <Modal
                  mask={false}
                  title="Add Resources"
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
                  okButtonProps={{
                    className:
                      "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
                  }}
                  okText={loading ? <Loader /> : "Submit"}
                >
                  {addResource()}
                </Modal>
                <Link
                  onClick={() => {
                    setModal3Open(true);
                  }}
                  className="text-sky-600"
                >
                  <AiOutlinePlus />
                </Link>
                Resources:
              </strong>
              <ol>
                {resources?.[selectedTaskKey] &&
                  resources?.[selectedTaskKey]?.map((resource, index) => (
                    <li
                      className="flex rounded-md flex-row items-center gap-1 border-2 m-1 p-1 text-sm"
                      key={index}
                    >
                      <Modal
                        mask={false}
                        title="Edit Tip/Instructions"
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
                          postResourceApi("edit", editResourceIndex);
                        }}
                        okButtonProps={{
                          className:
                            "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
                        }}
                        okText={loading ? <Loader /> : "Submit"}
                      >
                        {editResourceRenderer()}
                      </Modal>
                      <button
                        className="hover:text-sky-700 text-sky-600"
                        onClick={() => {
                          setModal5Open(true);
                          setEditResourceLink(resource.link);
                          setEditResourceName(resource.name);
                          setEditResourceIndex(index);
                        }}
                      >
                        <AiOutlineEdit />
                      </button>
                      <p>
                        {resource.name} -{" "}
                        <Link
                          to={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sky-700 underline text-sm"
                        >
                          Visit Site
                        </Link>
                      </p>
                    </li>
                  ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditableDashboard;
