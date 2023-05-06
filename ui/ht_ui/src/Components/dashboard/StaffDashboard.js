import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import NonHomeFooter from "../NonHomeFooter";
import EditableDashboard from "./EditableDashboard";
import List from "../talent/TalentProgress";
import UserRole from "../staff/UserRole";
import { useStore } from "../../store";
import { Select } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";

const StaffDashboard = () => {
  const [open, setOpen] = useState();

  const { talentId, setTalentId, talents, setTalents, setNotAuthorised } =
    useStore((state) => ({
      talentId: state.talentId,
      setTalentId: state.setTalentId,
      talents: state.talents,
      setTalents: state.setTalents,
      setNotAuthorised: state.setNotAuthorised,
    }));

  const handleChange = (e) => {
    setOpen(e);
  };

  const getTalents = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_API}/talent/get/talents/`)
      .then((talentData) => {
        setTalents(talentData.data);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : toast.error(err.response.data.message)
      );
  };

  const selectTalent = () => (
    <Select
      value={`${talentId}`}
      onChange={(_e) => {
        setTalentId(_e);
      }}
      className="w-[12em]"
      style={{ textAlign: "center" }}
    >
      <Select.Option value={"2023"}>
        <small className="font-serif text-2xl text-center">All Talents</small>
      </Select.Option>
      {talents?.map((talent) => (
        <Select.Option value={`${talent.id}`} key={talent.id}>
          <small className="font-serif text-2xl">{talent.name}</small>
        </Select.Option>
      ))}
    </Select>
  );

  const select = () => (
    <Select
      value={open}
      className="w-[11em]"
      onChange={handleChange}
      style={{ textAlign: "center" }}
    >
      <Select.Option value="1">
        <small className="font-serif text-2xl">Talents</small>
      </Select.Option>
      <Select.Option value="2">
        <small className="font-serif text-2xl">Talent's Progress</small>
      </Select.Option>
      <Select.Option value="3">
        <small className="font-serif text-2xl">Talent Dashboard</small>
      </Select.Option>
    </Select>
  );

  useEffect(() => {
    setOpen("1");
    getTalents();
    setTalentId(2023);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTalentId]);

  return (
    <>
      <Navbar />
      <div className="mt-24 w-[95%] flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 items-center mx-auto">
        {select()}
        {open === "3" ? selectTalent() : ""}
      </div>
      {open === "1" ? <UserRole /> : ""}
      {open === "2" ? <List /> : ""} {open === "3" ? <EditableDashboard /> : ""}
      <NonHomeFooter />
    </>
  );
};

export default StaffDashboard;
