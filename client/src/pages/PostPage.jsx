import { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageData = null;
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const uploadRes = await API.post("/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        imageData = uploadRes.data;
      }

      await API.post("/posts", {
        title,
        body,
        author: user.id,
        image: imageData,
      });

      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPost;
