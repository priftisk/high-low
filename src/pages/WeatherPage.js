import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchWeather from "../components/helper/fetch";
import { cityNames } from "../helper/cityNames";
import PrevWeatherCard from "../components/PrevWeatherCard";
import NextWeatherCard from "../components/NextWeatherCard";
import ShowScore from "../components/ShowScore";
import HigherButton from "../components/atoms/HigherButton";
import LowerButton from "../components/atoms/LowerButton";
import IsChoiceCorrect from "../components/atoms/IsChoiceCorrect";
export default function WeatherPage() {
  const [prevResult, setPrevResult] = useState("");
  const [nextResult, setNextResult] = useState("");
  const [choiceMade, setChoiceMade] = useState(false);
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState([]);
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

  useEffect(() => {
    setTimeout(() => {
      if (choiceMade === true) {
        handleNext();
      }
    }, [2500]);
  }, [choiceMade]);

  const handleNext = async () => {
    setChoiceMade(false);
    setPrevResult(nextResult);
    const next = await getRandomCity();
    setNextResult(next);
  };

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      backgroundColor="#262926"
      minHeight={"100vh"}
      alignContent={"center"}
    >
      <ShowScore
        prevTemp={prevResult?.main?.temp}
        nextTemp={nextResult?.main?.temp}
        choice={choice}
        score={score}
        setScore={setScore}
        choiceMade={choiceMade}
      />
      <Typography variant="h3" sx={{ marginLeft: "1rem", color: "white" }}>
        Σκορ: {score.filter((item) => item === true).length}
      </Typography>
      <Grid
        container
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignContent={"center"}
        justifyContent={"center"}
        mt={12}
      >
        <Grid item>
          {prevResult && (
            <PrevWeatherCard
              cityName={prevResult.name}
              country={prevResult.sys.country}
              temp={prevResult.main.temp}
              description={prevResult.weather[0].description}
            />
          )}
        </Grid>

        <Grid item>
          {nextResult && (
            <NextWeatherCard
              cityName={nextResult.name}
              country={nextResult.sys.country}
              temp={nextResult.main.temp}
              description={nextResult.weather[0].description}
              choiceMade={choiceMade}
            />
          )}
        </Grid>
      </Grid>
      {choiceMade === false ? (
        <Grid
          container
          xs={12}
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          minWidth={"100vw"}
          mt={2}
          gap={2}
        >
          <Grid item xs={1} textAlign={"center"}>
            <HigherButton
              onClick={() => {
                setChoiceMade(true);
                setChoice("higher");
              }}
            />
          </Grid>
          <Grid item xs={1} textAlign={"center"}>
            <LowerButton
              onClick={() => {
                setChoiceMade(true);
                setChoice("lower");
              }}
            />
          </Grid>
        </Grid>
      ) : choiceMade === true ? (
        <Grid
          item
          xs={12}
          direction={"flex"}
          flexDirection={"row"}
          gap={1}
          marginTop={4}
          textAlign={"center"}
        >
          <IsChoiceCorrect score={score} />
        </Grid>
      ) : null}
    </Grid>
  );
}
