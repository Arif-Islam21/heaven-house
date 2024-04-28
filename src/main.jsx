import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import router from "./Routes/Router";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Root from "./Routes/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomePage from "./Components/HomePage/HomePage";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import ProfileUpdate from "./Components/ProfileUpdate/ProfileUpdate";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
// import UserProfile from "./Components/UserProfile/UserProfile";
import Map from "./Components/Map/Map";
// import ViewProperty from "./Components/ViewProperty/ViewProperty";

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
        path: "/profileUpdate",
        element: <ProfileUpdate></ProfileUpdate>,
      },
      // {
      //   path: "/profile",
      //   element: (
      //     <PrivateRoute>
      //       <UserProfile></UserProfile>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/map",
        element: <Map></Map>,
      },
      // {
      //   path: "/property/:id",
      //   element: (
      //     <PrivateRoute>
      //       <ViewProperty></ViewProperty>
      //     </PrivateRoute>
      //   ),
      //   loader: () =>
      //     fetch(
      //       `https://arif-islam21.github.io/recidential-json-data/recidential.json`
      //     ),
      // },
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
