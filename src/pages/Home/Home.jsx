import PageHeading from 'components/PageHeading/PageHeading';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as movieApi from '../../service/FetchApi/FetchApi';
import s from '../Home/Home.module.css';

export default function Home() {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [trendMovies, setTrendMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    movieApi.fetchApiTrends().then(setTrendMovies);
  }, []);
  return (
    <>
      <PageHeading text={'Trending today'} />
      <ul className={s.ul}>
        {trendMovies &&
          trendMovies.data.results.map(movie => (
            <li key={movie.id} className={s.li}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                style={{ color: 'black', textDecoration: 'none' }}
              >
                <img
                  className={s.img}
                  src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.original_title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
