import { Check } from "@mui/icons-material";
import { Box, Divider, Icon, Typography } from "@mui/material";
import DangerousIcon from "@mui/icons-material/Dangerous";

export default function ChoiceItem({ score, index }) {
  if (score === true || score === false) {
    return (
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyItems={"center"}
        alignItems={"center"}
        maxWidth={"1rem"}
        minHeight={"4rem"}
      >
         <Typography component={'span'} sx={{fontSize:'1rem'}}>{index + 1}.</Typography>
        <Icon>
          {score === true ? (
            <Check sx={{ color: "green" }} />
          ) : (
            <DangerousIcon sx={{ color: "red" }} />
          )}
        </Icon>
        {/* <Divider orientation="horizontal" flexItem sx={{paddingTop:'0.5rem', paddingBottom:'0.5rem'}}/> */}
      </Box>
    );
  } else {
    return null;
  }
}
