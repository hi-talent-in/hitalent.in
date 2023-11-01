import axios from "axios";
import { Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCustomMessage from "../../hooks/useCustomMessage";
import useStore from "../../../store";

const Contact = () => {
  const accessToken = localStorage.getItem("accessToken");
  const me = localStorage.getItem("me");

  const { contextHolder, success, error } = useCustomMessage();

  const { userData } = useStore((store) => ({
    userData: store.userData,
  }));

  const initialFormData = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_BACKEND_BASE_URL}/contact/c`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      })
      .then((response) => {
        success(
          response.data?.message || "Contact form submitted successfully."
        );
        setFormData(initialFormData);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          error("Please Login");
          localStorage.clear();
        } else {
          error(err?.response?.data?.message || err?.response?.data?.error);
        }
      });
  };

  return (
    <section id="contact">
      {contextHolder}
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center py-2 text-sky-800">
          Contact Us
        </h1>
        {me === `isS` || me === "isA" || me === "isM" ? (
          <Link to="/contacts" className="hover:text-blue-600 underline">
            See who contacted.
          </Link>
        ) : (
          ""
        )}
        <form className="flex flex-col p-5 lg:w-[40%] mx-auto md:w-[60%] w-full space-y-5 justify-center items-center">
          <div className="flex flex-col w-full">
            <small>Name:</small>{" "}
            <Input
              placeholder="john"
              name="name"
              className="  bg-transparent"
              value={formData.name || userData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <small>Email:</small>{" "}
            <Input
              placeholder="john@gmail.com"
              name="email"
              className=" bg-transparent"
              value={formData.email || userData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <small>Subject:</small>{" "}
            <Input
              placeholder="Request to have a callback"
              name="subject"
              className=" bg-transparent"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <small>Message:</small>{" "}
            <Input.TextArea
              placeholder="Hi, there is something I need to discuss with...."
              name="message"
              className=" bg-transparent"
              value={formData.message}
              rows={8}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            />
          </div>
          <strong
            onClick={handleChange}
            className="hover:cursor-pointer hover:bg-sky-700 mt-1 mx-auto px-6 py-1 bg-sky-900 text-white rounded-md font-medium"
          >
            Submit
          </strong>
        </form>
      </div>
    </section>
  );
};

export default Contact;
