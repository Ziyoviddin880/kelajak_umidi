import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/rootLayout/RootLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
