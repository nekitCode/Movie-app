import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from './asyncAction/fetchAction';
import {Search} from './Components/Header/Search/Search';
import {MovieContainer} from './Components/MovieCard/MovieContainer';
import {Logo} from "./Components/Header/Logo/Logo";
import {ButtonSignin} from './Components/Header/ButtonAuth/ButtonSignin/ButtonSignin';
import {ButtonSignup} from './Components/Header/ButtonAuth/ButtonSignup/ButtonSignup';
import {ButtonSignout} from './Components/Header/ButtonAuth/ButtonSignout/ButtonSignout';
import {Favorite} from './Components/Header/Favorites/Favorite';
import {History} from './Components/Header/History/History';
import {getUserName} from './reducer/searchReducer';

import './App.scss';

export const App = () => {
 
  const dispatch = useDispatch();
  const search = useSelector(state => state.search.text);
  const movies = useSelector(state => state.search.movies);
  const userName = useSelector(state => state.search.userName);

  const [test, setTest] = useState(false);
 
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(userName));
  }, [userName]);
  
  const fetchMoviesText = (text) => {
    dispatch(fetchMovies(text));
  }

  const signout = (event) => {
    event.preventDefault();
    // dispatch(getUserName(''));
    setTest(true);
  }

  return (
    <div className='wrap'>
      <header className='Header'>
        <Logo/>
        <Search searchMovie={fetchMoviesText}/>
        <div className='btn-container'>
          {userName
          ? 
          <div style={{display: 'flex', alignItems: 'center'}}>
            {userName} 
            <Favorite />
            <History />
            <ButtonSignout signout={signout} />
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
