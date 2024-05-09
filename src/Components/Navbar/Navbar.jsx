// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to={"/"}>
        <li className="btn btn-ghost">Home</li>
      </NavLink>
      <NavLink to={"/login"}>
        <li className="btn btn-ghost">Log In</li>
      </NavLink>
      <NavLink to={"/register"}>
        <li className="btn btn-ghost">Register</li>
      </NavLink>
      <NavLink to={"/map"}>
        <li className="btn btn-ghost">Map</li>
      </NavLink>
      <NavLink to={"/profile"}>
        <li className="btn btn-ghost">Profile</li>
      </NavLink>
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
        <a className="btn btn-ghost text-xl">Heaven House</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div
          className="dropdown mt-4 tooltip flex gap-x-4 dropdown-end"
          data-tip="user name"
        >
          <button className="btn btn-ghost">Log Out</button>
          <div
            tabIndex={0}
            role="button"
            className="btn  flex btn-ghost btn-circle avatar "
          >
            <div className="w-10 tooltip  rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
