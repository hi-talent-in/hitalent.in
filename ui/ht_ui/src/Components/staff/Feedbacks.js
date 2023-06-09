import React, { useState } from "react";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Logout from "../Logout";
import { Link } from "react-router-dom";
import { Table, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Feedbacks = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const [feedbacks, setFeedbacks] = useState([]);
  const [status, setStatus] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [notAuthorised, setNotAuthorised] = React.useState(false);
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
      title: "Message",
      dataIndex: "message",
      width: 500,
      align: "center",
      responsive: ["md"],
      render: (text) => <small className="font-medium text-xl">{text}</small>,
    },
    {
      title: "Screenshots",
      dataIndex: "filesName",
      align: "center",
      responsive: ["md"],
      render: (names, _) => (
        <div className="m-0 text-xl">
          {names?.map((name, index) => (
            <li className="p-0 m-0" key={index}>
              <a
                href={`${process.env.REACT_APP_BACKEND_API}/feedback?fileName=${name}&givenBy=${_.givenBy}`}
                className="font-medium text-xl text-blue-500 font-serif"
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "key",
      align: "center",
      render: (id, _) => (
        <Link
          className="font-medium text-xl text-red-600"
          onClick={() => {
            deleteFeedback(id);
            setDeleteState(true);
          }}
        >
          Delete
        </Link>
      ),
    },
  ];

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

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-600 hover:text-sky-500 ">{symbol}</small>
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
          <div className=" rounded-lg mt-1 mx-auto bg-white w-[98%]">
            {notAuthorised ? <Logout /> : null}
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
              dataSource={feedbacks}
              size="small"
              expandable={{
                expandedRowRender: (record) => (
                  <div className="flec flex-col space-y-2">
                    <div>
                      <strong>Message :</strong>
                    </div>
                    <div>{record.message}</div>
                    {record?.filesName && (
                      <div>
                        <strong>Screenshots :</strong>
                      </div>
                    )}
                    <div className="m-0 text-xl">
                      {record?.filesName?.map((name, index) => (
                        <li className="p-0 m-0" key={index}>
                          <a
                            href={`${process.env.REACT_APP_BACKEND_API}/feedback?fileName=${name}&givenBy=${record.givenBy}`}
                            className="font-medium text-xl text-blue-500 font-serif"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </div>
                  </div>
                ),
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
            />
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
