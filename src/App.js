import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies2} from './asyncAction/fetchAction';
import {Search} from './Components/Header/Search/Search';
import {MovieContainer} from './Components/MovieCard/MovieContainer';
import {Logo} from "./Components/Header/Logo/Logo";
import {ButtonSignin} from './Components/Header/ButtonAuth/ButtonSignin/ButtonSignin';
import {ButtonSignup} from './Components/Header/ButtonAuth/ButtonSignup/ButtonSignup';
import {ButtonSignout} from './Components/Header/ButtonAuth/ButtonSignout/ButtonSignout';

import './App.scss';

export const App = (props) => {

  const userName = props.location.state;
  const [state, setstate] = useState();

  useEffect(() => {

  }, [])

  const dispatch = useDispatch();
  const search = useSelector(state => state.search.text);
  const movies = useSelector(state => state.search.movies);

  const fetchMovies = (text) => {
    dispatch(fetchMovies2(text));
  }

  return (
    <div className='wrap'>
      <header className='Header'>
        <Logo/>
        <Search searchMovie={fetchMovies}/>
        <div className='btn-container'>
          {userName
          ? 
          <div style={{display: 'flex', alignItems: 'center'}}>
            {userName} 
            <ButtonSignout />
          </div> 
          :
          <div style={{display: 'flex'}}>
            <ButtonSignin />
            <ButtonSignup />
          </div>
          }
        </div>
      </header>

      <div className='App-container'>
        <MovieContainer movies={movies} search={search}/>
      </div>
    </div>
  );
}
