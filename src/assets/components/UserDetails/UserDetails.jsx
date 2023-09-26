import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { name, website } = user;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Details About User : {name}</h2>
      <p>Website: {website}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
