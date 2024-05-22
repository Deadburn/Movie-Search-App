import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/movies";
import { Movie } from "../types";

export const useSearchMovies = (query: string) => {
  return useQuery<Movie[]>({
    queryKey: ["movies", query],
    queryFn: () => fetchMovies(query),
    enabled: false,
  });
};

export default useSearchMovies;
