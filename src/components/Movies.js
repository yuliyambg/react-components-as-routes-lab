import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres: {movie.genres.map((genre, index) =>(
            <li>{genre}</li>
          ))}</p>
        </div>
      ))}

    </div>
  );
};

export default Movies;
