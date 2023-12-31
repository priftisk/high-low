import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import ChoiceItem from "../atoms/ChoiceItem";

export default function ShowScore({
  prevResult,
  nextResult,
  score,
  setScore,
  choiceMade,
  choice,
}) {
  const calculateScore = () => {
    if (choiceMade === true) {
      if (prevResult && nextResult) {
        if (choice === "higher") {
          if (prevResult < nextResult) {
            setScore([...score, true]);
          } else {
            setScore([...score, false]);
          }
        } else if (choice === "lower") {
          if (prevResult > nextResult) {
            setScore([...score, true]);
          } else {
            setScore([...score, false]);
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
    <Paper
      sx={{
        display: "flex",
        width: "97.8vw",
        backgroundColor: "#7e8780",
        paddingY: ".75rem",
        paddingInline: "1rem",
      }}
    >
      <Grid
        container
        display={"flex"}
        direction={"row"}
        spacing={2}
        width={"100%"}
        paddingX={2}
      >
        {score.map((item, idx) => {
          return (
            <Grid item key={idx} xs={1} flexDirection={"row"} display={"flex"}>
              <ChoiceItem score={item} index={idx} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
