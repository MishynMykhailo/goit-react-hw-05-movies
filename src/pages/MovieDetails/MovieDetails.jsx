// import PageHeading from 'components/PageHeading/PageHeading';
import { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import s from '../MovieDetails/MovieDetails.module.css';
import * as movieApi from '../../service/FetchApi/FetchApi';

import poster from '../../images/noposter.jpg';
import TrailerList from 'components/TrailerList/TrailerList';

export default function MovieDetails() {
  const location = useLocation();
  const [movieCard, setMovieCard] = useState();
  const [trailerVideo, setTrailerVideo] = useState();
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  useEffect(() => {
    movieApi.fetchApiPrimaryInfo(id).then(setMovieCard);
    movieApi.getMovieTrailer(id).then(setTrailerVideo);
  }, [id]);
  console.log('trailer', trailerVideo);
  const pathBack = location?.state?.from ?? '/';

  return (
    <>
      {movieCard && (
        <>
          <div className={s.btnGoBack}>
            <NavLink to={pathBack} className={s.btnGoBackLink}>
              {'<- Go Back'}
            </NavLink>
          </div>
          <div className={s.divCard}>
            <div className={s.divImg}>
              <img
                className={s.img}
                src={
                  movieCard.data.poster_path
                    ? `${BASE_IMAGE_URL}${movieCard.data.poster_path}`
                    : poster
                }
                alt={movieCard.title}
              />
            </div>
            <div>
              <div className={s.divInfo}>
                <h2 className={s.title}>{movieCard.data.original_title}</h2>
                <h4 className={s.h4}>Rating</h4>
                <p className={s.p}>
                  {movieCard.data.vote_average.toFixed(1)}/10
                </p>
                <h4 className={s.h4}>Overview</h4>
                <p className={s.p}>{movieCard.data.overview}</p>
                <h4 className={s.h4}>Genres</h4>
                <p className={s.p}>
                  {movieCard.data.genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
              {trailerVideo?.data.results && (
                <div>
                  {trailerVideo?.data.results?.[0]?.key ? (
                    <TrailerList
                      trailerKey={trailerVideo?.data.results?.[0]?.key}
                    />
                  ) : (
                    ''
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={s.divAddition}>
            <h2>Addition Information</h2>
            <ul>
              <li>
                <NavLink
                  to="cast"
                  className={({ isActive }) =>
                    isActive ? s.activeNavLink : s.navLink
                  }
                  state={{ from: pathBack }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className={({ isActive }) =>
                    isActive ? s.activeNavLink : s.navLink
                  }
                  state={{ from: pathBack }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}
