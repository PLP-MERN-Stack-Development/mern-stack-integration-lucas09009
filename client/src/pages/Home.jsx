import React, { useEffect, useState } from "react";
import PostList from "../components/PostList/PostList";
import axios from "../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading)
    return <div className="text-center mt-20 text-xl">Chargement des posts...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Bienvenue sur le Blog
      </h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
