import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";
const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>Our Users: {users.length}</h1>
      <p>Our users are very polite and gentle</p>
      <div className="container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
