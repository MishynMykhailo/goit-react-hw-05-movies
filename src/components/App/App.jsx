import AppBar from 'components/AppBar.jsx/AppBar';
import HomeViews from 'components/pages/HomeViews';
import { Routes, Route } from 'react-router-dom';
export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomeViews />} />
        <Route element={<h1>not Found :C</h1>} />
      </Routes>
    </>
  );
};
