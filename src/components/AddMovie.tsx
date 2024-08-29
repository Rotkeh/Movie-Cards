import { useRef, useState } from "react";
import { IMovie } from "../interfaces";
import { MovieList } from "./MovieList";

export function AddMovie() {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const title = useRef<HTMLInputElement>(null);
  const [rating, setRating] = useState<number>(3);
  const genre = useRef<HTMLSelectElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);

  function handleAdd() {
    if (!title.current || !rating || !genre.current || !description.current) {
      return;
    }

    const newMovie: IMovie = {
      title: title.current.value,
      rating: rating,
      genre: genre.current.value,
      description: description.current.value,
      id: crypto.randomUUID(),
    };
    setMovieList([...movieList, newMovie]);
  }

  function clearInput() {
    if (!title.current || !rating || !genre.current || !description.current) {
      return;
    }
    title.current.value = "";
    setRating(3);
    genre.current.value = "";
    description.current.value = "";
  }

  function removeMovie(id: string) {
    let index = movieList.findIndex((movie) => movie.id === id);
    let updatedMovieList = [...movieList];
    updatedMovieList.splice(index, 1);
    setMovieList(updatedMovieList);
  }

  return (
    <>
      <section className="add-movie">
        <label htmlFor="movie-title">Title</label>
        <input ref={title} id="movie-title" type="text" />
        <label htmlFor="movie-rating">Rating</label>
        <input
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
          id="movie-rating"
          type="range"
          min={1}
          max={5}
        />
        <p className="rating">{rating}</p>
        <label htmlFor="movie-genre">Genre</label>
        <select ref={genre} id="movie-genre" defaultValue={""}>
          <option value="" disabled>
            Select a genre
          </option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="History">History</option>
        </select>
        <label htmlFor="movie-description">Description</label>
        <textarea ref={description} id="movie-description"></textarea>
        <button
          className="clear-movies-button"
          onClick={() => {
            console.log(movieList);
            clearInput();
          }}
        >
          Clear
        </button>
        <button
          className="add-movies-button"
          onClick={() => {
            handleAdd();
            clearInput();
          }}
        >
          Add
        </button>
      </section>
      <MovieList movies={movieList} removeMovie={removeMovie} />
    </>
  );
}
