import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
const Register = () => {
  const { register, handleSubmit } = useForm();

  const { emailSignIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    const photoUrl = data.photoUrl;
    const password = data.password;
    console.log(email, name, photoUrl, password);
    emailSignIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-full bg-base-100">
        <div className="hero-content">
          <div className="card shrink-0 w-full px-12 py-6 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  {...register("photoUrl")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex relative items-center">
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password")}
                    required
                  />
                  <span className="absolute right-4"></span>
                </div>
                <label className="label label-text-alt link link-hover">
                  <p>
                    Already have an account?{" "}
                    <NavLink
                      to={"/login"}
                      className="text-blue-600 font-semibold"
                    >
                      LogIn
                    </NavLink>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
