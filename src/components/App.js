import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    //API call
    const { store } = this.props;
    store.subscribe(() => {
      console.log("store updated");
      this.forceUpdate();
    });

    store.dispatch({
      type: "ADD_MOVIE",
      movies: data,
    });

    console.log("STATE1", this.props.store.getState());
  }

  render() {
    const movies = this.props.store.getState();
    console.log("RENDER");
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
