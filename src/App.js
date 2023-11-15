import HomePage from "./pages/HomePage";
import { Routes, Route, HashRouter } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import PopulationsPage from "./pages/PopulationsPage";
import Layout from "./pages/Layout";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index path="high-low" element={<HomePage />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="population" element={<PopulationsPage />} />
        </Route>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
