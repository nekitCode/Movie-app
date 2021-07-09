import {
  SEARCH_MOVIES, 
  FETCH_MOVIES, 
  FETCH_MOVIE, 
  GET_USERNAME,
  ADD_FAVORITE_MOVIE,
  DETAIL_MOVIE
} from "../type/type";
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
    case ADD_FAVORITE_MOVIE:
      return {
        ...state,
        movie: [action.payload, ...state.movie]
      };
    case DETAIL_MOVIE:
      return {
        ...state,
        detailMovie: [action.payload]
      };
    case GET_USERNAME:
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state
  }
}

export const searchMovies = (payload) => ({type: SEARCH_MOVIES, payload});
export const fetchMovie = (payload) => ({type: FETCH_MOVIES, payload});
export const fetchMovies = (payload) => ({type: FETCH_MOVIE, payload});
export const getUserName = (payload) => ({type: GET_USERNAME, payload});
export const addFavoriteMovie = (payload) => ({type: ADD_FAVORITE_MOVIE, payload});
export const detailMovie = (payload) => ({type: DETAIL_MOVIE, payload})

