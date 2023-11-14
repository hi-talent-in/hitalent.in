import React, { useState } from "react";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Logout from "../Logout";
import { Link } from "react-router-dom";
import { Table, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Contacts = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");
  const [notAuthorised, setNotAuthorised] = React.useState(false);

  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

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
      title: "Subject",
      dataIndex: "subject",
      responsive: ["md"],
      render: (text) => <small className="font-medium text-xl">{text}</small>,
    },
    {
      title: "Message",
      dataIndex: "message",
      width: 500,
      align: "center",
      responsive: ["md"],
      render: (text) => <small className="font-medium text-xl">{text}</small>,
    },
    {
      title: "Action",
      dataIndex: "key",
      align: "center",
      render: (id, _) => (
        <Link
          className="font-medium text-xl text-red-600"
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </Link>
      ),
    },
  ];

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
        setDeleteState(true);
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

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-700 hover:text-sky-500 ">{symbol}</small>
  );

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
            <Spin indicator={antIcon} />{" "}
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
                dataSource={contacts}
                size="small"
                expandable={{
                  expandedRowRender: (record) => (
                    <div className="flec flex-col space-y-2">
                      <div>
                        <strong>Subject :</strong>
                      </div>
                      <div>{record.subject}</div>
                      <div>
                        <strong>Message :</strong>
                      </div>
                      <div>{record.message}</div>
                    </div>
                  ),
                  expandIcon: ({ expanded, onExpand, record }) => (
                    <Link
                      className="text-sky-700 text-xl"
                      onClick={(e) => onExpand(record, e)}
                    >
                      {expanded ? "-" : "+"}
                    </Link>
                  ),
                  // rowExpandable: (record) => record.name !== "Not Expandable",
                }}
              />
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
