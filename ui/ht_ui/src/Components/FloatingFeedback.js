import React, { useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { Input, Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const FloatingFeedback = () => {
  const { TextArea } = Input;
  const [modal2Open, setModal2Open] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (var x = 0; x < file?.length; x++) {
      data.append("file", file[x]);
    }
    data.append("name", newName || username);
    data.append("message", message);
    data.append("email", newEmail || email);
    data.append("givenBy", localStorage.getItem("tId"));
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/feedback/c`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken,
        },
      })
      .then((res) => {
        setModal2Open(false);
        setLoading(false);
        setMessage("");
        setNewEmail("");
        setNewName("");
        setFile(null);
        fileInputRef.current.value = "";

        toast.success(res.data.message);
      })
      .catch((error) => {
        setModal2Open(false);
        setLoading(false);
        fileInputRef.current.value = "";
        setMessage("");
        setNewEmail("");
        setNewName("");
        setFile(null);
        if (error.response.status === 401) {
          toast.error("Please login!!");
        } else {
          toast.error(error.response.data.message);
        }
      });
  };

  const accessToken = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const me = localStorage.getItem("me");

  return (
    <>
      <Fab
        aria-label="edit"
        sx={{
          position: "fixed",
          left: "2em",
          bottom: "2em",
          backgroundColor: "orangered",
        }}
        onClick={() => {
          setModal2Open(true);
        }}
        id="floatB"
      >
        <FiEdit style={{ color: "black", fontSize: "3em" }} />
      </Fab>
      <Toaster
        containerStyle={{ zIndex: 99999 }}
        position="top-center"
        reverseOrder="false"
      ></Toaster>
      <Modal
        mask={false}
        title={
          <div>
            Feedback <small> </small>
            {me === `isS` || me === "isA" || me === "isM" ? (
              <Link
                to="/feedbacks"
                onClick={() => {
                  setModal2Open(false);
                }}
                className="text-orange-700 hover:text-blue-500 underline"
              >
                See others Feedbacks
              </Link>
            ) : (
              ""
            )}
          </div>
        }
        okButtonProps={{ className: "text-white bg-black" }}
        closable={false}
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        width={600}
        maskClosable={false}
        cancelButtonProps={{
          className: "hover:!bg-transparent",
        }}
        onOk={(event) => {
          setLoading(true);
          handleSubmit(event);
        }}
        okText={loading ? <Spin indicator={antIcon} /> : "Submit"}
      >
        <div className="h-[28em] mx-auto">
          <form id="feedbackForm">
            <div className="flex flex-col">
              <label
                htmlFor="first-name"
                className=" text-2xl m-0 text-left font-serif font-medium text-black"
              >
                Name
              </label>
              <Input
                type="text"
                id="first-name"
                defaultValue={username}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
                autoComplete="given-name"
                value={newName}
                className="font-serif"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "2em",
                }}
              ></Input>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className="m-0 text-2xl text-left font-serif font-medium text-black"
              >
                Email
              </label>
              <Input
                type="text"
                value={newEmail}
                id="last-name"
                defaultValue={email}
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
                autoComplete="family-name"
                className="font-serif"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "2em",
                }}
              ></Input>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className="m-0 text-2xl text-left font-serif font-medium text-black"
              >
                Feedback
              </label>
              <TextArea
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md text-xl font-serif"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "12em",
                }}
              ></TextArea>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className=" mt-2 text-2xl font-serif text-left font-medium text-black"
              >
                Add Screenshots
                <label
                  className="text-black w-[15em] text-lg m-0"
                  htmlFor="file"
                >
                  <input
                    type="file"
                    multiple
                    name="file"
                    id="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                  />
                </label>
                <pre id="filelist" className="hidden"></pre>
              </label>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default FloatingFeedback;
