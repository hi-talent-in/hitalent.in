import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorElement from "./components/errorElement";
import Dashboard from "./components/dashboard";
import Root from "./components/root";
import Home from "./components/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
