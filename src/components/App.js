import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
        <div className="list">
          {data.map((movie, index) => (
            <MovieCard movie={movie} key={`movie-${index}`} />
          ))}
        </div>

        {/* <MovieCard /> */}
      </div>
    </div>
  );
}

export default App;
