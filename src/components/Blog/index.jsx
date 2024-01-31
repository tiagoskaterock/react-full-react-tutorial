import { useState, useEffect } from 'react'
import { blog } from "./blogData"
import Post from "../Post"

function Blog(props) {

  const [posts, setPosts] = useState(blog)

  function handleDelete(id) {
    const newPosts = posts.filter(post => post.id != id)
    setPosts(newPosts)
  }

  function handleName() {
    setName('luigi')
  }

  const[name, setName] = useState('mario')

  useEffect(() => {
    console.log('useEffect')
    console.log(name)
  }, [name])

  return (
    <>
      <h1>{ name }</h1>
      <button onClick={ () => setName('luigi') }>Click</button>
      {posts.map(post => (
        <Post post={ post } key={ post.id } handleDelete={handleDelete} />
      ))}      
    </>
  )

}

export default Blog;
