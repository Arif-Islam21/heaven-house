// import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
// import { Helmet } from "react-helmet";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { emailSignUp } = useContext(AuthContext);
  // const { emailSignIn, googleLogIn, githubLogIn, setUser } =
  //   useContext(AuthContext);
  // const [loginError, setLoginError] = useState("");
  // const [success, setSuccess] = useState("");

  // ONSUBMIT EVENT HANDLER
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);

    emailSignUp(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });

    // emailSignIn(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //     setSuccess("User Logged in successfully");
    //     setUser(result.user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setLoginError(error.message);
    //   });
  };

  // GITHUB SIGN IN EVENT HANDLER
  // const handleGithubSignIn = () => {
  //   githubLogIn()
  //     .then((result) => {
  //       console.log(result.user);
  //       setSuccess("User Loged in with Github");
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoginError(error.message);
  //     });
  // };

  // GOOGLE SIGN IN HANDLER
  // const handleGoogleSignIn = () => {
  //   googleLogIn()
  //     .then((result) => {
  //       console.log(result.user);
  //       setSuccess("User Loged in with Google");
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoginError(error.message);
  //     });
  // };

  return (
    <div className="container mx-auto">
      {/* <Helmet>
        <title>Login Page</title>
      </Helmet> */}
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
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
                  {...register("password")}
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
            </form>
            <div className="flex justify-around mb-8">
              <button className="btn btn-outline btn-success">
                Google Login
              </button>
              <button className="btn btn-outline btn-success">
                Github login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
