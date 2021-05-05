import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div>
          <h3>Name: {actor.name}</h3>
          <p>Movies: {actor.movies.map((movie, index) => (
            <li>{movie}</li>
          ))}</p>

        </div>
        ))}
    </div>
  );
};

export default Actors;
