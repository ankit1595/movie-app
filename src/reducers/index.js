import {
  ADD_MOVIE,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITE,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourite: [],
  showFavourite: false,
};

export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourite: [action.movie, ...state.favourite],
      };

    case REMOVE_FROM_FAVOURITE:
      const filteredArray = state.favourite.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourite: filteredArray,
      };

    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourite: action.val,
      };

    default:
      return state;
  }
}
