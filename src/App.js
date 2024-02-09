import HomePage from "./pages/HomePage";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import PopulationsPage from "./pages/PopulationsPage";
import Layout from "./pages/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/high-low' element={<Layout />} >
          <Route index path="" element={<HomePage />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="population" element={<PopulationsPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
