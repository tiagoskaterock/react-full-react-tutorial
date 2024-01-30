import "../../App/styles.css"
import './styles.css';

function Home() {

  function handleClick() {
    alert('clicked')
  } 

  function handleClickAgain(name) {
    alert('Hello ' + name + '!')
  } 

  return (
    <div className="content">
      <h1> Home Page </h1>
      <button onClick={ handleClick }>
        Click me
      </button>

      <button onClick={ () => { handleClickAgain('Tiago') } }>
        Click me again
      </button>
    </div>
  )
}

export default Home;
