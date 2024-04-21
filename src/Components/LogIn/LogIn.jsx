import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="container mx-auto">
      <div className="hero  min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:pl-24 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 px-4 lg:px-0">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a> */}
                  <p className="label-text-alt link link-hover">
                    Do not have an accout ?{" "}
                    <NavLink
                      to={"/register"}
                      className="text-blue-600 font-semibold"
                    >
                      Register
                    </NavLink>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="flex justify-around mt-4">
                <button className="btn btn-outline btn-success">
                  Google Login
                </button>
                <button className="btn btn-outline btn-success">
                  Github login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
