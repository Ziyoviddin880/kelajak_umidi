import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/rootLayout/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Prices from "../pages/prices/Prices";
import Services from "../pages/services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
    ],
  },
]);
