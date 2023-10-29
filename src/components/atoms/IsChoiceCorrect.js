import { Typography } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
import { Fragment } from "react";
export default function IsChoiceCorrect({ score }) {
  return (
    <Fragment>
      <Typography
        variant="h4"
        sx={{ color: score[score.length - 1] === true ? "green" : "red" }}
      >
        {score[score.length - 1] === true ? "Σωστή" : "Λάθος"}
      </Typography>
      <Typography variant="h4">επιλογή</Typography>
      <CircularDeterminate />
    </Fragment>
  );
}
