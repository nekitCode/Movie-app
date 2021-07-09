import React from 'react';
import {App} from './App';
import {Route, BrowserRouter} from 'react-router-dom';
import {AboutMovie} from "./Components/MovieCard/AboutMovie";
import {Signup} from './Components/Auth/Signup/Signup';
import {Signin} from './Components/Auth/Signin/Signin';
import {FavoriteList} from './Components/Header/Favorites/FavoriteList';

export const BasicComponent = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/search/:id" component={AboutMovie} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/favorite' component={FavoriteList} />
    </BrowserRouter>
  )
}
