// import PageHeading from 'components/PageHeading/PageHeading';
import { useEffect, useState } from 'react';
import { NavLink, useParams, Route, Routes } from 'react-router-dom';
import s from '../MovieDetails/MovieDetails.module.css';
import * as movieApi from '../../service/FetchApi/FetchApi';
import Reviews from 'pages/Reviews/Reviews';
import Cast from 'pages/Cast/Cast';
import poster from '../../images/noposter.jpg';

export default function MovieDetails() {
  const [movieCard, setMovieCard] = useState();
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();

  useEffect(() => {
    movieApi.fetchApiPrimaryInfo(id).then(setMovieCard);
  }, [id]);
  if (movieCard) {
  }
  return (
    <>
      {movieCard && (
        <>
          <div className={s.divCard}>
            <div className={s.divImg}>
              <img
                className={s.img}
                src={
                  movieCard.poster_path
                    ? `${BASE_IMAGE_URL}${movieCard.poster_path}`
                    : poster
                }
                alt={movieCard.title}
              />
            </div>
            <div className={s.divInfo}>
              <h2 className={s.title}>{movieCard.data.original_title}</h2>
              <h4 className={s.h4}>Rating</h4>
              <p className={s.p}>{movieCard.data.vote_average}/10</p>
              <h4 className={s.h4}>Overview</h4>
              <p className={s.p}>{movieCard.data.overview}</p>
              <h4 className={s.h4}>Genres</h4>
              <p className={s.p}>
                {movieCard.data.genres.map(genre => genre.name).join(', ')}
              </p>
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
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="cast" element={<Cast movieId={id} />} />
            <Route path="reviews" element={<Reviews movieId={id} />} />
          </Routes>
        </>
      )}
    </>
  );
}
