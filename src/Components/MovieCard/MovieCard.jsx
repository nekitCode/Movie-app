import React from 'react';
import {Link} from 'react-router-dom';
import {IMG_API} from '../../apiKey/apiImg';

import './MovieCard.scss';

export const MovieCard = ({data}) => {
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
            <button className='movie-over__btn-favorites'>more details</button>
          </Link>

          <div className="favorite">
            <button>Add favorite &#11088;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
