import { Link, useNavigate } from "react-router-dom";
import "./User.css";
import PropTypes from "prop-types";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>User Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
      <button onClick={handleShowDetails}>Click to See Details</button>
    </div>
  );
};

export default User;

User.propTypes = {
  user: PropTypes.obj,
  post: PropTypes.obj,
};
