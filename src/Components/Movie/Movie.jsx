import React from 'react';
import './Movie.scss';

const IMG_API = "https://image.tmdb.org/t/p/w400";

export const Movie = ({data}) => {

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
        <p>
          {data.overview}
          <button className='movie-over__btn-favorites'>Add favorites</button>
        </p>
      </div>

    </div>
  );
}
