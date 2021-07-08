export const initialState = {
    text: '',
    movies: [],
    movie: [],
    userName: localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : '',
  }
