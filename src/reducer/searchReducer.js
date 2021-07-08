import {SEARCH_MOVIES, FETCH_MOVIES, FETCH_MOVIE} from "../type/type";
import {initialState} from "./initialState";

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        text: action.payload
      }
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case FETCH_MOVIE:
      return {
        ...state,
        movie: [...state.movie, action.payload]
      };
    default:
      return state
  }
}

export const searchMovies = (payload) => ({type: SEARCH_MOVIES, payload});
export const fetchMovie = (payload) => ({type: FETCH_MOVIES, payload});
export const fetchMovies = (payload) => ({type: FETCH_MOVIE, payload});
