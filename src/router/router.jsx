import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/rootLayout/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import PricesPage from "../pages/prices/PricesPage";
import Services from "../pages/services/Services";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: async () => {
            window.scrollTo(0, 0); // Sahifani tepa qismga o'rnatish
          },
        },
        // {
        //   path: "/aboutUs",
        //   element: <About />,
        //   loader: async () => {
        //     window.scrollTo(0, 0); // Sahifani tepa qismga o'rnatish
        //   },
        // },
        {
          path: "/services",
          element: <Services />,
          loader: async () => {
            window.scrollTo(0, 0); // Sahifani tepa qismga o'rnatish
          },
        },
        {
          path: "/prices",
          element: <PricesPage />,
          loader: async () => {
            window.scrollTo(0, 0); // Sahifani tepa qismga o'rnatish
          },
        },
      ],
    },
  ]
  // {
  //   scrollRestoration: "manual", // Scroll pozitsiyani boshqarish
  // }
);
