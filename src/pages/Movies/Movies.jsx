import PageHeading from 'components/PageHeading/PageHeading';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as movieApi from '../../service/FetchApi/FetchApi';
import s from '../Movies/Movies.module.css';
import poster from '../../images/noposter.jpg';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//Notify options
Notify.init({
  width: '300px',
  position: 'right-bottom',
  closeButton: false,
  clickToClose: true,
  timeout: 2000,
});

export default function Movies() {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const paramsSearch = searchParams.get('query');

  useEffect(() => {
    if (paramsSearch) {
      movieApi.fetchApiSearch(paramsSearch.trim()).then(setMovies);
    }
  }, [paramsSearch]);
  const handleSearch = e => {
    setSearch(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return Notify.failure('Oops, not found, try again😢');
    }
    setSearchParams(`query=${search.trim()}`);

    movieApi.fetchApiSearch(search.trim()).then(movies => {
      if (movies.data.results.length === 0) {
        return Notify.failure('Oops, not found, try again😢');
      }
      return setMovies(movies);
    });
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
          <hr />
          <ul className={s.ul}>
            {movies.data.results.map(movie => (
              <li key={movie.id} className={s.li}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
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
