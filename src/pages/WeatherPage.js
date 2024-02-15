import { Grid, Typography, Box } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import fetchWeather from "../components/helper/fetch";
import { cityNames } from "../data/cityNames";
import PrevWeatherCard from "../components/organisms/Weather/PrevWeatherCard";
import NextWeatherCard from "../components/organisms/Weather/NextWeatherCard";
import IsChoiceCorrect from "../components/atoms/IsChoiceCorrect";
import ShowScoreNumber from "../components/organisms/ShowScoreNumber";
import ShowHints from "../components/organisms/ShowHints";
export default function WeatherPage() {
  const [prevResult, setPrevResult] = useState("");
  const [nextResult, setNextResult] = useState("");
  const [choiceMade, setChoiceMade] = useState(false);
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState([]);
  const [hintsTaken, setHintsTaken] = useState(false);
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
    setChoice(null);
    setPrevResult(nextResult);
    const next = await getRandomCity();
    setHintsTaken(false)
    setNextResult(next);
  };

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      backgroundColor="#262926"
      minHeight={"92vh"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Box
        position={"absolute"}
        top={100}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        gap={2}
      >
        <ShowScoreNumber
          prevResult={prevResult?.main?.temp}
          nextResult={nextResult?.main?.temp}
          choice={choice}
          score={score}
          setScore={setScore}
          choiceMade={choiceMade}
        />
         <ShowHints hintsTaken={hintsTaken} setHintsTaken={setHintsTaken}/>
      </Box>
      <Grid
        container
        display={"flex"}
        // gap={2}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Grid
          item
          xs={10}
          md={2}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        >
          {prevResult && (
            <PrevWeatherCard
              cityName={prevResult.name}
              country={prevResult.sys.country}
              temp={prevResult.main.temp}
              description={prevResult.weather[0].description}
              setChoice={setChoice}
              choice={choice}
              setChoiceMade={setChoiceMade}
            />
          )}
        </Grid>
        <Grid
          item
          xs={2}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          mx={1}
        >
          {choiceMade === false ? (
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography
                color={"white"}
                textAlign={"center"}
                fontSize={"3rem"}
              >
                VS
              </Typography>
            </Box>
          ) : (
            <IsChoiceCorrect score={score} choiceMade={choiceMade} />
          )}
        </Grid>
        <Grid
          item
          xs={10}
          md={2}
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
        >
          {nextResult && (
            <NextWeatherCard
              cityName={nextResult.name}
              country={nextResult.sys.country}
              temp={nextResult.main.temp}
              description={nextResult.weather[0].description}
              choiceMade={choiceMade}
              choice={choice}
              setChoice={setChoice}
              setChoiceMade={setChoiceMade}
              hintsTaken={hintsTaken}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
