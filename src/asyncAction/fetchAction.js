import {fetchMovie} from "../reducer/searchReducer";
import {API_KEY} from "../apiKey/apikey";

export const fetchMovies = () => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => dispatch(fetchMovie(data.results)))
  }
}

// export const fetchMovies2 = (text) => {
//   return dispatch => {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`)
//       .then(response => response.json())
//       .then(data => dispatch(fetchMovie(data.results)))
//   }
// }

// https://www.omdbapi.com/?apikey=${APIKey}&s=${text} c951ff1
// `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&p
// age=1&include_adult=false&query=${e.target.value}`
// https://api.themoviedb.org/3/movie/popular?api_key=0c842c32972e9c46294c4344773
// 03b38