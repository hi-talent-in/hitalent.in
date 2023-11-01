import { Modal, Select } from "antd";
import useStore from "../../store";

const ViewAs = () => {
  const accT = localStorage.getItem("accT");
  const me = localStorage.getItem("me");

  const { openViewAs, setOpenViewAs } = useStore((state) => ({
    openViewAs: state.openViewAs,
    setOpenViewAs: state.setOpenViewAs,
  }));

  const handleViewChange = (e) => {
    localStorage.setItem("me", e);
    setOpenViewAs(false);
    window.location.reload();
  };

  return (
    <Modal
      mask={false}
      title="View As"
      closable={false}
      footer={false}
      open={openViewAs}
      onCancel={() => setOpenViewAs(false)}
      width={"max-content"}
      style={{ top: 75, right: 100, position: "fixed" }} // Set position to 'fixed' and customize top and right values
    >
      <Select
        defaultValue={me}
        onChange={handleViewChange}
        style={{ textAlign: "center" }}
        className="w-[10rem]"
      >
        {accT?.includes("isT") ? (
          <Select.Option value="isT">
            <small className="text-sm">Talent</small>
          </Select.Option>
        ) : null}
        {accT?.includes("isM") ? (
          <Select.Option value="isM">
            <small className="text-sm">Mentor</small>
          </Select.Option>
        ) : null}
        {accT?.includes("isS") ? (
          <Select.Option value="isS">
            <small className="text-sm">Staff</small>
          </Select.Option>
        ) : null}
        {accT?.includes("isA") ? (
          <Select.Option value="isA">
            <small className="text-sm">Admin</small>
          </Select.Option>
        ) : null}
      </Select>
    </Modal>
  );
};

export default ViewAs;
