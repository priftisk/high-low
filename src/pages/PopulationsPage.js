import { Grid, Typography, Box } from "@mui/material";
import { capitalPopulations } from "../data/cityPopulations";
import { useEffect, useState } from "react";
import PrevPopulationCard from "../components/organisms/Populations/PrevPopulationCard";
import NextPopulationCard from "../components/organisms/Populations/NextPopulationCard";
import HigherButton from "../components/atoms/HigherButton";
import LowerButton from "../components/atoms/LowerButton";
import IsChoiceCorrect from "../components/atoms/IsChoiceCorrect";
import ShowScore from "../components/organisms/ShowScore";
export default function PopulationsPage() {
  const [populations, setPopulations] = useState(capitalPopulations.capitals);
  const [prevData, setPrevData] = useState(null);
  const [nextData, setNextData] = useState(null);
  const [choiceMade, setChoiceMade] = useState(false);
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState([]);
  async function initialFetch() {
    const prev_idx = Math.floor(Math.random() * (populations.length - 0) + 0);
    setPrevData(populations[prev_idx]);
    const next_idx = Math.floor(Math.random() * (populations.length - 0) + 0);
    setNextData(populations[next_idx]);
  }
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
    setPrevData(nextData);
    const next_idx = Math.floor(Math.random() * (populations.length - 0) + 0);
    setNextData(populations[next_idx]);
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
        prevResult={prevData?.population}
        nextResult={nextData?.population}
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
          {prevData && (
            <PrevPopulationCard
              cityName={prevData?.name}
              country={prevData?.country}
              population_formatted={prevData?.population_formatted}
            />
          )}
        </Grid>
        <Grid item mt={5}>
          <Typography color={'white'} fontSize={'3.5rem'}>VS</Typography>
        </Grid>
        <Grid item>
          {nextData && (
            <NextPopulationCard
              cityName={nextData?.name}
              country={nextData?.country}
              population_formatted={nextData?.population_formatted}
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
