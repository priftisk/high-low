import { Typography, Box } from "@mui/material";
import CircularDeterminate from "./CircularDeterminate";
export default function IsChoiceCorrect({ score, choiceMade }) {
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   if (choiceMade === true) {
  //     setTimeout(() => {
  //       setShow(true);
  //     }, 2000);
  //   }
  // }, [choiceMade]);
  // if (show) {
    return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography
          variant="h4"
          sx={{ color: score[score.length - 1] === true ? "green" : "red" }}
        >
          {score[score.length - 1] === true ? "Σωστή" : "Λάθος"}
        </Typography>
        <Typography variant="h4">επιλογή</Typography>
        <CircularDeterminate />
      </Box>
    );
  // }
}
