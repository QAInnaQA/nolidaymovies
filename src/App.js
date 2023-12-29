import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  //если хочу отобразить первый элемент, то нужно указать useState(0)?
  const [movies, setMovies] = useState(data); 
  const [showText, setShowText] = useState(false)


  const removeMovie = (id) => {
    let newMovies = movies.filter(movie => movie.id !==id);
    setMovies(newMovies)
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }

  // const previousMovie = () => {
  //   setMovie((movie => {
  //     movie --;
  //     if (movie < 0) {
  //       return data.length-1;
  //     }
  //     return movie;
  //   }))
  // }

  // const nextMovie = () => {
  //   setMovie((movie =>{
  //     movie ++;
  //     if (movie > data.length -1) {
  //       movie = 0;
  //     }
  //     return movie;
  //   }))
  // }

  return(
<div>

  <div className="container">
    <h1>THE BEST {movies.length} CHRISTMAS MOVIES OF ALL TIME</h1>
  </div>

  {movies.map((element => {
    // если хочу отображать слайдами, то нужно указать element[nameMovie]?
    const {id, nameMovie, year, image, synopsis, showMore} = element;

    return(<div key={id}>

      <div className="container">
        <h2>{id}. {nameMovie}</h2>
      </div>

      <div className="container">
        <h2>{year}</h2>
      </div>

      <div className="container">
      {/* <button className="btn previous" onClick={previousMovie}>Previous</button> */}
        <img src={image} width="250px" alt="movie"/>
      {/* <button className="btn next" onClick={nextMovie}>Next</button> */}
      </div>

      <div className="container">
        <button className="btn" onClick={() => removeMovie(id)}>Remove</button>
      </div>

      <div className="container">
        <p>{showMore ? synopsis : synopsis.substring(0,100) + "..."}
        <button className="btnMore" onClick={() => showTextClick(element)}>{showMore ? "less" : "more"}</button>
        </p>
      </div>

    </div>)
  }))}
      <div className="container">
        <button className="btn" onClick={() => setMovies([])}>REMOVE ALL</button>
      </div>

</div>

  )

}

export default App;