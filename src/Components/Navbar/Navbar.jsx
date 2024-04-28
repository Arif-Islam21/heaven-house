// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <Link to={"/"}>
        <li className="btn btn-ghost">Home</li>
      </Link>
      <Link to={"/login"}>
        <li className="btn btn-ghost">Log In</li>
      </Link>
      <Link to={"/register"}>
        <li className="btn btn-ghost">Register</li>
      </Link>
      <Link to={"/map"}>
        <li className="btn btn-ghost">Map</li>
      </Link>
      <Link to={"/profile"}>
        <li className="btn btn-ghost">Profile</li>
      </Link>
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
        {/* {user && (
          <div
            className="dropdown mt-4 tooltip flex gap-x-4 dropdown-end"
            data-tip={user?.displayName ? user.displayName : "User Name"}
          >
            <button onClick={() => logOut()} className="btn btn-ghost">
              Log Out
            </button>
            <div
              tabIndex={0}
              role="button"
              className="btn  flex btn-ghost btn-circle avatar "
            >
              <div className="w-10 tooltip  rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
          </div>
        )}
        {!user && (
          <Link to="login" className="btn btn-ghost">
            Log In
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
