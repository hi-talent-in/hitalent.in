import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import axios from "axios";
import Logout from "../Logout";
import { Link } from "react-router-dom";
import { Button, Input } from "antd";
const { TextArea } = Input;

const Contact = () => {
  const accessToken = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const me = localStorage.getItem("me");
  const [notAuthorised, setNotAuthorised] = React.useState(false);

  function contactValidate(values) {
    const errors = contactVerify({}, values);
    return errors;
  }

  const contactVerify = (error = {}, values) => {
    if (!accessToken) {
      error.username = toast.error("Please login!");
    } else {
      if (!values.name || !values.email || !values.subject || !values.message) {
        error.username = toast.error("All fields are Required!");
      }
    }
    return error;
  };

  const formSubmitUrl = `${process.env.REACT_APP_BACKEND_API}/contact/c`;

  const initialValues = {
    name: username || "",
    email: email || "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: contactValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      await axios
        .post(formSubmitUrl, values, {
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        })
        .then(() => {
          toast.success("Your Contact Form submitted.");
          actions.resetForm({ values: initialValues });
        })
        .catch((err) =>
          err.response.status === 401
            ? setNotAuthorised(true)
            : toast.error(err.response.data.message)
        );
    },
  });

  return (
    <section id="contact">
      {notAuthorised ? <Logout /> : null}
      <div className="flex justify-center items-center h-auto bg-gradient-to-r from-slate-700 to-red-300">
        <div className="w-full mt-24 mx-auto md:max-w-[600px] ">
          <Toaster
            containerStyle={{ zIndex: 99999 }}
            position="top-center"
            reverseOrder="false"
          ></Toaster>
          <div className="flex flex-col space-y-5">
            <strong className="text-5xl text-black">Contact Us</strong>
            {me === `isS` || me === "isA" || me === "isM" ? (
              <Link
                to="/contacts"
                className="text-black hover:text-blue-500 underline font-serif"
              >
                See who contacted.
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="grid grid-cols-1 ">
            <div className="w-[90%] mx-auto md:max-w-[80%] ">
              <label
                htmlFor="first-name"
                className="block text-2xl font-sans  text-left font-medium text-black"
              >
                Name
              </label>
              <Input
                className="font-serif"
                type="text"
                id="first-name"
                {...formik.getFieldProps("name")}
                autoComplete="given-name"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "2em",
                }}
              ></Input>
            </div>
            <div className="w-[90%] mx-auto md:max-w-[80%]">
              <label
                htmlFor="last-name"
                className="block text-2xl font-sans  text-left font-medium text-black"
              >
                Email
              </label>
              <Input
                className="font-serif"
                type="text"
                id="last-name"
                {...formik.getFieldProps("email")}
                autoComplete="family-name"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "2em",
                }}
              ></Input>
            </div>
            <div className="w-[90%] mx-auto md:max-w-[80%]">
              <label
                htmlFor="last-name"
                className="block text-2xl font-sans  text-left font-medium text-black"
              >
                Subject
              </label>
              <Input
                className="font-serif"
                type="text"
                {...formik.getFieldProps("subject")}
                id="last-name"
                autoComplete="family-name"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "2em",
                }}
              ></Input>
            </div>
            <div className="w-[90%] mx-auto md:max-w-[80%]">
              <label
                htmlFor="last-name"
                className="block text-2xl font-sans  text-left font-medium text-black"
              >
                Message
              </label>
              <TextArea
                type="text"
                {...formik.getFieldProps("message")}
                id="last-name"
                autoComplete="family-name"
                style={{
                  backgroundColor: "rgb(107, 114, 128)",
                  color: "black",
                  height: "12em",
                  borderColor: "transparent",
                }}
                className="border-transparent"
              />
            </div>
            <div className="w-[90%] mx-auto md:max-w-[80%] mt-5 ">
              <Button
                onClick={formik.handleSubmit}
                className="text-2xl font-semibold"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
