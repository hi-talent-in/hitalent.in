import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const accessToken = "";
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
      title: "Rooms",
      path: "/rooms",
      active: pathname === "/rooms",
    },
    {
      title: "Buddy",
      path: "/buddy",
      active: pathname === "/buddy",
    },
  ];

  return (
    <div className="p-2 h-16 w-full z-[999] flex flex-row justify-around items-center bg-white border-b border-b-slate-50 fixed  bg-inherit">
      <strong className="text-4xl font-extrabold">HiTalent</strong>
      <div className="flex flex-row space-x-10 items-center">
        <div className="md:flex flex-row hidden items-center justify-center space-x-3">
          <Link
            to={"/"}
            className={`${
              hash === "#home" ||
              ((!hash && pathname) === "/" && "text-sky-300")
            } hover:text-sky-300 text-lg`}
            onClick={() => {
              pathname === "/" &&
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
            }}
          >
            Home
          </Link>
          {accessToken
            ? authItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`${
                    item.active && "text-sky-300"
                  } hover:text-sky-300 text-lg`}
                >
                  {item.title}
                </Link>
              ))
            : nonAuthItems.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className={`${
                    item.active && "text-sky-300"
                  } hover:text-sky-300 text-lg`}
                >
                  {item.title}
                </a>
              ))}
        </div>
      </div>
      <div className="flex flex-row space-x-0">
        {!accessToken ? (
          <>
            <Link
              to={"/login"}
              className="hover:text-sky-300 hidden md:block px-3 rounded-md font-semibold text-lg"
            >
              Join
            </Link>{" "}
            <Link
              to={"/login"}
              className="hover:text-sky-300 hidden md:block px-3 rounded-md font-semibold text-lg"
            >
              Login
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
