import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "antd";
import useCustomMessage from "../../hooks/useCustomMessage";
import Loader from "../loader";

const Contacts = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const { error, success, contextHolder } = useCustomMessage();

  let columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <small>{text}</small>,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text) => <small>{text}</small>,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      responsive: ["md"],
      render: (text) => <small>{text}</small>,
    },
    {
      title: "Message",
      dataIndex: "message",
      width: 500,
      align: "center",
      responsive: ["md"],
      render: (text) => <small>{text}</small>,
    },
    {
      title: "Action",
      dataIndex: "key",
      align: "center",
      render: (id) => (
        <button
          className="text-xs text-red-600"
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </button>
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
      url: `${import.meta.env.VITE_BACKEND_API}/contact/g`,
    };
    await axios(config)
      .then(async (response) => {
        const data = response.data.contacts;
        setContacts(data);
        setStatus(true);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          error("Please Login!!");
        }
        error(err.response.data.message);
      });
  };

  const deleteContact = async (id) => {
    const config = {
      metthod: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/contact/d/${id}`,
    };
    await axios(config)
      .then(async () => {
        setDeleteState(true);
        success("Contact deleted.");
      })
      .catch((err) =>
        err.response.status === 401
          ? error("Please Login!!")
          : error(err.response.data.message)
      );
  };

  React.useEffect(() => {
    getContactList();
    setDeleteState(false);
    document.title = "Contacts - HiTalent";
    return () => {
      document.title = "HiTalent";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteState]);

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-700 hover:text-sky-500 ">{symbol}</small>
  );

  if (!accessToken || !["isS", "isM", "isA"].includes(me)) {
    window.location.href = "/";
  }

  return (
    <section className="min-h-screen flex flex-col pt-20 gap-2 items-center justify-start">
      <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
        User Contacts
      </h1>
      {contextHolder}
      {!status ? (
        <Loader />
      ) : (
        <div className="rounded-md border-2 mx-3 min-h-[25rem]">
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
              y: 500,
            }}
            dataSource={contacts}
            size="small"
            expandable={{
              expandedRowRender: (record) => (
                <div className="flex px-3 flex-col gap-2">
                  <div className="flex flex-col">
                    <strong>Subject :</strong>
                    <small>{record.subject}</small>
                  </div>
                  <div className="flex flex-col">
                    <strong>Message :</strong>
                    <small>{record.message}</small>
                  </div>
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
      )}
    </section>
  );
};

export default Contacts;
