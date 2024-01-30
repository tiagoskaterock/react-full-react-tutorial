import "../../App/styles.css"

function Post(props) {
  const post = props.post
  return (
    <div 
      key={post.id}
      className="blog-preview">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Autor:</strong> {post.author}</p>
    </div>
  );
};

export default Post;
