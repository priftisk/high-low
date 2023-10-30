import { Grid } from "@mui/material";
import MainWeatherPage from "../MainPageWeather";
import MainPageMovies from "./MainPagePopulations";
export default function MainPageCards() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="#262926"
      direction={"row"}
      gap={1}
      minHeight={"100vh"}
    >
      <MainWeatherPage />

      <MainPageMovies />
    </Grid>
  );
}
