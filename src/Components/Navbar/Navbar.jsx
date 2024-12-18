// import { useContext } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { FaHouseChimney } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import { FaMapMarkedAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoLogIn } from "react-icons/io5";
import { FaCashRegister } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authenticationLinks = [
    {
      path: "/login",
      name: "Login",
      icons: <IoLogIn size={24} />,
    },
    {
      path: "/register",
      name: "Register",
      icons: <FaCashRegister size={24} />,
    },
  ];
  const linksDetails = [
    {
      path: "/",
      name: "Home",
      icons: <FaHouseChimney size={24} />,
    },
    {
      path: "/map",
      name: "Map",
      icons: <FaMapMarkedAlt size={24} />,
    },
    {
      path: "/profile",
      name: "Profile",
      icons: <ImProfile size={24} />,
    },
  ];

  const links = (
    <>
      {linksDetails.map((item, idx) => (
        <NavLink
          key={idx}
          className={({ isActive }) => {
            return `btn px-4 py-2 text-md rounded-md mr-3 ${
              isActive &&
              "border-green-500 border-2 rounded-xl transform duration-300 text-green-600 font-bold"
            } font-semibold`;
          }}
          to={item.path}
        >
          {item.icons}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <FcHome size={28} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            className="dropdown mt-4 tooltip flex gap-x-4 dropdown-end"
            data-tip={user?.displayName ? user.displayName : "User Name"}
          >
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log Out
            </button>
            <div
              tabIndex={0}
              role="button"
              className="btn  flex btn-ghost btn-circle avatar "
            >
              <div className="w-10 tooltip  rounded-full">
                <img
                  alt="User profile picture"
                  // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavLink to={"/login"}>
              <li className="btn btn-ghost">Log In</li>
            </NavLink>
            <NavLink to={"/register"}>
              <li className="btn btn-ghost">Register</li>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
