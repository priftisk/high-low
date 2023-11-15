import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import PopulationsPage from "./pages/PopulationsPage";
import Layout from "./pages/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index path="high-low" element={<HomePage />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="population" element={<PopulationsPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
