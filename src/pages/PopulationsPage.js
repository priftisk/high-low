import { Grid } from "@mui/material";
import { capitalPopulations } from "../helper/cityPopulations";
import { useEffect, useState } from "react";
import PrevPopulationCard from "../components/Populations/PrevPopulationCard";
import NextPopulationCard from "../components/Populations/NextPopulationCard";
import HigherButton from "../components/atoms/HigherButton";
import LowerButton from "../components/atoms/LowerButton";
export default function PopulationsPage() {
  const [populations, setPopulations] = useState(capitalPopulations.capitals);
  const [prevData, setPrevData] = useState(null);
  const [nextData, setNextData] = useState(null);
  const [choiceMade, setChoiceMade] = useState(false);
  const [choice, setChoice] = useState(null)
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
              cityName={prevData.name}
              population_formatted={prevData.population_formatted}
            />
          )}
        </Grid>
        <Grid item>
          {nextData && (
            <NextPopulationCard
              cityName={nextData.name}
              population_formatted={nextData.population_formatted}
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
      ) : (null)}
    </Grid>
  );
}
