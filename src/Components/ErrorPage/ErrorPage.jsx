import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl">404</h2>
      <p>Page Not Found</p>
      <Link to={-1}>
        <button className="btn btn-outline my-4 btn-primary">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
