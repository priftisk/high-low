import { Grid, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import fetchWeather from "../components/helper/fetch";
import { cityNames } from "../data/cityNames";
import PrevWeatherCard from "../components/organisms/Weather/PrevWeatherCard";
import NextWeatherCard from "../components/organisms/Weather/NextWeatherCard";
import ShowScore from "../components/organisms/ShowScore";
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
      minHeight={"90vh"}
      alignContent={"center"}
    >
      <ShowScore
        prevResult={prevResult?.main?.temp}
        nextResult={nextResult?.main?.temp}
        choice={choice}
        score={score}
        setScore={setScore}
        choiceMade={choiceMade}
      />
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
        <Grid item mt={5}>
          <Typography color={'white'} fontSize={'3.5rem'}>VS</Typography>
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
          <Grid item xs={4} md={1} textAlign={"center"}>
            <HigherButton
              onClick={() => {
                setChoiceMade(true);
                setChoice("higher");
              }}
            />
          </Grid>
          <Grid item xs={4} md={1} textAlign={"center"}>
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
          <IsChoiceCorrect score={score} choiceMade={choiceMade}/>
        </Grid>
      ) : null}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="10vh"
      >
        <Typography
          variant="h3"
          fontWeight={"bold"}
          sx={{
            color: "black",
            background: "#7e8780",
            minWidth: 200,
            width: 220,
            borderRadius: "1rem",
            padding: 1,
          }}
        >
          Σκορ: {score.filter((item) => item === true).length}
        </Typography>
      </Box>
    </Grid>
  );
}
