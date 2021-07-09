import React from 'react';
import {Logo} from '../Header/Logo/Logo';
import {useSelector} from 'react-redux';
import {DetailsMovie} from './DeatailMovie/DetailsMovie';

export const AboutMovie = (props) => {

  const detailMovie = useSelector(state => state.search.detailMovie);
  const userName = useSelector(state => state.search.userName);

  return (
    <>
      <div className='Header'>
        <Logo/> {userName}
      </div>
      {detailMovie.map((data) => {
        return <DetailsMovie key={data.id} data={data}/>
      })
      }
    </>
  );
}
