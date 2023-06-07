import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { Toaster, toast } from "react-hot-toast";
import { Button, Modal, Table } from "antd";
import { HiXCircle, HiCheckCircle } from "react-icons/hi";
import "../../assets/css/button.css";
import SkillTable from "../dashboard/SkillTable";
import StepProgress from "../dashboard/StepProgress";
import { useStore } from "../../store";

const UserRole = () => {
  const [rows, setRows] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [rowData, setRowData] = useState();
  const [editSuccess, setEditSuccess] = useState(false);
  const [mentor, setMentor] = useState(false);
  const [intern, setIntern] = useState(false);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isMentor, setIsMentor] = useState();
  const [isStaff, setIsStaff] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [isTalent, setIsTalent] = useState();
  const [isIntern, setIsIntern] = useState();
  const [isApprentice, setIsApprentice] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [levels, setLevels] = useState();
  const [id, setId] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const { notAuthorised, setNotAuthorised, setShowProgress, setStepsList } =
    useStore((state) => ({
      notAuthorised: state.notAuthorised,
      setNotAuthorised: state.setNotAuthorised,
      setShowProgress: state.setShowProgress,
      setStepsList: state.setStepsList,
    }));

  const handleChange = (_, filters) => {
    console.log(filters);
    setFilteredInfo(filters);
  };

  const getTalentRoles = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/staff/talent/roles`, {
        headers: { Authorization: accessToken },
      })
      .then((talentRoles) => {
        setRows(talentRoles.data);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
    setEditSuccess(false);
  };

  const getProgress = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/talent/get/all/talents/progress/`
      )
      .then((talentData) => {
        setLevels(talentData.data);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
    setEditSuccess(false);
  };

  const editTalentRole = async (event) => {
    event.preventDefault();
    const data = {
      id: rowData.key,
      isIntern,
      isApprentice,
      isTalent,
      isMentor,
      isStaff,
      isAdmin,
    };
    await axios
      .post(`${process.env.REACT_APP_BACKEND_API}/staff/talent/roles/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      })
      .then((success) => {
        setEditSuccess(true);
        setOpenEdit(false);
        toast.success(success.data.message);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
    setStaff(false);
    setIntern(false);
    setAdmin(false);
    setMentor(false);
  };

  const editRenderer = () => {
    return (
      <form id="feedbackForm" className="w-[10em]">
        <div className="font-serif flex flex-row text-left justify-between ">
          <small className="w-[7em] text-left text-2xl font-serif">
            Talent
          </small>
          <small>:</small>
          <input
            type="checkbox"
            id="talent"
            name="talent"
            checked={intern ? isTalent : rowData?.isTalent}
            onChange={(e) => {
              setIsTalent(e.target.checked);
              setIntern(true);
            }}
          ></input>
        </div>
        <div className="font-serif flex flex-row justify-between text-left ">
          <small className="w-[7em] text-left text-2xl font-serif">
            Mentor{" "}
          </small>
          <small>:</small>
          <input
            type="checkbox"
            id="talent"
            name="talent"
            checked={mentor ? isMentor : rowData?.isMentor}
            onChange={(e) => {
              setIsMentor(e.target.checked);
              setMentor(true);
            }}
          ></input>
        </div>
        <div className="font-serif flex flex-row justify-between text-left ">
          <small className="w-[7em] text-left text-2xl font-serif">
            Intern{" "}
          </small>
          <small>:</small>
          <input
            type="radio"
            id="apprentice"
            name="options"
            checked={isIntern || rowData?.isIntern}
            value="intern"
            onChange={(e) => {
              setIsIntern(e.target.checked);
              setIsApprentice(!e.target.checked);
            }}
          />
        </div>
        <div className="font-serif flex flex-row justify-between text-left ">
          <small className="w-[7em] text-left text-2xl font-serif">
            Apprentice{" "}
          </small>
          <small>:</small>
          <input
            type="radio"
            id="intern"
            name="options"
            checked={isApprentice || rowData?.isApprentice}
            value="apprentice"
            onChange={(e) => {
              setIsApprentice(e.target.checked);
              setIsIntern(!e.target.checked);
            }}
          />
        </div>
        {me === "isA" ? (
          <>
            <div className="font-serif flex flex-row justify-between text-left ">
              <small className="w-[7em] text-left text-2xl font-serif">
                Staff{" "}
              </small>
              <small>:</small>
              <input
                type="checkbox"
                id="intern"
                name="options"
                checked={staff ? isStaff : rowData?.isStaff}
                value="apprentice"
                onChange={(e) => {
                  setIsStaff(e.target.checked);
                  setStaff(true);
                }}
              />
            </div>
            <div className="font-serif flex flex-row justify-between text-left ">
              <small className="w-[7em] text-left text-2xl font-serif">
                Admin{" "}
              </small>
              <small>:</small>
              <input
                type="checkbox"
                id="intern"
                name="options"
                checked={admin ? isAdmin : rowData?.isAdmin}
                value="apprentice"
                onChange={(e) => {
                  setIsAdmin(e.target.checked);
                  setAdmin(true);
                }}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </form>
    );
  };

  useEffect(() => {
    getProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editSuccess]);

  useEffect(() => {
    getTalentRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterProps = (dataIndex, width) => ({
    width,
    responsive: ["md"],
    align: "center",
    render: (truthiness) =>
      truthiness ? (
        <small className="text-2xl text-green-600 text-center items-center justify-center flex font-serif">
          <HiCheckCircle />
        </small>
      ) : (
        <small className="text-2xl text-red-600 text-center items-center justify-center flex font-serif">
          <HiXCircle />
        </small>
      ),
    filters: [
      {
        text: "True",
        value: true,
      },
      {
        text: "False",
        value: false,
      },
    ],
    filteredValue: filteredInfo[dataIndex] || null,
    onFilter: (value, record) => record[dataIndex] === value,
  });

  let columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <small className="font-medium text-xl">{text}</small>,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text) => <small className="font-medium text-xl">{text}</small>,
    },
    {
      title: "Active",
      dataIndex: "isActive",
      ...filterProps("isActive", 70),
    },
    {
      title: "Talent",
      dataIndex: "isTalent",
      ...filterProps("isTalent", 70),
    },
    {
      title: "Mentor",
      dataIndex: "isMentor",
      ...filterProps("isMentor", 75),
    },
    {
      title: "Intern",
      dataIndex: "isIntern",
      ...filterProps("isIntern", 70),
    },
    {
      title: "Apprentice",
      dataIndex: "isApprentice",
      ...filterProps("isApprentice", 100),
    },
  ];

  const actionObj = {
    title: "Action",
    dataIndex: "id",
    align: "center",
    width: 90,
    render: (text, _) => (
      <Link
        className="font-medium text-xl text-sky-600"
        onClick={() => {
          if (!openEdit) {
            setRowData(_);
            setOpenEdit(true);
          }
        }}
      >
        Edit
      </Link>
    ),
  };

  if (me === "isA") {
    columns.push(
      {
        title: "Staff",
        dataIndex: "isStaff",
        ...filterProps("isStaff", 70),
      },
      {
        title: "Admin",
        dataIndex: "isAdmin",
        ...filterProps("isAdmin", 70),
      },
      actionObj
    );
  }

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-600 hover:text-sky-500 ">{symbol}</small>
  );

  const expandRender = (record) => (
    <div className="fex flex-col space-y-2 text-center">
      <strong>Stats</strong>
      <div className="flex md:flex-row md:space-x-10 flex-col text-left justify-center items-center">
        <small>
          Total Level :{" "}
          {levels?.[record.key]?.levelProgress?.total?.level
            ? levels?.[record.key]?.levelProgress?.total?.level
            : "Null"}
        </small>
        <small>Longest Streak : {record.longestStreak}</small>
        <small>Current Streak : {record.currentStreak}</small>
        <small>Last Login : {record.lastLogin}</small>
        <small>Date of Join : {record.dateOfJoin.substr(0, 10)}</small>
        <small>
          Language :{" "}
          {levels?.[record.key]?.lang
            ? levels?.[record.key]?.lang?.[0]?.toUpperCase() +
              levels?.[record.key]?.lang?.slice(1)
            : "Not Selected"}
        </small>
        <small>
          Track :{" "}
          {levels?.[record.key]?.track
            ? levels?.[record.key]?.track?.[0]?.toUpperCase() +
              levels?.[record.key]?.track?.slice(1)
            : "Not Selected"}
        </small>
      </div>
      <div className="flex md:flex-row md:space-x-5 flex-col md:space-y-0 space-y-3 justify-center items-center">
        <div className="flex flex-row space-x-2">
          <strong>Level Details - </strong>
          <Link
            className="text-2xl text-sky-600 underline font-serif"
            onClick={() => {
              setModalOpen(true);
              setId(record.key);
            }}
          >
            See
          </Link>
        </div>
        <div className="flex flex-row space-x-2">
          <strong>Progress - </strong>
          <Link
            onClick={async () => {
              toast("Fetching....");
              await axios
                .get(
                  `${process.env.REACT_APP_BACKEND_API}/talent/get/steps/?talentId=${record.key}`
                )
                .then((talentData) => {
                  setStepsList(talentData.data);
                  setShowProgress(true);
                  setModal3Open(true);
                })
                .catch((err) => {
                  if (err.response.status === 401) {
                    setNotAuthorised(true);
                  } else {
                    toast.error(err.response.data.message);
                  }
                });
            }}
            className="text-2xl text-sky-600 underline font-serif"
          >
            See
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="#userRole">
      {notAuthorised ? <Logout /> : null}
      <Toaster
        containerStyle={{ zIndex: 99999 }}
        position="top-center"
        reverseOrder="false"
      ></Toaster>
      <section style={{}} className="mt-5 w-[98%] mx-auto">
        <Modal
          mask={false}
          title="Level"
          okButtonProps={{ className: "text-white bg-black" }}
          closable={false}
          centered
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          width={320}
          maskClosable={false}
          footer={[
            <Button
              key="cancel"
              onClick={() => setModalOpen(false)}
              className="hover:!bg-transparent"
            >
              Close
            </Button>,
          ]}
        >
          <div className="w-[20em]">
            <SkillTable
              currentLang={levels?.[id]?.lang}
              currentTrack={levels?.[id]?.track}
              levelProgress={levels?.[id]?.levelProgress}
            />
          </div>
        </Modal>
        <Modal
          mask={false}
          okButtonProps={{ className: "text-white bg-black" }}
          closable={false}
          centered
          open={modal3Open}
          width={1000}
          maskClosable={false}
          footer={[
            <Button
              key="cancel"
              onClick={() => {
                setModal3Open(false);
                setShowProgress(false);
              }}
              className="hover:!bg-transparent mt-14"
            >
              Close
            </Button>,
          ]}
        >
          <div className="text-2xl h-[26em] font-serif">
            <StepProgress />
          </div>
        </Modal>
        <div className="bg-white rounded-lg">
          <Table
            columns={columns}
            pagination={{
              pageSize: 10,
              showSizeChanger: false,
              nextIcon: nextPrevIcon(">"),
              prevIcon: nextPrevIcon("<"),
              jumpPrevIcon: nextPrevIcon("<<"),
              jumpNextIcon: nextPrevIcon(">>"),
            }}
            scroll={{
              y: 387,
            }}
            onChange={handleChange}
            expandable={{
              expandedRowRender: expandRender,
              expandIcon: ({ expanded, onExpand, record }) => (
                <Link
                  className="text-sky-600 text-xl"
                  onClick={(e) => onExpand(record, e)}
                >
                  {expanded ? "-" : "+"}
                </Link>
              ),
              // rowExpandable: (record) => record.name !== "Not Expandable",
            }}
            dataSource={rows}
            size="small"
          />
          <Modal
            mask={false}
            title="Edit Role"
            closable={false}
            centered
            open={openEdit}
            onCancel={() => {
              setOpenEdit(false);
              setRowData(null);
            }}
            onOk={editTalentRole}
            okText={<small>Submit</small>}
            width={200}
            cancelButtonProps={{
              className: "hover:!bg-transparent",
            }}
            maskClosable={false}
          >
            {editRenderer()}
          </Modal>
        </div>
      </section>
    </section>
  );
};

export default UserRole;
