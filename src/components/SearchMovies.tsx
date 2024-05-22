import { FormEvent, useState } from "react";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

import useSearchMovies from "../hooks/useSearchMovies";
import Spinner from "./status/Spinner";
import FailedToFetchMovies from "./status/FailedToFetchMovies";

const SearchMovies = () => {
  const [query, setQuery] = useState("");

  const { data: movies, error, isLoading, refetch } = useSearchMovies(query);

  const searchMovies = (event: FormEvent) => {
    event.preventDefault();
    refetch();
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Jurrasic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          ?.filter((movie: Movie) => movie?.poster_path)
          ?.map((movie) => (
            <MovieCard movie={movie} key={movie?.id} />
          ))}

        {isLoading && <Spinner />}

        {error && <FailedToFetchMovies />}
      </div>
    </>
  );
};

export default SearchMovies;
