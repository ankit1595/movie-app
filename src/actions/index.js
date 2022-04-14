// {
//     type: 'ADD_MOVIE',
//     movies: []
// }

//action types
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVOURITE = "ADD_FAVOURITE";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIE,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}
