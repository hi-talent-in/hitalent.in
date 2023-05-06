import React, { useState } from "react";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import axios from "axios";
import ReactLoading from "react-loading";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import toast, { Toaster } from "react-hot-toast";
import Logout from "../Logout";

const Feedbacks = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const [feedbacks, setFeedbacks] = useState([]);
  const [status, setStatus] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [notAuthorised, setNotAuthorised] = React.useState(false);

  const getFeedbackList = async () => {
    const config = {
      metthod: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      url: `${process.env.REACT_APP_BACKEND_API}/feedback/g`,
    };
    await axios(config)
      .then(async (response) => {
        const data = response.data.feedbacks;
        setFeedbacks(data);
        setStatus(true);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const deleteFeedback = async (id) => {
    const config = {
      metthod: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      url: `${process.env.REACT_APP_BACKEND_API}/feedback/d/${id}`,
    };
    await axios(config)
      .then(async (response) => {
        toast.success("Feedback deleted.");
        setDeleteState(true);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          <Logout />;
        }
        toast.error(err.response.data.message);
      });
  };

  React.useEffect(() => {
    getFeedbackList();
    setDeleteState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteState]);

  const screenshots = (names, givenBy) => {
    return (
      <div className="m-0 text-xl">
        {names.map((name, index) => (
          <li className="p-0 m-0">
            <a
              href={`${process.env.REACT_APP_BACKEND_API}/feedback?fileName=${name}&givenBy=${givenBy}`}
              className="text-orange-700 hover:text-blue-500 font-serif"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {name}
            </a>
          </li>
        ))}
      </div>
    );
  };

  const permFunc = () => {
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
          <div className=" rounded-lg mt-1 mx-auto bg-white w-[98%]">
            {notAuthorised ? <Logout /> : null}
            <Toaster
              containerStyle={{ zIndex: 99999 }}
              position="top-center"
              reverseOrder="false"
            ></Toaster>
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Name
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Email
                      </h6>
                    </TableCell>

                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Message
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Screenshots
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <h6 className="text-2xl font-semibold font-serif">
                        Action
                      </h6>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbacks.map((feedback) => (
                    <TableRow
                      key={feedback.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        <small className="text-2xl font-serif">
                          {feedback.name}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        <small className="text-2xl font-serif">
                          {feedback.email}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        <small className="text-2xl font-serif">
                          {feedback.message}
                        </small>
                      </TableCell>
                      <TableCell align="center">
                        {feedback.filesName ? (
                          screenshots(feedback.filesName, feedback.givenBy)
                        ) : (
                          <small className="text-2xl font-serif">
                            No screenshot
                          </small>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <button
                          className="m-0 text-xl font-semibold text-red-600 underline bg-transparent p-0 hover:bg-transparent hover:text-red-600"
                          onClick={() => {
                            deleteFeedback(feedback.id);
                            setDeleteState(true);
                          }}
                        >
                          DELETE
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
      }
    } else {
      window.location.href = "/";
    }
  };

  if (me === `isS` || me === "isA" || me === "isM") {
    return (
      <>
        <Navbar />
        <section className="mt-24">{permFunc()}</section>
        <NonHomeFooter />
      </>
    );
  } else {
    window.location.href = "/";
  }
};

export default Feedbacks;
