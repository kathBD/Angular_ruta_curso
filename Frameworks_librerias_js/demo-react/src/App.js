
import './App.css';
import Form from "./Form"

const movies = [
  {
    name: "Batman",
    available: 5,

  },
  {
    name: "Hombre del Norte",
    available: 4,

  },
  {
    name: "Capitan America",
    available: 10,

  },
]

function App() {
  return (
    <div>
    <h2>Películas</h2>
    {movies.map((movie) => (
      <Form movie={movie} />
    ))}
   </div>
  );
}

export default App;