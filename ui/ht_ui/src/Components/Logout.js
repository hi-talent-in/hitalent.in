import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import jwt from "jwt-decode";
import { Link } from "react-router-dom";

const Logout = () => {
  const accessToken = localStorage.getItem("accessToken");
  const decodedToken = accessToken ? jwt(accessToken) : null;
  const currentTime = Date.now() / 1000;
  localStorage.setItem("tId", decodedToken?.userId);

  const [open, setOpen] = React.useState(false);

  const handleClose = (_, reason) => {
    if (reason && reason === "backdropClick") return;
    localStorage.clear();
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
      {accessToken ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          className="w-[80%] mx-auto md:w-[30em]"
        >
          <DialogContent>
            <h4 className="font-serif">
              Your session has expired, Please log in again.
            </h4>
            <Link
              to="/prelogin"
              onClick={handleClose}
              className="m-0 text-2xl font-medium font-serif hover:text-orange-600 text-blue-500 text-center underline"
            >
              Login
            </Link>
          </DialogContent>
        </Dialog>
      ) : (
        ""
      )}
    </div>
  ) : null;
};

export default Logout;
