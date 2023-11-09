import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "antd";
import useCustomMessage from "../../hooks/useCustomMessage";
import Loader from "../loader";

const Feedbacks = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const [feedbacks, setFeedbacks] = useState([]);
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
      title: "Message",
      dataIndex: "message",
      width: 500,
      align: "center",
      responsive: ["md"],
      render: (text) => <small>{text}</small>,
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
                href={`${
                  import.meta.env.VITE_BACKEND_API
                }/feedback?fileName=${name}&givenBy=${_.givenBy}`}
                className=" hover:text-blue-700 !underline text-xs"
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
      render: (id) => (
        <Link
          className="text-red-600"
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
      url: `${import.meta.env.VITE_BACKEND_API}/feedback/g`,
    };
    await axios(config)
      .then(async (response) => {
        const data = response.data.feedbacks;
        setFeedbacks(data);
        setStatus(true);
      })
      .catch((err) =>
        err.response.status === 401
          ? error("Please Login!!")
          : error(err.response.data.message)
      );
  };

  const deleteFeedback = async (id) => {
    const config = {
      metthod: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      url: `${import.meta.env.VITE_BACKEND_API}/feedback/d/${id}`,
    };
    await axios(config)
      .then(async () => {
        success("Feedback deleted.");
        setDeleteState(true);
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  };

  React.useEffect(() => {
    getFeedbackList();
    setDeleteState(false);
    document.title = "Feedbacks - HiTalent";
    return () => {
      document.title = "HiTalent";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteState]);

  const nextPrevIcon = (symbol) => (
    <small className="text-sky-600 hover:text-sky-500 ">{symbol}</small>
  );

  if (!accessToken || !["isS", "isM", "isA"].includes(me)) {
    window.location.href = "/";
  }

  return (
    <section className="min-h-screen flex flex-col pt-20 gap-2 items-center justify-start">
      <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
        User Feedbacks
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
            dataSource={feedbacks}
            size="small"
            expandable={{
              expandedRowRender: (record) => (
                <div className="flex flex-col gap-2 px-3">
                  <div className="flex flex-col">
                    <strong>Message :</strong>
                    <div>{record.message}</div>
                  </div>
                  <div className="flex flex-col">
                    {record?.filesName && <strong>Screenshots :</strong>}
                    {record?.filesName?.map((name, index) => (
                      <a
                        href={`${
                          import.meta.env.VITE_BACKEND_API
                        }/feedback?fileName=${name}&givenBy=${record.givenBy}`}
                        className="text-xs underline hover:text-sky-700"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      >
                        {name}
                      </a>
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
      )}
    </section>
  );
};

export default Feedbacks;
