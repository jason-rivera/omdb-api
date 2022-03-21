import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './views/Home/HomePage';
import AboutPage from './views/About/AboutPage';
import MoviePage from './views/Movie/MoviePage';
import TweeterPage from './views/Tweeter/TweeterPage';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tweeter" element={<TweeterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
