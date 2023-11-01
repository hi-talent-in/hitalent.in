import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <section className="flex flex-row items-center justify-center h-screen">
      <div>
        <h1 className="text-5xl ">Oops!</h1>
        <hr className="m-4" />
        <i>{error.statusText || error.message}</i>
      </div>
    </section>
  );
};

export default ErrorElement;
