import "../../App/styles.css"

function Post(props) {
  const { post, handleDelete } = props;  

  return (
    <div 
      className="blog-preview">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Autor:</strong> {post.author}</p>
      <button onClick={ () => handleDelete(post.id) }>Delete</button>
    </div>
  );
};

export default Post;
