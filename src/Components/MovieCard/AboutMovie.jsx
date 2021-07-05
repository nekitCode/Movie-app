import React from 'react';
import {Logo} from '../Header/Logo/Logo';
import {useSelector} from 'react-redux';
import {DetailsMovie} from './DetailsMovie';

export const AboutMovie = (props) => {
  const matchId = Number(props.match.params.id);
  const movies = useSelector(state => state.search.movies);

  return (
    <>
    <div className='Header'>
      <Logo/> 
    </div>
    {movies.filter((el) => {
        return matchId === el.id;
      }).map((data) => {
        return <DetailsMovie data={data}/>
      })
    }
    </>
  );
}
