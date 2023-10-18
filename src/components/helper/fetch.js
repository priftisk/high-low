import axios from 'axios'
export default async function fetchWeather({ query }) {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`
      );
  
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }