import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>ID of the Post: {id}</h2>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
