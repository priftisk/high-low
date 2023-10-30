import { IconButton, Typography, Box } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from "react-router-dom";
import Slide from "@mui/material/Slide";
export default function MainPagePopulations() {
  const navigate = useNavigate();
  return (
    <Slide direction="down" in={true} mountOnEnter timeout={500}>
      <Box
        sx={{
          width: "20rem",
          height: "20rem",
          backgroundColor: "#4d524e",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          disableFocusRipple
          disableRipple
          onClick={() => navigate("/movies")}
          sx={{
            color: "white",
            "&:hover": { color: "#9a62bd" },
            transition: "color 0.5s",
          }}
          size="10rem"
        >
          <GroupsIcon sx={{ fontSize: "10rem" }} />
        </IconButton>
        <Typography sx={{ fontSize: "2rem", color: "white" }}>
          Population
        </Typography>
      </Box>
    </Slide>
  );
}
