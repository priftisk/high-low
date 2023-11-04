import { IconButton, Typography, Box } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { useNavigate } from "react-router-dom";
import Slide from "@mui/material/Slide";
export default function MainWeatherPage() {
  const navigate = useNavigate();
  return (
    <Slide direction="up" in={true} mountOnEnter timeout={500}>
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
        onClick={() => navigate("/weather")}
        sx={{
          color: "white",
          "&:hover": { color: "#9a62bd" },
          transition: "color 0.5s",
        }}
      >
        <ThermostatIcon sx={{ fontSize: "10rem" }} />
      </IconButton>
      <Typography sx={{ fontSize: "2rem", color: "white" }}>Weather</Typography>
    </Box>
    </Slide>
  );
}
