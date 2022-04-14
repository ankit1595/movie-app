import { ADD_MOVIE, ADD_FAVOURITE } from "../actions";

const initialMoviesState = {
  list: [],
  favourite: [],
};

export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: [action.movie, ...state.favourite],
      };

    default:
      return state;
  }
}
