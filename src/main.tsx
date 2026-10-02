import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "signin", Component: SignIn },
      { path: "signup", Component: SignUp },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <ToastContainer newestOnTop position="top-right" theme="light" />
    </>
  </StrictMode>,
);
