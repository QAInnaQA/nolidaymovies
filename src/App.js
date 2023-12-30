import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  const [movies, setMovies] = useState(0);
  const [showText, setShowText] = useState(false);
  const [list, setList] = useState(data);
  const {id, nameMovie, year, image, synopsis} = data[movies];

  const removeMovie = (id) => {
    let newMovies = list.filter(movie => movie.id !== id);
    setList(newMovies)
  }

  const previousMovie = () => {
    setMovies((movie => {
      movie--;
      if (movie < 0) {
        return data.length - 1;
      }
      return movie;
    }))
  }

  const nextMovie = () => {
    setMovies((movie => {
      movie++;
      if (movie > data.length - 1) {
        movie = 0;
      }
      return movie;
    }))
  }

  return (
    <div>

      <div className="container">
        <h1>THE BEST {list.length} CHRISTMAS MOVIES OF ALL TIME</h1>
      </div>

      <div>
        <div className="container">
          <h2>{id}. {list[movies].nameMovie}</h2>
        </div>

        <div className="container">
          <h2>{list[movies].year}</h2>
        </div>

        <div className="container">
          <button className="btn previous" onClick={previousMovie}>Previous</button>
          <img src={list[movies].image} width="250px" alt="movie" />
          <button className="btn next" onClick={nextMovie}>Next</button>
        </div>

        <div className="container">
          <button className="btn" onClick={() => removeMovie(list[movies].id)}>Remove</button>
        </div>

        <div className="container">
          <p>{showText ? list[movies].synopsis : list[movies].synopsis.substring(0, 100) + "..."}
            <button className="btnMore" onClick={() => setShowText(!showText)}>
              {showText ? "less" : "more"}
            </button>
          </p>
        </div>

      </div>

      <div className="container">
        <button className="btn" onClick={() => setList([])}>REMOVE ALL</button>
      </div>

    </div>

  )

}

export default App;
