import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from './asyncAction/fetchAction';
import {searchMovies} from './reducer/searchReducer';
import {Search} from './Components/Header/Search/Search';
import {MovieContainer} from './Components/MovieCard/MovieContainer';
import {Logo} from "./Components/Header/Logo/Logo";

import './App.scss';

export const App = () => {

  const dispatch = useDispatch();
  const search = useSelector(state => state.search.text);
  const movies = useSelector(state => state.search.movies);
  
  useEffect(() => {
    dispatch(fetchMovies());
  }, [])

  const searchMovie = (text) => {
    dispatch(searchMovies(text));
  }

  return (
    <div className='wrap'>
      <header className='Header'>
          <Logo />
        <Search searchMovie={searchMovie}/>
      </header>

      <div className='App-container'>
        <MovieContainer movies={movies} search={search}/>
      </div>
    </div>
  );
}
