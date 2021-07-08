import {fetchMovie} from "../reducer/searchReducer";
import {API_KEY} from "../apiKey/apikey";

// export const fetchMovies = () => {
//   return dispatch => {
  //     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
//       .then(response => response.json())
//       .then(data => dispatch(fetchMovie(data.results)))
//       .catch(err => console.log(err));
//   }
// }

export const fetchMovies = (text) => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${text}`)
    .then(response => response.json())
    .then(data => dispatch(fetchMovie(data.results)))
      .catch(err => console.log(err));
    }
  }
  
// export const fetchMovies3 = (id) => {
//   return dispatch => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
//       .then(response => response.json())
//       .then(data => dispatch(fetchMovies(data.results)))
//       .catch(err => console.log(err));
//   }
// }
