import React, { FC } from "react";
import { Film } from "../Interfaces/MoviesInterface";
import "./Result.scss";
interface Props {
  moviesResults: Film[];
}
const Results: FC<Props> = ({ moviesResults }) => {
  console.log("moviesResults:", moviesResults);
  return (
    <ul className='movieList'>
      {moviesResults.map((movieItem: Film) => {
        return (
          <li key={movieItem.id} className='movieList__item'>
            <h2> {movieItem.original_title}</h2>
            {movieItem.poster_path ? (
              <img
                key={movieItem.id}
                src={`http://image.tmdb.org/t/p/w185${movieItem.poster_path}`}
                alt={movieItem.original_title}
              />
            ) : (
              <div className='noCover'>{movieItem.original_title}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
