import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/comments/${postId}`, { content, author: user.id });
      setContent("");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  if (!user) return <p>Login to comment</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Write a comment..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
