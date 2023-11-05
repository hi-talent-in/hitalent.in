import axios from "axios";
import useCustomMessage from "../../hooks/useCustomMessage";
import { useEffect } from "react";

const NewJoin = () => {
  const accessToken = localStorage.getItem("accessToken");
  const isNew = localStorage.getItem("isNew");
  const postUrl = `${
    import.meta.env.VITE_BACKEND_BASE_URL
  }/talent/select/program/`;

  const { error, contextHolder } = useCustomMessage();

  const selection = (program) => {
    if (program) {
      axios
        .post(
          postUrl,
          { selectedProgram: program },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: accessToken,
            },
          }
        )
        .then((res) => {
          localStorage.setItem("talentType", res.data.talentType);
          localStorage.setItem("me", "isT");
          localStorage.removeItem("isNew");
          window.location.href = "/dashboard";
        })
        .catch((err) => {
          error(err?.response?.data?.message || err.message);
          window.location.href = "/";
        });
    } else {
      window.location.href = "/";
    }
  };

  if (!accessToken || isNew !== "true") {
    window.location.href = "/";
  }

  useEffect(() => {
    document.title = "Choose Program - HiTalent";
    return () => {
      document.title = "HiTalent";
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {contextHolder}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl">Yay! You made it. We are happy to join you.</h3>
        <small>Now choose a program suitable to you.</small>
        <br />
        <div className="justify-center">
          <button
            type="button"
            className="hover:bg-sky-700 mt-1 mx-auto w-44 py-2 bg-sky-900 text-white rounded-md font-medium text-lg"
            onClick={() => {
              selection("intern");
            }}
          >
            Internship
          </button>
        </div>
        <br />
        <div className="justify-center">
          {" "}
          <button
            type="button"
            className="hover:bg-sky-700 mt-1 mx-auto w-44 py-2 bg-sky-900 text-white rounded-md font-medium text-lg"
            onClick={() => {
              selection("apprentice");
            }}
          >
            Apprenticeship
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewJoin;
