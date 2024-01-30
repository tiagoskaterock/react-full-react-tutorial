import "../../App/styles.css"
import './styles.css';
import { useState } from 'react'

function Home() {

  const [name, setName] = useState('Mario')
  const [age, setAge] = useState(25)

  function handleClick() {
    setName('Luigi')
    setAge(21)
  } 

  return (
    <div className="content">
      <h1>{ name } Home Page</h1>
      <p>{ age } years old</p>
      <button onClick={ handleClick }>
        Click me
      </button>
    </div>
  )
}

export default Home;
