import React from "react";

import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions/index";

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
    const { favourite } = this.props.store.getState();

    const index = favourite.indexOf(movie);

    if (index !== -1) {
      // movie already in favourite
      return true;
    }
    return false;
  };

  // handleFavouriteTab = () => {
  //   const { favourite } = this.props.store.getState();

  //   <div className="list">
  //     {favourite.map((movie, index) => (
  //       <MovieCard
  //         movie={movie}
  //         key={`movie-${index}`}
  //         dispatch={this.props.store.dispatch}
  //         isMovieFavourite={this.isMovieFavourite(movie)}
  //       />
  //     ))}
  //   </div>;
  // };

  render() {
    const { list } = this.props.store.getState(); // {list:[], favourites:[]}
    console.log("RENDER", this.props.store.getState());
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isMovieFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
