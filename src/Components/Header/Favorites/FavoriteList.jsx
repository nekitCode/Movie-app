import React from 'react';
import {useSelector} from 'react-redux';
import {Logo} from '../Logo/Logo';
import {FavoriteMovieCard} from './FavoriteMovieCard';

export const FavoriteList = () => {

  const movie = useSelector(state => state.search.movie);
  const userName = useSelector(state => state.search.userName);

  return (
    <div>
      <div className='Header'>
        <Logo/>
        {userName}
      </div>
      {movie.length > 0 ? (
          <div>
            {movie.map((movie) => (
              <FavoriteMovieCard data={movie} key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 style={{marginTop: 25, textAlign: 'center'}}>
            No movies in your list! Add some!
          </h2>
        )}
    </div>
  );
}
