import moviesdata from "../rawdata/movies.json"
import MovieCard from "./moviecard";
const MovieList = ()=>{
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
          <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Trending</p>
            <div className="grid grid-cols-4 gap-2">
              {moviesdata.map((movie,id) => (
                <MovieCard key={id} data={movie} />
              ))}
            </div>
          </div>
        </div>
      );
}


export default MovieList