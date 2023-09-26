import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!!</h1>
      <p>Sorry. An unaccepted error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
