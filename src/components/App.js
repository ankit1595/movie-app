import React from "react";

import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions/index";

class App extends React.Component {
  componentDidMount() {
    //API call
    const { store } = this.props;
    store.subscribe(() => {
      console.log("store updated");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    console.log("STATE1", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourite.indexOf(movie);

    if (index !== -1) {
      // movie already in favourite
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  };

  render() {
    const { movies, search } = this.props.store.getState(); //{movies:{}, search:{}}
    const { list, favourite, showFavourite } = movies; // {list:[], favourites:[],showFavourite}
    console.log("RENDER", this.props.store.getState());

    const displayMovies = showFavourite ? favourite : list;
    return (
      <div>
        <Navbar dispatch={this.props.store.dispatch} search={search} />
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
                dispatch={this.props.store.dispatch}
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

export default App;
