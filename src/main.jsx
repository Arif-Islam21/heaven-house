import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomePage from "./Components/HomePage/HomePage";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import Map from "./Components/Map/Map";
import ViewProperty from "./Components/ViewProperty/ViewProperty";
import UserProfile from "./Components/UserProfile/UserProfile";
import AuthProvider from "./Firebase/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/map",
        element: <Map></Map>,
      },
      {
        path: "property/:id",
        element: <ViewProperty></ViewProperty>,
        loader: () =>
          fetch(
            "https://arif-islam21.github.io/recidential-json-data/recidential.json"
          ),
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
