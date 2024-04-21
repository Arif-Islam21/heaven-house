import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import HomePage from "../Components/HomePage/HomePage";
import LogIn from "../Components/LogIn/LogIn";
import ProfileUpdate from "../Components/ProfileUpdate/ProfileUpdate";
import UserProfile from "../Components/UserProfile/UserProfile";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Register from "../Components/Register/Register";

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
        path: "profileUpdate",
        element: <ProfileUpdate></ProfileUpdate>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

export default router;
