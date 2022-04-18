// {
//     type: 'ADD_MOVIE',
//     movies: []
// }

//action types
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIE,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => console.log(movie));
    // dispatch({type:ADD_SEARCH_RESULT, movie})
  };
}
