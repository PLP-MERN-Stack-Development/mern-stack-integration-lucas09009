import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 hover:scale-105 transition-transform duration-300">
      {post.image?.url && (
        <img
          src={post.image.url}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.body.slice(0, 120)}...</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Auteur: {post.author.username}</span>
          <span>{post.likes} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
