import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const Logout = () => {
  const accessToken = localStorage.getItem("accessToken");

  const decodedToken = accessToken ? jwtDecode(accessToken) : null;

  const currentTime = Date.now() / 1000;

  localStorage.setItem("tId", decodedToken?.userId);

  const [open, setOpen] = useState(false);

  const handleClose = (_, reason) => {
    if (reason && reason === "backdropClick") return;
    localStorage.clear();
    sessionStorage.clear();
    setOpen(false);
  };

  const isTokenExpired = () => {
    if (accessToken && decodedToken && decodedToken.exp < currentTime) {
      setOpen(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      isTokenExpired();
    }, 60000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isTokenExpired();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return open ? (
    <div>
      {accessToken && (
        <Modal
          mask={false}
          title={
            <strong>Your session has expired, Please log in again.</strong>
          }
          closable={false}
          centered
          open={open}
          onCancel={() => setOpen(false)}
          maskClosable={false}
          footer={[
            <Link
              key={"submit"}
              to="/login"
              onClick={handleClose}
              className="hover:bg-sky-700 bg-sky-900 text-white rounded-md font-medium py-2 px-5 hover:text-white"
            >
              Login
            </Link>,
          ]}
        />
      )}
    </div>
  ) : null;
};

export default Logout;
