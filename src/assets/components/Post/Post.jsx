/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";
const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <h3>Id of the post: {id} </h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <button onClick={handleShowDetails}>Click to See Details</button>
    </div>
  );
};

export default Post;
