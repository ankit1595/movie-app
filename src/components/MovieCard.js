import React from "react";

import { addFavourite, removeFromFavourite } from "../actions";
class MovieCard extends React.Component {
  handleClickFavourite = () => {
    const { movie, dispatch } = this.props;
    dispatch(addFavourite(movie));
  };

  handleClickUnfavourite = () => {
    const { movie, dispatch } = this.props;
    dispatch(removeFromFavourite(movie));
  };

  render() {
    const { movie, isMovieFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isMovieFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleClickUnfavourite}
              >
                Unfavourite{" "}
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleClickFavourite}
              >
                Add to Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
