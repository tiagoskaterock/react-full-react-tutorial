import { useState, useEffect } from 'react'
import { blog } from "./blogData"
import Post from "../Post"

function Blog(props) {

  const [posts, setPosts] = useState(blog)

  function handleDelete(id) {
    const newPosts = posts.filter(post => post.id != id)
    setPosts(newPosts)
  }

  useEffect(() => {
    console.log(posts)
  })

  return (
    <>
      {posts.map(post => (
        <Post post={ post } key={ post.id } handleDelete={handleDelete} />
      ))}
    </>
  )

}

export default Blog;
