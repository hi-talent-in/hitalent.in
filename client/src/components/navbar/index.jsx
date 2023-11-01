import { Link, useLocation } from "react-router-dom";

import useClickOutside from "../../hooks/useClickOutside";
import useStore from "../../../store";

const Navbar = () => {
  const accessToken = localStorage.getItem("accessToken");
  const accT = localStorage.getItem("accT");
  const roles = accT?.split(",").sort();
  const actualRoles = ["isS", "isM", "isA", "isT"].sort();

  const { setOpenViewAs } = useStore((state) => ({
    setOpenViewAs: state.setOpenViewAs,
  }));

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  const { pathname, hash } = useLocation();

  const nonAuthItems = [
    { title: "About", path: "/#about", active: hash === "#about" },
    {
      title: "Programs",
      path: "/#programs",
      active: hash === "#programs",
    },
    { title: "Team", path: "/#team", active: hash === "#team" },
    { title: "Contact", path: "/#contact", active: hash === "#contact" },
  ];

  const authItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      title: "Profile",
      path: "/profile",
      active: pathname === "/profile",
    },
    {
      title: "Jobs",
      path: "/jobs",
      active: pathname === "/jobs",
    },
  ];

  const { popoverRef, setShow, show } = useClickOutside();

  const navItems = (
    <div className="md:flex-row flex flex-col items-center justify-center gap-2 w-full">
      <Link
        to={"/"}
        className={`${
          hash === "#home" || ((!hash && pathname) === "/" && "text-sky-800")
        } hover:text-sky-800 md:w-auto w-full md:rounded-none md:bg-white rounded-md bg-slate-50 md:py-0 py-1 md:hover:bg-white hover:bg-slate-100 md:text-base text-center text-sm`}
        onClick={() => {
          pathname === "/" &&
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          setShow(false);
        }}
      >
        Home
      </Link>
      {accessToken ? (
        <>
          {authItems.map((item) => (
            <Link
              key={item.title}
              onClick={() => setShow(false)}
              to={item.path}
              className={`${item.active && "text-sky-800"}
               hover:text-sky-800 md:w-auto w-full md:rounded-none md:bg-white rounded-md bg-slate-50 md:py-0 py-1 md:hover:bg-white hover:bg-slate-100 md:text-base text-center text-sm `}
            >
              {item.title}
            </Link>
          ))}
          <a
            href="http://t.me/hitalent0"
            target="_blank"
            onClick={() => setShow(false)}
            rel="noreferrer"
            className="hover:text-sky-800 md:w-auto w-[8rem] md:rounded-none md:bg-white rounded-md bg-slate-50 md:py-0 py-1 md:hover:bg-white hover:bg-slate-100 md:text-base text-center text-sm"
          >
            Telegram
          </a>
        </>
      ) : (
        nonAuthItems.map((item) => (
          <a
            key={item.title}
            href={item.path}
            onClick={() => setShow(false)}
            className={`${item.active && "text-sky-800"}
               hover:text-sky-800 md:w-auto w-full md:rounded-none md:bg-white rounded-md bg-slate-50 md:py-0 py-1 md:hover:bg-white hover:bg-slate-100 md:text-base text-center text-sm `}
          >
            {item.title}
          </a>
        ))
      )}
    </div>
  );

  return (
    <div className="p-2 md:h-16 h-14 w-full z-[999] flex flex-row justify-between px-5 md:px-0 md:justify-around items-center bg-white border-b-2 border-b-slate-100 fixed  bg-inherit">
      <Link to={"/"} className="md:text-4xl text-3xl font-extrabold">
        HiTalent
      </Link>
      <div className="md:flex flex-row space-x-10 items-center hidden">
        {navItems}
      </div>
      <div className="flex flex-row space-x-0">
        {!accessToken ? (
          <>
            <Link
              to={"/join"}
              className={`hover:text-sky-800 ${
                pathname === "/join" && "text-sky-800"
              } hidden md:block px-3 rounded-md font-semibold `}
            >
              Join
            </Link>{" "}
            <Link
              to={"/login"}
              className={`hover:text-sky-800 ${
                pathname === "/login" && "text-sky-800"
              } block px-3 rounded-md font-semibold `}
            >
              Login
            </Link>
            <button
              className="relative md:hidden block"
              onClick={() => {
                setShow(!show);
              }}
            >
              <img src="/icons/menu.png" alt="menu image" width={20} />
            </button>
            {show && (
              <div className="relative md:hidden block" ref={popoverRef}>
                <div className="p-2 min-w-[10em] bg-white border-2 right-0 top-14 rounded-md absolute flex flex-col gap-2">
                  {navItems}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              className="relative rounded-full border-2"
              onClick={() => {
                setShow(!show);
              }}
            >
              <img src="/icons/user.png" alt="user image" width={35} />
            </button>
            {show && (
              <div className="relative" ref={popoverRef}>
                <div className="p-2 min-w-[10em] bg-white border-2 right-0 top-14 rounded-md absolute flex flex-col gap-2">
                  {JSON.stringify(actualRoles) === JSON.stringify(roles) && (
                    <button
                      onClick={() => setOpenViewAs(true)}
                      className="w-full rounded-md bg-slate-50 py-1 hover:bg-slate-100 text-center text-sm px-1"
                    >
                      View
                    </button>
                  )}
                  <div className="flex-row flex gap-2 p-2">
                    <div className="md:hidden w-full flex flex-col gap-2 ">
                      <br />
                      {navItems}
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <br />
                      <a
                        href={`${import.meta.env.VITE_MEETING_1}`}
                        target="_blank"
                        onClick={() => setShow(false)}
                        rel="noreferrer"
                        className="w-[8rem] rounded-md bg-slate-50 py-1 hover:bg-slate-100 text-sm px-1 text-center"
                      >
                        Meet 1
                      </a>
                      <a
                        href={`${import.meta.env.VITE_MEETING_2}`}
                        target="_blank"
                        onClick={() => setShow(false)}
                        rel="noreferrer"
                        className="w-full rounded-md bg-slate-50 py-1 hover:bg-slate-100 text-sm px-1 text-center"
                      >
                        Meet 2
                      </a>
                      <a
                        href="https://chat.openai.com"
                        target="_blank"
                        onClick={() => setShow(false)}
                        rel="noreferrer"
                        className="w-full rounded-md bg-slate-50 py-1 hover:bg-slate-100 text-center text-sm px-1"
                      >
                        ChatGPT
                      </a>
                      <a
                        href="https://www.freecodecamp.org/"
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setShow(false)}
                        className="w-full rounded-md bg-slate-50 py-1 hover:bg-slate-100 text-center text-sm px-1"
                      >
                        FreeCodeCamp
                      </a>
                      <hr className="md:block hidden" />
                      <button
                        onClick={handleLogout}
                        className="w-full rounded-md bg-red-50 py-1 hover:bg-red-100 text-sm px-1"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
