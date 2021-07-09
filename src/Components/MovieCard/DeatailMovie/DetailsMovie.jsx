import React from 'react';
import {IMG_API} from '../../../apiKey/apiImg';

import './DetailMovie.scss';

export const DetailsMovie = ({data}) => {
  return (
    <div className='Details'>

      <div className='movie-poster'>
        <img src={IMG_API + data.poster_path} alt={data.title}/>
      </div>

      <div className="description-movie">

        <div className='description-movie__title'>
            <h2>{data.original_title}</h2>
        </div>

          <ul className="list-group">
            <li className="list-group__item">
              <strong>Released: </strong> {data.release_date}
            </li>
            <li className="list-group__item">
              <strong>Rating: </strong> {data.vote_average}
            </li>
            <li className="list-group__item-movie-description">
              <strong>Movie description: </strong> {data.overview}
            </li>
          </ul>

      </div>
    </div>
  );
}
