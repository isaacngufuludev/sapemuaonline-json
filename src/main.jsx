import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
register();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      toastClassName="Toastify__toast dark:bg-gray-800 dark:text-gray-100 text-sm "
      hideProgressBar={true}
    />
  </StrictMode>,
);
