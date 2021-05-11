import axios from "axios";
import React, { useState } from "react";

import "./App.css";
import Results from "./Results/Results";
import { Film } from "./Interfaces/MoviesInterface";
import Searchbar from "./Searchbar/Searchbar";

const App = () => {
  const [dataMovies, setDataMovies] = useState<Film[]>([]);

  const apiSearch =
    "https://api.themoviedb.org/3/search/movie?api_key=3b8a81dcf96764cb947f1f8d7f764421&language=en-US";

  const search = (e: any): void => {
    if (e.key === "Enter") {
      axios(`${apiSearch}&query=${e.target.value}`).then((data) => {
        console.log("data:", data);
        setDataMovies(data.data.results);
      });
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Ma liste de film</h1>
      </header>
      <main>
        <Searchbar search={search} />
        <Results moviesResults={dataMovies} />
      </main>
    </div>
  );
};

export default App;
