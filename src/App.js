import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './views/Home/HomePage';
import AboutPage from './views/About/AboutPage';
import MoviePage from './views/Movie/MoviePage';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
