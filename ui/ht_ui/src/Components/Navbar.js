/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Select, Modal, Button as AButton } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { useStore } from "../store";

const Navbar = () => {
  const accessToken = localStorage.getItem("accessToken");
  const isStaff = localStorage.getItem("isStaff");
  const accT = localStorage.getItem("accT");
  const me = localStorage.getItem("me");
  const [modal2Open, setModal2Open] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const { reload, setReload } = useStore((state) => ({
    reload: state.reload,
    setReload: state.setReload,
  }));

  const handleViewChange = (e) => {
    localStorage.setItem("me", e);
    window.location.reload();
  };

  const popoverContent = (
    <div className="flex flex-col ">
      <small className="font-serif text-xl ml-5">View as:</small>
      <Select
        defaultValue={me}
        className="w-[10em] z-[999999]"
        onChange={handleViewChange}
        style={{ textAlign: "center" }}
      >
        {accT?.includes("isT") ? (
          <Select.Option value="isT">
            <small className="font-serif text-2xl">Talent</small>
          </Select.Option>
        ) : null}
        {accT?.includes("isM") ? (
          <Select.Option value="isM">
            <small className="font-serif text-2xl">Mentor</small>
          </Select.Option>
        ) : null}
        {accT?.includes("isS") ? (
          <Select.Option value="isS">
            <small className="font-serif text-2xl">Staff</small>
          </Select.Option>
        ) : null}
        {accT?.includes("isA") ? (
          <Select.Option value="isA">
            <small className="font-serif text-2xl">Admin</small>
          </Select.Option>
        ) : null}
      </Select>
    </div>
  );

  const nameTag = (name) => (
    <small className={`text-2xl font-sans hover:text-orange-600`}>{name}</small>
  );

  const headerNav = () => {
    if (accessToken) {
      return (
        <>
          <li className="text-xl">
            <Link to="/">{nameTag("Home")}</Link>
          </li>
          <li>
            {window.location.pathname.includes("/dashboard") ? (
              <Link
                to={isStaff ? "/staff/dashboard" : "/dashboard"}
                className="text-2xl text-orange-600"
              >
                <small className="font-sans p-0 text-orange-600 text-2xl">
                  Dashboard
                </small>
              </Link>
            ) : (
              <Link to={isStaff ? "/staff/dashboard" : "/dashboard"}>
                {nameTag("Dashboard")}
              </Link>
            )}
          </li>
          <li className="text-xl">
            {window.location.pathname === "/profile" ? (
              <Link to="/profile">
                <small className="font-sans p-0 text-orange-600 text-2xl">
                  Profile
                </small>
              </Link>
            ) : (
              <Link to="/profile">{nameTag("Profile")}</Link>
            )}
          </li>
          <li className="text-xl">
            <Link
              to="https://app.slack.com/client/T02K0N59X5Z/C02JU0EELGN"
              target="_blank"
              rel="noopener noreferrer"
            >
              {nameTag("Slack")}
            </Link>
          </li>
          <li className="text-xl ml-2 text-white">
            <Modal
              mask={false}
              title="Stand up Meeting Links"
              okButtonProps={{ className: "text-white bg-black" }}
              closable={false}
              centered
              open={modal2Open}
              onCancel={() => setModal2Open(false)}
              footer={[
                <AButton
                  key="cancel"
                  onClick={() => setModal2Open(false)}
                  className="hover:!bg-transparent"
                >
                  Close
                </AButton>,
              ]}
              width={230}
            >
              <div>
                <pre className="font-serif text-slate-800 m-5">
                  8:30 AM - 9:00 AM{" "}
                  <Link
                    to={`${process.env.REACT_APP_STAND_UP_LINK_1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-orange-600 underline hover:text-sky-500"
                  >
                    Join
                  </Link>
                </pre>
                <pre className="font-serif text-slate-800 m-5">
                  9:00 PM - 9:30 PM{" "}
                  <Link
                    to={`${process.env.REACT_APP_STAND_UP_LINK_2}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-orange-600 underline hover:text-sky-500"
                  >
                    Join
                  </Link>
                </pre>
              </div>
            </Modal>
            <Link onClick={() => setModal2Open(true)}>
              {nameTag("StandUp")}
            </Link>
          </li>
          <li className="text-xl">
            <Link
              to="https://chat.openai.com/chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              {nameTag("ChatGPT")}
            </Link>
          </li>
          <li className="text-xl md:visible">
            <Button onClick={() => setModalOpen(true)} className="hover:!bg-transparent">
              <div className="bg-gray-400 w-12 h-12 rounded-full items-center flex justify-center">
                <FaUserAlt style={{ color: "white", fontSize: "16px" }} />
              </div>
            </Button>
          </li>
          <Modal
            mask={false}
            closable={false}
            centered
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            onOk={() => {
              localStorage.clear();
              sessionStorage.clear();
              setReload(true);
              window.location.href = "/";
            }}
            okText={"Logout"}
            cancelButtonProps={{ className: "hover:!bg-transparent" }}
            cancelText="Close"
            width={200}
          >
            {popoverContent}
          </Modal>
        </>
      );
    } else {
      return (
        <>
          <li>
            <a href="/#home">
              <small className={`text-2xl font-sans hover:text-orange-600`}>
                Home
              </small>
            </a>
          </li>
          <li>
            <a href="/#about">
              <small className={` text-2xl font-sans hover:text-orange-600`}>
                About
              </small>
            </a>
          </li>
          <li>
            <a href="/#program">
              <small className={`text-2xl font-sans hover:text-orange-600`}>
                Programs
              </small>
            </a>
          </li>
          <li>
            <a href="/#hteam">
              <small className={` text-2xl font-sans hover:text-orange-600`}>
                Team
              </small>
            </a>
          </li>
          <li className="text-xl">
            <a href="/#contact">
              <small className={`text-2xl font-sans hover:text-orange-600`}>
                Contact
              </small>
            </a>
          </li>
          <li className="text-xl ">
            <Link to="/prelogin">
              <small className="hover:text-orange-600 text-2xl font-sans ">
                Join/Login
              </small>
            </Link>
          </li>
        </>
      );
    }
  };

  useEffect(() => {
    setReload(false);
  }, [reload, setReload]);

  return (
    <nav className="bg-zinc-500" id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav font-semibold">
        {headerNav()}
      </ul>
    </nav>
  );
};

export default Navbar;
