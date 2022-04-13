import { ADD_MOVIE } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIE) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
