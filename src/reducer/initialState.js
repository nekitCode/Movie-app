export const initialState = {
    text: '',
    movies: [],
    movie: localStorage.getItem("movie-favorite")
    ? JSON.parse(localStorage.getItem("movie-favorite"))
    : [],
    userName: localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : '',
    detailMovie: []
  }
