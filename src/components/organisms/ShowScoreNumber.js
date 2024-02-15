import { Check } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { useMemo, useEffect } from "react";
import DangerousIcon from "@mui/icons-material/Dangerous";
export default function ShowScoreNumber({
  score,
  choiceMade,
  prevResult,
  nextResult,
  setScore,
  choice,
}) {
  const correctChoices = useMemo(
    () => score.filter((item) => item === true).length,
    [score]
  );
  const wrongChoices = useMemo(
    () => score.filter((item) => item === false).length,
    [score]
  );

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
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}  sx={{ backgroundColor: "gray", px: 2, borderRadius: 10 }}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={0.2}
          alignItems={"center"}
        >
          <Typography fontSize={"1.75rem"}>{correctChoices}</Typography>
          <Check sx={{ color: "green" }} fontSize="medium"/>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={0.2}
          alignItems={"center"}
        >
          <Typography fontSize={"1.75rem"}>{wrongChoices}</Typography>
          <DangerousIcon sx={{ color: "red" }} fontSize={'medium'}/>
        </Box>
      </Box>
      <Typography textAlign={'center'} component={"span"} color={"#262926"} fontSize={"0.75rem"}>
           Score
        </Typography>
    </Box>
  );
}
