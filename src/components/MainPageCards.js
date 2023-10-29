import { Box, Grid, IconButton } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useNavigate } from "react-router-dom";
export default function MainPageCards() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="#e8e4da"
      direction={"row"}
      gap={1}
      minHeight={"100vh"}
    >
      <Box
        sx={{
          width: "20rem",
          height: "20rem",
          backgroundColor: "black",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={() => navigate("/weather")}
          sx={{ color: "white", "&:hover": { color: "orange" } }}
        >
          <ThermostatIcon sx={{ fontSize: "10rem" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "20rem",
          height: "20rem",
          backgroundColor: "black",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={() => navigate("/movies")}
          sx={{ color: "white", "&:hover": { color: "orange" } }}
          size="10rem"
        >
          <LocalMoviesIcon sx={{ fontSize: "10rem" }} />
        </IconButton>
      </Box>
    </Grid>
  );
}
