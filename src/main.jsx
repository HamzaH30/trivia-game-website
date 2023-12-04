import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WelcomePage from "./welcome-page";
import GamePage from "./game-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
