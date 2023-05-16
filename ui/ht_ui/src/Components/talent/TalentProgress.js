import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactLoading from "react-loading";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Logout from "../Logout";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { Button, Modal } from "antd";
import SkillTable from "../dashboard/SkillTable";
import StepProgress from "../dashboard/StepProgress";

const List = () => {
  const accessToken = localStorage.getItem("accessToken");

  const { notAuthorised, setNotAuthorised, setShowProgress, setStepsList } =
    useStore((state) => ({
      notAuthorised: state.notAuthorised,
      setNotAuthorised: state.setNotAuthorised,
      setShowProgress: state.setShowProgress,
      setStepsList: state.setStepsList,
    }));

  const [status, setStatus] = React.useState(false);
  const [cStreak, setCStreak] = React.useState();
  const [lStreak, setLStreak] = React.useState();
  const [dJoin, setDJoin] = React.useState();
  const [lJoin, setLJoin] = React.useState();
  const [talents, setTalents] = React.useState([]);
  const [levels, setLevels] = React.useState();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modal3Open, setModal3Open] = React.useState(false);
  const [talentId, setTalentId] = React.useState([]);

  const getProgress = async (id) => {
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
  };

  const getTalentList = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/talent/get/talents/`)
      .then((talentData) => {
        setTalents(talentData.data);
        setStatus(true);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  React.useEffect(() => {
    getTalentList();
    getProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (accessToken) {
    if (status === false) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ReactLoading type="cylon" color="#fff" height={100} width={50} />
        </div>
      );
    } else {
      return (
        <div className="w-full">
          {notAuthorised ? <Logout /> : null}
          <Toaster
            containerStyle={{ zIndex: 99999 }}
            position="top-center"
            reverseOrder="false"
          ></Toaster>
          <div className="w-[98%] rounded-lg mt-5 mx-auto bg-white ">
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <small className="text-2xl font-semibold font-serif"></small>
                    </TableCell>
                    <TableCell align="left">
                      <h6 className="text-2xl font-semibold font-serif">
                        Name
                      </h6>
                    </TableCell>
                    <TableCell align="left">
                      <h6 className="text-2xl font-semibold font-serif">
                        Email
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Level
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Progress
                      </h6>
                    </TableCell>
                    <TableCell align="left">
                      <h6 className="text-2xl font-semibold font-serif">
                        Language
                      </h6>
                    </TableCell>
                    <TableCell align="left">
                      <h6 className="text-2xl font-semibold font-serif">
                        Track
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Streak
                      </h6>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {talents.map((talent, index) => (
                    <TableRow
                      key={talent.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        <small className="text-2xl font-serif">
                          {index + 1}
                        </small>
                      </TableCell>
                      <TableCell align="left">
                        <small className="text-2xl font-serif">
                          {talent?.name}
                        </small>
                      </TableCell>
                      <TableCell align="left">
                        <small className="text-2xl font-serif">
                          {talent?.email}
                        </small>
                      </TableCell>
                      <TableCell align="center">
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
                              className="hover:bg-transparent"
                            >
                              Cancel
                            </Button>,
                          ]}
                        >
                          <div className="w-[20em]">
                            <SkillTable
                              currentLang={
                                talentId ? levels?.[talentId]?.lang : ""
                              }
                              currentTrack={
                                talentId ? levels?.[talentId]?.track : ""
                              }
                              levelProgress={
                                talentId
                                  ? levels?.[talentId]?.levelProgress
                                  : ""
                              }
                            />
                          </div>
                        </Modal>
                        <Link
                          className="text-2xl text-sky-600 underline font-serif"
                          onClick={() => {
                            setTalentId(talent.id);
                            setModalOpen(true);
                          }}
                        >
                          See
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Modal
                          mask={false}
                          title="Progress"
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
                              className="hover:bg-transparent mt-5"
                            >
                              Cancel
                            </Button>,
                          ]}
                        >
                          <div className="text-2xl h-[26em] font-serif">
                            <StepProgress />
                          </div>
                        </Modal>
                        <Link
                          onClick={async () => {
                            toast("Fetching....");
                            await axios
                              .get(
                                `${process.env.REACT_APP_BACKEND_API}/talent/get/steps/?talentId=${talent.id}`
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
                      </TableCell>
                      <TableCell align="left">
                        <p className="text-2xl font-serif p-0 m-0">
                          {levels?.[talent.id]?.lang === "python"
                            ? "Python"
                            : levels?.[talent.id]?.lang === "javascript"
                            ? "JavaScript"
                            : levels?.[talent.id]?.lang === "java"
                            ? "Java"
                            : "Not Selected"}
                        </p>
                      </TableCell>
                      <TableCell align="left">
                        <p className="text-2xl font-serif p-0 m-0">
                          {levels?.[talent.id]?.track === "backend"
                            ? "Backend"
                            : levels?.[talent.id]?.track === "frontend"
                            ? "Frontend"
                            : levels?.[talent.id]?.track === "fullstack"
                            ? "FullStack"
                            : "Not Selected"}
                        </p>
                      </TableCell>
                      <TableCell align="center">
                        <Modal
                          mask={false}
                          title="Daily Login Streak"
                          okButtonProps={{ className: "text-white bg-black" }}
                          closable={false}
                          centered
                          open={modal2Open}
                          onCancel={() => setModal2Open(false)}
                          footer={[
                            <Button
                              key="cancel"
                              onClick={() => {
                                setCStreak("");
                                setLStreak("");
                                setDJoin("");
                                setLJoin("");
                                setModal2Open(false);
                              }}
                              className="hover:bg-transparent"
                            >
                              Cancel
                            </Button>,
                          ]}
                          width={350}
                          maskClosable={false}
                        >
                          <ol>
                            <li className="text-2xl font-serif p-0 ">
                              Current Streak: {cStreak}
                            </li>
                            <li className="text-2xl font-serif p-0">
                              Longest Streak: {lStreak}
                            </li>
                            <li className="text-2xl font-serif p-0">
                              Joined Date(mm/dd/yyyy): {dJoin}
                            </li>
                            <li className="text-2xl font-serif p-0">
                              Last Login(mm/dd/yyyy): {lJoin}
                            </li>
                          </ol>
                        </Modal>
                        <Link
                          className="text-2xl text-sky-600 underline font-serif"
                          onClick={() => {
                            setCStreak(talent.currentStreak);
                            setLStreak(talent.longestStreak);
                            setDJoin(talent.dateOfJoin);
                            setLJoin(talent.lastLogin);
                            setModal2Open(true);
                          }}
                        >
                          See
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      );
    }
  } else {
    window.location.href = "/";
  }
};

export default List;
