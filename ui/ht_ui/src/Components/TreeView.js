import { Input, Tree, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const TreeView = (props) => {
  const {
    completedPaths,
    setCompletedPaths,
    setCurrentProgress,
    setSelectedTaskName,
    treeData,
    setTreeData,
    setItd,
    setTips,
    setResources,
    setNotAuthorised,
    setGetPathBool,
    getPathBool,
    itd,
    setSelectedTaskKey,
    setShowTreeData,
    newPathName,
    setNewPathName,
    points,
    setSelectedTaskPoints,
    setSkill,
    taskSkills,
    setSkillSet,
    setGetSkillBool,
    setTaskSkills,
    setGetTipBool,
    setGetResourceBool,
    setGetPointBool,
    setPoints,
    getSkillBool,
    getTipBool,
    getResourceBool,
    getPointBool,
    setGetCompletedPathsBool,
    getCompletedPathsBool,
    setCurrentLang,
    setCurrentTrack,
    setStepsList,
    setShowProgress,
  } = useStore((state) => ({
    completedPaths: state.completedPaths,
    setCompletedPaths: state.setCompletedPaths,
    setCurrentProgress: state.setCurrentProgress,
    setSelectedTaskName: state.setSelectedTaskName,
    treeData: state.treeData,
    setTreeData: state.setTreeData,
    setItd: state.setItd,
    setTips: state.setTips,
    setResources: state.setResources,
    setNotAuthorised: state.setNotAuthorised,
    setGetPathBool: state.setGetPathBool,
    getPathBool: state.getPathBool,
    itd: state.itd,
    setSelectedTaskKey: state.setSelectedTaskKey,
    setShowTreeData: state.setShowTreeData,
    newPathName: state.newPathName,
    setNewPathName: state.setNewPathName,
    points: state.points,
    setSelectedTaskPoints: state.setSelectedTaskPoints,
    setSkill: state.setSkill,
    taskSkills: state.taskSkills,
    setSkillSet: state.setSkillSet,
    setGetSkillBool: state.setGetSkillBool,
    setTaskSkills: state.setTaskSkills,
    setGetTipBool: state.setGetTipBool,
    setGetResourceBool: state.setGetResourceBool,
    setGetPointBool: state.setGetPointBool,
    setPoints: state.setPoints,
    getSkillBool: state.getSkillBool,
    getTipBool: state.getTipBool,
    getResourceBool: state.getResourceBool,
    getPointBool: state.getPointBool,
    setGetCompletedPathsBool: state.setGetCompletedPathsBool,
    getCompletedPathsBool: state.getCompletedPathsBool,
    setCurrentLang: state.setCurrentLang,
    setCurrentTrack: state.setCurrentTrack,
    setStepsList: state.setStepsList,
    setShowProgress: state.setShowProgress,
  }));

  const [expandedKeys] = useState(["1"]);
  const me = localStorage.getItem("me");
  const accessToken = localStorage.getItem("accessToken");
  const talentId = props.talentId;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modal1Open, setModal1Open] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const getLearningPath = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/learning/path/?talentId=${talentId}`
      )
      .then((pathData) => {
        setTreeData(pathData.data.treeData);
        setItd(pathData.data.itd);
        setTips(pathData.data.tips);
        setResources(pathData.data.resources);
        setGetPathBool(false);
        setCurrentLang(pathData.data.lang);
        setCurrentTrack(pathData.data.track);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getSteps = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/steps/?talentId=${talentId}`
      )
      .then((talentData) => {
        setStepsList(talentData.data);
        setCompletedPaths(talentData.data.completedPaths);
        setShowProgress(true);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getSkills = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/talent/get/skills/`)
      .then((skills) => {
        setSkillSet(skills.data.skillSet);
        setGetSkillBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getCompletedPaths = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/completedPaths/?talentId=${talentId}`
      )
      .then((completedPaths) => {
        setCompletedPaths(completedPaths.data.completedPaths);
        setGetCompletedPathsBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getTips = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/tips/?talentId=${talentId}`
      )
      .then((tips) => {
        setTips(tips.data.tips);
        setGetTipBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getTaskSkills = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/taskSkills/?talentId=${talentId}`
      )
      .then((taskSkills) => {
        setTaskSkills(taskSkills.data.taskSkills);
        setGetSkillBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getResources = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/resources/?talentId=${talentId}`
      )
      .then((resources) => {
        setResources(resources.data.resources);
        setGetResourceBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const getPoints = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/points/?talentId=${talentId}`
      )
      .then((points) => {
        setPoints(points.data.points);
        setGetPointBool(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const editPathApi = async () => {
    const data = { talentId, treeData };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/edit/path/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setGetPathBool(true);
        setItd(treeData);
        setModal1Open(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        setModal1Open(false);
        if (err.response.status === 401) {
          setNotAuthorised(true);
        } else {
          toast.error(err.response.data.message);
        }
      });
  };

  useEffect(() => {
    if (talentId) {
      getLearningPath();
      getSteps();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPathBool, talentId]);

  React.useEffect(() => {
    if (talentId) {
      getSkills();
      getTaskSkills();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSkillBool, talentId]);

  React.useEffect(() => {
    if (talentId) {
      getTips();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTipBool, talentId]);

  React.useEffect(() => {
    if (talentId) {
      getResources();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getResourceBool, talentId]);

  React.useEffect(() => {
    if (talentId) {
      getPoints();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPointBool, talentId]);

  React.useEffect(() => {
    if (talentId) {
      getCompletedPaths();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCompletedPathsBool, talentId]);

  const onDrop = (info) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...treeData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 &&
      // Has children
      info.node.props.expanded &&
      // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar = [];
      let i;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setTreeData(data);
  };

  const onSelect = (keys, event) => {
    setShowTreeData(false);
    if (keys.length > 0) {
      setSelectedTaskKey(keys[0]);
      setSelectedTaskName(event?.node?.title);
      setSelectedTaskPoints(points?.[keys[0]] || "1");
      setSkill(taskSkills?.[keys[0]]);
      setCurrentProgress(completedPaths.includes(keys[0]) ? "done" : "todo");
      if (
        !Object.keys(event?.node).includes("children") ||
        event?.node?.children?.length === 0
      ) {
        setShowTreeData(true);
      }
    }
  };

  const renderTitle = (node) => {
    return <span className="font-serif">{node.title}</span>;
  };

  const addPath = () => (
    <form className="flex flex-col items-center space-y-5">
      <small>
        After new path added, Learning Path Tree Structure auto updates new path
        within seconds.
      </small>
      <TextArea
        id="PATHNAME"
        onChange={(e) => setNewPathName(e.target.value)}
        className="text-xl font-serif block h-10 rounded-md "
        placeholder="New Path Name"
        autoSize
        value={newPathName || ""}
      />
    </form>
  );

  const addPathApi = async (event) => {
    event.preventDefault();
    const data = { name: newPathName, talentId };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/talent/add/path/`, data, {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setModalOpen(false);
        setLoading(false);
        setNewPathName("");
        setGetPathBool(true);
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

  return (
    <div>
      <Toaster
        containerStyle={{ zIndex: 99999 }}
        position="top-center"
        reverseOrder="false"
      ></Toaster>
      <Modal
        mask={false}
        title="Add Path"
        cancelButtonProps={{
          className: "hover:!bg-transparent",
        }}
        closable={false}
        centered
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
        }}
        width={320}
        maskClosable={false}
        onOk={(event) => {
          setLoading(true);
          addPathApi(event);
        }}
        okText={loading ? <Spin indicator={antIcon} /> : "Submit"}
      >
        {addPath()}
      </Modal>
      <Modal
        mask={false}
        title="Please wait, We are updating the path..."
        centered
        open={modal1Open}
        closable={false}
        onCancel={() => {
          setModal1Open(false);
        }}
        width={320}
        maskClosable={false}
        footer={null}
      ></Modal>
      <div className="flex flex-row justify-between">
        {me === "isT" ? (
          ""
        ) : (
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="!text-sky-600 bg-transparent hover:!bg-transparent p-0 m-0 font-serif font-medium text-2xl text-right  hover:text-orange-600 underline "
          >
            <AiOutlinePlus />
          </button>
        )}
        {JSON.stringify(itd) === JSON.stringify(treeData) &&
        modal1Open === false ? (
          ""
        ) : (
          <button
            className="text-sky-600 bg-transparent hover:!bg-transparent p-0 m-0 font-serif font-medium text-2xl text-right  hover:text-orange-600 underline "
            onClick={() => {
              setModal1Open(true);
              editPathApi();
            }}
          >
            Save Changes
          </button>
        )}
      </div>

      <Tree
        className="text-left font-serif"
        defaultExpandedKeys={expandedKeys}
        draggable={me === "isT" ? false : true}
        blockNode
        onDrop={onDrop}
        treeData={treeData}
        onSelect={onSelect}
        titleRender={renderTitle}
      />
    </div>
  );
};
export default TreeView;
