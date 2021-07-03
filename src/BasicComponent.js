import React from 'react';
import {App} from './App';
import {Route, BrowserRouter} from 'react-router-dom';
import {AboutMovie} from "./Components/MovieCard/AboutMovie";

export const BasicComponent = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/search" exact component={AboutMovie} />
    </BrowserRouter>
  )
}
