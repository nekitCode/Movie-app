import React from 'react';
import {MovieCard} from './MovieCard';

export const MovieContainer = ({movies, search}) => {
  return ( 
    <> 
      {movies === undefined
        ? <div>Search for a movie</div>
        : movies.filter((titleMovie) => {
          return titleMovie
            .original_title
            .toLowerCase()
            .includes(search.toLowerCase())
        }).map((movies) => {
          return <MovieCard key={movies.id} data={movies}/>
      })} 
    </>
  )
}