import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div>
          <h3> Name: {director.name}</h3>
          <p>Movies: {director.movies.map((movie, index) => (
            <li>{movie}</li>
          ))}</p>
          </div>
      ))}
    </div>
  );
}

export default Directors
