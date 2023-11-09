import { FloatButton, Input, Modal } from "antd";
import axios from "axios";

import { useRef, useState } from "react";
import useCustomMessage from "../hooks/useCustomMessage";
import Loader from "./loader";
import { Link } from "react-router-dom";
import useStore from "../../store";

const FabFeedback = () => {
  const { userData } = useStore((store) => ({
    userData: store.userData,
  }));

  const [modal2Open, setModal2Open] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const { contextHolder, success, error } = useCustomMessage();

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (var x = 0; x < file?.length; x++) {
      data.append("file", file[x]);
    }
    data.append("name", newName || userData.name);
    data.append("message", message);
    data.append("email", newEmail || userData.email);
    data.append("givenBy", localStorage.getItem("tId"));
    axios
      .post(`${import.meta.env.VITE_BACKEND_BASE_URL}/feedback/c`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken,
        },
      })
      .then((res) => {
        setFile(null);
        fileInputRef.current.value = "";
        setMessage("");
        setNewEmail("");
        setNewName("");
        setModal2Open(false);
        success(res.data.message);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          error("Please login!!");
        } else {
          error(err?.response?.data?.message || err?.response?.data?.error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  return (
    <>
      {contextHolder}
      <FloatButton
        tooltip={<small>Feedback</small>}
        type="primary"
        style={{ left: 10, bottom: 10 }}
        onClick={() => {
          setModal2Open(true);
        }}
      />
      <Modal
        mask={false}
        title={
          <div>
            Feedback <br />
            <small>
              {me === `isS` || me === "isA" || me === "isM" ? (
                <Link
                  to="/feedbacks"
                  onClick={() => {
                    setModal2Open(false);
                  }}
                  className="hover:text-sky-700 underline"
                >
                  See others Feedbacks
                </Link>
              ) : (
                ""
              )}
            </small>
          </div>
        }
        closable={false}
        centered
        open={modal2Open}
        onCancel={() => setModal2Open(false)}
        width={600}
        onOk={(event) => {
          setLoading(true);
          handleSubmit(event);
        }}
        okButtonProps={{
          className:
            "hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium",
        }}
        okText={loading ? <Loader /> : "Submit"}
      >
        <div className="min-h-[30em] overflow-auto mx-auto">
          <form className="flex flex-col p-5 space-y-5 justify-center items-center">
            <div className="flex flex-col w-full">
              <small>Name:</small>
              <Input
                placeholder="john"
                name="name"
                className="bg-transparent"
                value={newName || userData.name}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full">
              <small>Email:</small>
              <Input
                placeholder="john@gmail.com"
                name="email"
                className=" bg-transparent"
                value={newEmail || userData.email}
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full">
              <small>Body:</small>{" "}
              <Input.TextArea
                placeholder="We can add other program...."
                name="message"
                className=" bg-transparent"
                value={message}
                rows={8}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mr-auto">
              <strong className="mt-2 text-left font-medium">
                Add Screenshots <br />
                <label className="w-[15em] text-sm m-0" htmlFor="file">
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
              </strong>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default FabFeedback;
