import React from 'react';
import {App} from './App';
import {Route, BrowserRouter} from 'react-router-dom';
import {AboutMovie} from "./Components/MovieCard/AboutMovie";
import {Signup} from './Components/Auth/Signup/Signup';
import {Signin} from './Components/Auth/Signin/Signin';

export const BasicComponent = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/search/:id" exact component={AboutMovie} />
        <Route path='/signup' exact component={Signup}/>
        <Route path='/signin' exact component={Signin}/>
    </BrowserRouter>
  )
}
