import { useState } from 'react'
import { blog } from "./blogData"
import Post from "../Post"

function Blog(props) {

  const [posts, setPosts] = useState(blog)

  return (
    <>
      {posts.map(post => (
        <Post post={ post } />
      ))}
    </>
  )

}

export default Blog;


