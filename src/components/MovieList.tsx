import { IMovie } from "../interfaces";
import { MovieCard } from "./MovieCard";

export function MovieList({
  movies,
  removeMovie,
}: {
  movies: IMovie[];
  removeMovie: (id: string) => void;
}) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => {
        return (
          <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} />
        );
      })}
    </ul>
  );
}
