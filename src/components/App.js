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

  render() {
    const { list } = this.props.store.getState(); // {list:[], favourites:[]}
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
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
