import { ADD_MOVIE } from "../actions";

export default function movies(state = [], action) {
  if (action.type === ADD_MOVIE) {
    return action.movies;
  }
  return state;
}
