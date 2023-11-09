import { message } from "antd";

const useCustomMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (content) => {
    messageApi.open({
      type: "success",
      content,
    });
  };
  const error = (content) => {
    messageApi.open({
      type: "error",
      content,
    });
  };

  const info = (content) => {
    messageApi.open({
      type: "info",
      content,
    });
  };

  const warn = (content) => {
    messageApi.open({
      type: "warning",
      content,
    });
  };

  return { success, error, contextHolder, info, warn };
};

export default useCustomMessage;
