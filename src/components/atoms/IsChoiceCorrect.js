import { Typography } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
import { Fragment, useEffect, useState } from "react";
export default function IsChoiceCorrect({ score, choiceMade }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (choiceMade === true) {
      setTimeout(() => {
        setShow(true);
      }, 1000);
    }
  }, [choiceMade]);
  if (show) {
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
}
