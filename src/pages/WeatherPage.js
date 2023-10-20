import { Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchWeather from "../components/helper/fetch";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { cityNames } from "../helper/cityNames";
import PrevWeatherCard from "../components/PrevWeatherCard";
import NextWeatherCard from "../components/NextWeatherCard";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function WeatherPage() {
  const [prevResult, setPrevResult] = useState("");
  const [nextResult, setNextResult] = useState("");
  const [choiceMade, setChoiceMade] = useState(false);
  const [choice, setChoice] = useState(null);
  async function getRandomCity() {
    const idx = Math.floor(Math.random() * (cityNames.length - 0) + 0);
    const weatherData = await fetchWeather({ query: cityNames[idx] });
    if (weatherData) {
      return weatherData;
    }
  }
  const initialFetch = async () => {
    const prev = await getRandomCity();
    setPrevResult(prev);
    const next = await getRandomCity();
    setNextResult(next);
  };
  useEffect(() => {
    initialFetch();
  }, []);

  
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      backgroundColor="#e8e4da"
      minHeight={"100vh"}
      alignContent={"center"}
    >
      <Grid item>
        <Typography
          sx={{
            fontSize: "3rem",
            textAlign: "center",
            fontWeight: 800,
            letterSpacing: 6,
            color: "white",
            background: "#471873",
            marginTop: 2,
            borderRadius: 2,
            paddingX: 2,
          }}
        >
          WEATHER
        </Typography>
      </Grid>

      <Grid
        container
        direction={"row"}
        gap={2}
        alignContent={"center"}
        justifyContent={"center"}
        mt={12}
      >
        <Grid item>
          {prevResult && (
            <PrevWeatherCard
              cityName={prevResult.name}
              temp={prevResult.main.temp}
              description={prevResult.weather[0].description}
            />
          )}
        </Grid>
        <Grid item>
          {nextResult && (
            <NextWeatherCard
              cityName={nextResult.name}
              temp={nextResult.main.temp}
              description={nextResult.weather[0].description}
              choiceMade={choiceMade}
            />
          )}
        </Grid>
      </Grid>

      <Grid
        container
        xs={6}
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        minWidth={"100vw"}
        mt={2}
      >
        <Grid item xs={1} textAlign={"center"}>
          <Typography>Higher</Typography>
          <IconButton
            size="large"
            disableRipple
            disableFocusRipple
            onClick={() => {
              setChoiceMade(true);
              setChoice("higher");
            }}
          >
            <ArrowUpwardIcon
              sx={{
                color: "green",
                padding: "2rem",
                background: "#c9b7b5",
                borderRadius: "1rem",
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={1} textAlign={"center"}>
          <Typography>Lower</Typography>
          <IconButton
            size="large"
            disableFocusRipple
            disableRipple
            onClick={() => {
              setChoiceMade(true);
              setChoice("lower");
            }}
          >
            <ArrowDownwardIcon
              sx={{
                color: "red",
                padding: "2rem",
                background: "#c9b7b5",
                borderRadius: "1rem",
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
