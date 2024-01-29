import './App.css';

function App() {

  const title = "Welcome the our blog!!!"
  const likes = 50
  const person = {
    name: 'Yoshi',
    age: '33'
  }
  const link = 'https://www.google.com'

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <h2>{ person.name }</h2>
        <h3>{ person.age } years old</h3>
        <p>Liked { likes } times</p>
        <a href={ link }>Website</a>

      </div>
    </div>
  );
}

export default App;
