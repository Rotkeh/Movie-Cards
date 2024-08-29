import { IMovie } from "../interfaces";

export function MovieCard({
  movie,
  removeMovie,
}: {
  movie: IMovie;
  removeMovie: (id: string) => void;
}) {
  return (
    <li className="movie-card" onClick={() => removeMovie(movie.id)}>
      <div className="card-container">
        <h2 className="title">{movie.title}</h2>
        <p className="rating">{movie.rating}/5</p>
      </div>
      <h4 className="genre">{movie.genre}</h4>
      <p className="description">{movie.description}</p>
    </li>
  );
}
