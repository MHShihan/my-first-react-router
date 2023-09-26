import "./User.css";
import PropTypes from "prop-types";

const User = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default User;

User.propTypes = {
  user: PropTypes.obj,
};
