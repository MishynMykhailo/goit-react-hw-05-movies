import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'pages/Loader/Loader';
import Container from 'components/Container';
import AppBar from 'components/AppBar.jsx';
const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../../pages/Cast/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <AppBar />
        </Container>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id/*" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<h1>not Found :C</h1>} />
          </Routes>
        </Container>
      </Suspense>
    </>
  );
};
