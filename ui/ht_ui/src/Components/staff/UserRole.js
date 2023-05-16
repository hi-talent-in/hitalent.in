import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { Toaster, toast } from "react-hot-toast";
import { Modal } from "antd";

const UserRole = () => {
  const [rows, setRows] = React.useState([]);
  const [notAuthorised, setNotAuthorised] = React.useState(false);
  const [getSuccess, setGetSuccess] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [rowIndex, setRowIndex] = React.useState();
  const [editSuccess, setEditSuccess] = React.useState(false);
  const [isMentor, setIsMentor] = React.useState();
  const [isStaff, setIsStaff] = React.useState();
  const [isAdmin, setIsAdmin] = React.useState();
  const [isTalent, setIsTalent] = React.useState();
  const [isIntern, setIsIntern] = React.useState();
  const [isApprentice, setIsApprentice] = React.useState();

  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const getTalentRoles = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/staff/talent/roles`, {
        headers: { Authorization: accessToken },
      })
      .then((talentRoles) => {
        setRows(talentRoles.data);
        setGetSuccess(true);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const editTalentRole = async (event) => {
    event.preventDefault();
    const data = {
      id: rows[rowIndex].id,
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
  };

  const editRenderer = () => (
    <form id="feedbackForm" className="w-[10em]">
      <div className="font-serif flex flex-row text-left justify-between ">
        <small className="w-[7em] text-left text-2xl font-serif">Talent</small>
        <small>:</small>
        <input
          type="checkbox"
          id="talent"
          name="talent"
          defaultChecked={rows[rowIndex]?.isTalent}
          onChange={(e) => {
            setIsTalent(e.target.checked);
          }}
        ></input>
      </div>
      <div className="font-serif flex flex-row justify-between text-left ">
        <small className="w-[7em] text-left text-2xl font-serif">Mentor </small>
        <small>:</small>
        <input
          type="checkbox"
          id="talent"
          name="talent"
          defaultChecked={rows[rowIndex]?.isMentor}
          onChange={(e) => {
            setIsMentor(e.target.checked);
          }}
        ></input>
      </div>
      <div className="font-serif flex flex-row justify-between text-left ">
        <small className="w-[7em] text-left text-2xl font-serif">Intern </small>
        <small>:</small>
        <input
          type="radio"
          id="apprentice"
          name="options"
          defaultChecked={rows[rowIndex]?.isIntern}
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
          defaultChecked={rows[rowIndex]?.isApprentice}
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
              defaultChecked={rows[rowIndex]?.isStaff}
              value="apprentice"
              onChange={(e) => {
                setIsStaff(e.target.checked);
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
              defaultChecked={rows[rowIndex]?.isAdmin}
              value="apprentice"
              onChange={(e) => {
                setIsAdmin(e.target.checked);
              }}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </form>
  );

  React.useEffect(() => {
    getTalentRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editSuccess]);

  const tickMarker = (truthiness) =>
    truthiness ? (
      <small className="text-2xl text-green-600 font-serif">True</small>
    ) : (
      <small className="text-2xl text-red-600 font-serif">False</small>
    );

  return (
    <>
      {notAuthorised ? <Logout /> : null}
      <Toaster
        containerStyle={{ zIndex: 99999 }}
        position="top-center"
        reverseOrder="false"
      ></Toaster>
      <section className="mt-5 w-[98%] mx-auto">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold"></small>
                </TableCell>
                <TableCell align="left">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Name
                  </small>
                </TableCell>
                <TableCell align="left">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Email
                  </small>
                </TableCell>
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Active
                  </small>
                </TableCell>
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Talent
                  </small>
                </TableCell>
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Mentor
                  </small>
                </TableCell>
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Intern
                  </small>
                </TableCell>
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Apprentice
                  </small>
                </TableCell>
                {me === "isA" ? (
                  <>
                    <TableCell align="center">
                      <small className="font-serif m-0 text-xl font-semibold">
                        Staff
                      </small>
                    </TableCell>
                    <TableCell align="center">
                      <small className="font-serif m-0 text-xl font-semibold">
                        Admin
                      </small>
                    </TableCell>
                  </>
                ) : (
                  ""
                )}
                <TableCell align="center">
                  <small className="font-serif m-0 text-xl font-semibold">
                    Action
                  </small>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getSuccess
                ? rows.map((row, rIndex) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        <small className="font-serif m-0 text-2xl font-medium">
                          {rIndex + 1}
                        </small>
                      </TableCell>
                      <TableCell align="left">
                        <small className="font-serif m-0 text-2xl font-medium">
                          {row.name}
                        </small>
                      </TableCell>
                      <TableCell align="left">
                        <small className="font-serif m-0 text-2xl font-medium">
                          {row.email}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        <small className="font-serif m-0 text-xl font-medium">
                          {tickMarker(row.isActive)}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        <small className="font-serif m-0 text-xl font-medium">
                          {tickMarker(row.isTalent)}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        <small className="font-serif m-0 text-xl font-medium">
                          {tickMarker(row.isMentor)}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        <small className="font-serif m-0 text-xl font-medium">
                          {tickMarker(row.isIntern)}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        {tickMarker(row.isApprentice)}
                      </TableCell>
                      {me === "isA" ? (
                        <>
                          <TableCell align="center">
                            {tickMarker(row.isStaff)}
                          </TableCell>
                          <TableCell align="center">
                            {tickMarker(row.isAdmin)}
                          </TableCell>
                        </>
                      ) : (
                        ""
                      )}
                      <TableCell align="center">
                        <Modal
                          mask={false}
                          title="Edit Role"
                          okButtonProps={{ className: "text-white bg-black" }}
                          closable={false}
                          centered
                          open={openEdit}
                          onCancel={() => setOpenEdit(false)}
                          onOk={editTalentRole}
                          okText={<small>Submit</small>}
                          width={200}
                          cancelButtonProps={{
                            className: "hover:bg-transparent",
                          }}
                          maskClosable={false}
                        >
                          {editRenderer()}
                        </Modal>
                        <Link
                          className="text-2xl text-sky-600 font-serif text-center hover:text-orange-600 left"
                          onClick={() => {
                            setRowIndex(rIndex);
                            setOpenEdit(true);
                          }}
                        >
                          Edit
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
};

export default UserRole;
