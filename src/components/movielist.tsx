"use client";
import moviesdata from "../rawdata/movies.json";
import MovieCard from "./moviecard";
import popularmovies from "../rawdata/tendingMovies.json";
const MovieList = () => {
  var tmdbMovieAPI = "https://image.tmdb.org/t/p/w500";
  var popularMoviesJson = popularmovies.results;
  var updatedPopularMovies = popularMoviesJson.map((item) => {
    return {
      title: item.title,
      description: item.overview,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl: tmdbMovieAPI + item.poster_path,
      genre: "Comedy",
      duration: "10 minutes",
    };
  });
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          Trending
        </p>
        <div className="grid grid-cols-4 gap-2">
          {moviesdata.map((movie, id) => (
            <MovieCard key={id} data={movie} />
          ))}
        </div>
      </div>

      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          Popular
        </p>
        <div className="grid grid-cols-4 gap-2">
          {updatedPopularMovies.map((movie, id) => (
            <MovieCard key={id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
