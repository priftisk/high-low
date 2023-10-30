import { Check } from "@mui/icons-material";
import { Box, Icon, Typography } from "@mui/material";
import DangerousIcon from "@mui/icons-material/Dangerous";

export default function ChoiceItem({ score, index }) {
  if (score === true || score === false) {
    return (
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={'space-between'}
        alignItems={"center"}
        minWidth={"2.8rem"}
        height={'2rem'}
        padding={'0.5rem'}  
        sx={{backgroundColor:'#63696b', borderRadius:'0.5rem'}}
      >
        <Typography component={"span"} sx={{ fontSize: "1rem" }}>
          {index + 1}.
        </Typography>
        <Icon>
          {score === true ? (
            <Check sx={{ color: "#4abd64" }} />
          ) : (
            <DangerousIcon sx={{ color: "#f5364c" }} />
          )}
        </Icon>
      </Box>
    );
  } else {
    return null;
  }
}
