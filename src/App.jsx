import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({
      duration: 1000, // Animatsiya davomiyligi (millisekund)
      // once: true, // Faqat bir marta animatsiya qilish
    });
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
