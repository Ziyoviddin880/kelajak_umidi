import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

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
    </>
  );
}

export default App;
