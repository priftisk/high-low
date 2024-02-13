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
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      sx={{ backgroundColor: "gray", p: 2, borderRadius: 10 }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={0.2}
        alignItems={"center"}
      >
        <Check sx={{ color: "green" }} />
        <Typography fontSize={"1.5rem"}>{correctChoices}</Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={0.2}
        alignItems={"center"}
      >
        <DangerousIcon sx={{ color: "red" }} />
        <Typography fontSize={"1.5rem"}>{wrongChoices}</Typography>
      </Box>
    </Box>
    <Typography component={'span'} color={'white'} fontSize={'1.5rem'}>Σκoρ</Typography>
    </Box>
  );
}
