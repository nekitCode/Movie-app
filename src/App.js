import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from './asyncAction/fetchAction';
import {searchMovies} from './reducer/searchReducer';
import {Search} from './Components/Search/Search';
import {Movie} from './Components/Movie/Movie';

import './App.scss';

export const App = () => {

  const dispatch = useDispatch();
  const search = useSelector(state => state.search.text);
  const movies = useSelector(state => state.search.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [])

  const serachMovie = (text) => {
    dispatch(searchMovies(text));
  }

  return (
    <div className='wrap'>
      <Search serachMovie={serachMovie}/>

      <div className='App-container'>

        {movies.filter((titleMovie) => {
          return titleMovie
            .original_title
            .toLowerCase()
            .includes(search.toLowerCase())
        }).map((movies) => {
          return <Movie key={movies.id} data={movies}/>
        })}

      </div>
    </div>
  );
}
