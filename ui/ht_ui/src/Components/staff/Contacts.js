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

const Contacts = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");
  const [notAuthorised, setNotAuthorised] = React.useState(false);

  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  const getContactList = async () => {
    const config = {
      metthod: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      url: `${process.env.REACT_APP_BACKEND_API}/contact/g`,
    };
    await axios(config)
      .then(async (response) => {
        const data = response.data.contacts;
        setContacts(data);
        setStatus(true);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setNotAuthorised(true);
        }
        toast.error(err.response.data.message);
      });
  };

  const deleteContact = async (id) => {
    const config = {
      metthod: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      url: `${process.env.REACT_APP_BACKEND_API}/contact/d/${id}`,
    };
    await axios(config)
      .then(async (response) => {
        setDeleteState(true)
        toast.success("Contact deleted.");
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  React.useEffect(() => {
    getContactList();
    setDeleteState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteState]);

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
          <div className="w-full ">
            {notAuthorised ? <Logout /> : null}
            <div className="w-[98%] mt-32 rounded-lg mx-auto bg-white">
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
                          Subject
                        </h6>
                      </TableCell>
                      <TableCell align="center">
                        <h6 className="text-2xl font-semibold font-serif">
                          Message
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
                    {contacts.map((contact) => (
                      <TableRow
                        key={contact.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          <small className="text-2xl font-serif">
                            {contact.name}
                          </small>
                        </TableCell>
                        <TableCell align="center">
                          <small className="text-2xl font-serif">
                            {contact.email}
                          </small>
                        </TableCell>
                        <TableCell align="center">
                          <small className="text-2xl font-serif">
                            {contact.subject}
                          </small>
                        </TableCell>
                        <TableCell align="center">
                          <small className="text-2xl font-serif">
                            {contact.message}
                          </small>
                        </TableCell>
                        <TableCell align="center">
                          <button
                            className="m-0 text-xl font-semibold text-red-600 underline bg-transparent p-0 hover:bg-transparent hover:text-red-600"
                            onClick={() => {
                              deleteContact(contact.id);
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

export default Contacts;
