import PostCard from "../PostCard/PostCard";

const PostList = ({ posts }) => (
  <div>
    {posts.map((p) => (
      <PostCard key={p._id} post={p} />
    ))}
  </div>
);

export default PostList;
