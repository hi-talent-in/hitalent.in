import { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import UserRole from "../staff/UserRole";
import EditableDashboard from "./EditableDashboard";
import useStore from "../../../store";
import useCustomMessage from "../../hooks/useCustomMessage";

const StaffDashboard = () => {
  const [open, setOpen] = useState();
  const { error, contextHolder } = useCustomMessage();

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
      .get(`${import.meta.env.VITE_BACKEND_API}/talent/get/talents/`)
      .then((talentData) => {
        setTalents(talentData.data);
      })
      .catch((err) =>
        err.response.status === 401
          ? setNotAuthorised(true)
          : error(err.response.data.message)
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
        <small className="text-sm">All Talents</small>
      </Select.Option>
      {talents?.map((talent) => (
        <Select.Option value={`${talent.id}`} key={talent.id}>
          <small className="text-sm">{talent.name}</small>
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
        <small className="text-sm">Talents</small>
      </Select.Option>
      <Select.Option value="3">
        <small className="text-sm">Talent Dashboard</small>
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
    <section className="min-h-screen">
      {contextHolder}
      <div className="flex p-3 md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 items-center mx-auto">
        {select()}
        {open === "3" ? selectTalent() : ""}
      </div>
      {open === "1" ? <UserRole /> : ""}
      {open === "3" ? <EditableDashboard /> : ""}
    </section>
  );
};

export default StaffDashboard;
