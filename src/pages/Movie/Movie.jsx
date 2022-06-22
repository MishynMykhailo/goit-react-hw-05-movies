import PageHeading from 'components/PageHeading/PageHeading';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as movieApi from '../../service/FetchApi/FetchApi';
import s from '../Movie/Movie.module.css';
import poster from '../../images/noposter.jpg';

export default function Movies() {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    movieApi.fetchApiSearch(search.trim()).then(setMovies);
    setSearch('');
  };

  return (
    <>
      <PageHeading text={'Search movie'} />
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleSearch}
          value={search}
        />
        <button type="submit" className={s.btn}>
          <span>Search</span>
        </button>
      </form>
      {movies && (
        <>
          <hr></hr>
          <ul className={s.ul}>
            {movies.data.results.map(movie => (
              <li key={movie.id} className={s.li}>
                <Link
                  to={`/movies/${movie.id}`}
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  <img
                    className={s.img}
                    src={
                      movie.poster_path
                        ? `${BASE_IMAGE_URL}${movie.poster_path}`
                        : poster
                    }
                    alt={movie.title}
                  />
                  <p>{movie.original_title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
