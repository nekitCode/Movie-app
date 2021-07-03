import React from 'react';
import {Logo} from '../Header/Logo/Logo';
import {useSelector} from 'react-redux';

export const AboutMovie = ({data}) => {

  const movies = useSelector(state => console.log(state))

  return (
    <div className='Header'>
      <Logo/>
    </div>
  );
}
