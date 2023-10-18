import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WeatherPage from './pages/WeatherPage';
import MoviesPage from './pages/MoviesPage';
import Header from './components/Header';
function App() {
  return (

   <BrowserRouter>
       <Header />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/weather' element={<WeatherPage />} />
      <Route path='/movies' element={<MoviesPage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
