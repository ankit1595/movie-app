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

export function movies(state = initialMoviesState, action) {
  console.log("MOVIES REDUCER");
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

const initialSearchState = {
  results: {},
};
export function search(state = initialSearchState, action) {
  console.log("SEARCH REDUCER");
  return state;
}

const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
