import React, {useState} from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies(){

  // states - input query, movies
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (event) => {
    event.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie/?api_key=f68360a6801690bf6794f8a1b06349d2&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    }catch(err){
      console.error(err)
    }

  }


  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">Movie Name</label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Jurrasic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
        <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

    </>
  )
}
