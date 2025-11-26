const CommentList = ({ comments }) => (
  <ul>
    {comments?.map((c) => (
      <li key={c._id}>{c.content}</li>
    ))}
  </ul>
);

export default CommentList;
