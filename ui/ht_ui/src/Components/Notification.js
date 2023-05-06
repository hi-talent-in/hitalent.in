import React, { useEffect } from "react";
import { notification } from "antd";

const Notification = (props) => {
  const { message, color } = props;
  const [api, contextHolder] = notification.useNotification();
  console.log("what");
  const openNotification = (placement) => {
    api.info({
      message: (
        <strong className={color === "red" ? "text-red-700" : "text-green-700"}>
          {message}
        </strong>
      ),
      placement,
    });
  };

  useEffect(() => {
    openNotification("topRight"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{contextHolder}</div>;
};

export default Notification;
