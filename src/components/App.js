import React from "react";
import { connect } from "react-redux";

import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions/index";

class App extends React.Component {
  componentDidMount() {
    //API call
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;

    const index = movies.favourite.indexOf(movie);

    if (index !== -1) {
      // movie already in favourite
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val));
  };

  render() {
    const { movies, search } = this.props; //{movies:{}, search:{}}
    const { list, favourite, showFavourite } = movies; // {list:[], favourites:[],showFavourite}
    console.log("RENDER", this.props);

    const displayMovies = showFavourite ? favourite : list;
    return (
      <div>
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourite ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.dispatch}
                isMovieFavourite={this.isMovieFavourite(movie)}
              />
            ))}
            <div>
              {displayMovies.length === 0 ? (
                <div className="no-movies">No movies to display!</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedAppcomponent = connect(mapStateToProps)(App);

export default connectedAppcomponent;
