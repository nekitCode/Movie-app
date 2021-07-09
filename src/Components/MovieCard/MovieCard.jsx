import React from 'react';
import {Link} from 'react-router-dom';
import {IMG_API} from '../../apiKey/apiImg';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteMovie} from '../../reducer/searchReducer';
import {detailMovie} from '../../reducer/searchReducer';

import './MovieCard.scss';

export const MovieCard = ({data}) => {

  const dispatch = useDispatch();
  const movie = useSelector(state => state.search.movie) || [];

  let storedMovie = movie.find((o) => o.id === data.id);

  let storedMovieWatched = movie.find((o) => o.id === data.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

    // const cls = ['favorite-btn'];

    // if (watchlistDisabled) {
    //   cls.push('disabled');
    // }

  return (
    <div className='Movie'>
      <img src={IMG_API + data.backdrop_path} alt={data.original_title}/>

      <div className='movie-info'>
        <div className='movie-info__block-title'>
          <h3 className='movie-info__title'>{data.original_title}</h3>
        </div>
        <span className='movie-info__rating'>{data.vote_average}</span>
      </div>

      <div className='movie-over'>
        <h2>Overview:</h2>
        <div>
          {data.overview}
          <Link to={'search/' + data.id}>
            <button 
              onClick={() => dispatch(detailMovie(data))}
              className='movie-over__btn-favorites'>
              more details
            </button>
          </Link>
            <div className='favorite'>
              <button
                className='favorite-btn'
                disabled={watchlistDisabled}
                onClick={() => dispatch(addFavoriteMovie(data))}>
                Add favorite &#11088;
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
