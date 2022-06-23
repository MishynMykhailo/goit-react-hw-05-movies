import AppBar from 'components/AppBar.jsx/AppBar';
import Container from 'components/Container/Container';
import Home from 'pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from 'pages/Movie/Movie';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import { Suspense } from 'react';
import Loader from 'pages/Loader/Loader';
export const App = () => {
  return (
    <>
      <Container>
        <AppBar />
      </Container>
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<h1>not Found :C</h1>} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
