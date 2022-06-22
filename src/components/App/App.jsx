import AppBar from 'components/AppBar.jsx/AppBar';
import Container from 'components/Container/Container';
import Home from 'pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from 'pages/Movie/Movie';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <>
      <Container>
        <AppBar />
      </Container>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id/*" element={<MovieDetails />} />
          <Route path="*" element={<h1>not Found :C</h1>} />
        </Routes>
      </Container>
    </>
  );
};
