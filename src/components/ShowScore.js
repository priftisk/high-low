import { Divider, Grid } from "@mui/material";
import { useEffect } from "react";
import ChoiceItem from "./atoms/ChoiceItem";

export default function ShowScore({
  prevTemp,
  nextTemp,
  score,
  setScore,
  choiceMade,
  choice,
}) {
  const calculateScore = () => {
    if (choiceMade === true) {
      if (prevTemp && nextTemp) {
        if (choice === "higher") {
          if (prevTemp < nextTemp) {
            setScore([...score, true]);
          } else {
            setScore([...score, false]);
          }
        } else if (choice === "lower") {
          if (prevTemp > nextTemp) {
            setScore([...score, false]);
          } else {
            setScore([...score, true]);
          }
        }
      }
    }
  };
  useEffect(() => {
    calculateScore();
  }, [choiceMade]);

  if (score.length === 0) {
    return null;
  }
  return (
    <Grid container display={'flex'} direction={'row'} paddingX={4} sx={{backgroundColor:'wheat'}}>
      {score.map((item, idx) => {
        return (
          <Grid item key={idx} xs={1} flexDirection={'row'} display={'flex'}>
            <ChoiceItem score={item} index={idx}/>
          </Grid>
        );
      })}
    </Grid>
  );
}
