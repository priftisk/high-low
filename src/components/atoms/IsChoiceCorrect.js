import { Box } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
import { Check } from "@mui/icons-material";
import DangerousIcon from "@mui/icons-material/Dangerous";

export default function IsChoiceCorrect({ score, choiceMade }) {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} py={1}>
      {score[score.length - 1] === true ? (
        <Check sx={{ color: "green", fontSize: "2rem" }} />
      ) : (
        <DangerousIcon sx={{ color: "red", fontSize: "2rem" }} />
      )}
      <CircularDeterminate />
    </Box>
  );
}
