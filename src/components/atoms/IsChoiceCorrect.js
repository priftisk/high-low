import { Box } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
import { Check } from "@mui/icons-material";
import DangerousIcon from "@mui/icons-material/Dangerous";

export default function IsChoiceCorrect({ score, choiceMade }) {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
      {score[score.length - 1] === true ? (
        <Check sx={{ color: "green", fontSize: "4rem" }} />
      ) : (
        <DangerousIcon sx={{ color: "red", fontSize: "4rem" }} />
      )}
      <CircularDeterminate />
    </Box>
  );
}
