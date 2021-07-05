import React from 'react';
import {IMG_API} from '../../apiKey/apiImg';

export const DetailsMovie = ({data}) => {
  return (
    <>
      <div className='Movie-poster'>
        <img src={IMG_API + data.poster_path} alt={data.title}/>
      </div>
      <div className="col-md-8">
        <div className='description'>
            <h2>{data.original_title}</h2>
        </div>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Released:</strong> {data.release_date}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {data.vote_average}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {data.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {data.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {data.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {data.Actors}
              </li>
            </ul>
          </div>

    </>
  );
}

// adult: false
// backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg"
// genre_ids: (3) [28, 12, 80]
// id: 385128
// original_language: "en"
// original_title: "F9"
// overview: "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother."
// popularity: 3231.578
// poster_path: "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg"
// release_date: "2021-05-19"
// title: "F9"
// video: false
// vote_average: 7.7
// vote_count: 370